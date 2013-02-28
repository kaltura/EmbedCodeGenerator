/*! Kaltura Embed Code Generator - v1.0.6 - 2013-02-28
* https://github.com/kaltura/EmbedCodeGenerator
* Copyright (c) 2013 Ran Yefet; Licensed MIT */

// lib/handlebars/base.js

/*jshint eqnull:true*/
this.Handlebars = {};

(function(Handlebars) {

Handlebars.VERSION = "1.0.rc.2";

Handlebars.helpers  = {};
Handlebars.partials = {};

Handlebars.registerHelper = function(name, fn, inverse) {
  if(inverse) { fn.not = inverse; }
  this.helpers[name] = fn;
};

Handlebars.registerPartial = function(name, str) {
  this.partials[name] = str;
};

Handlebars.registerHelper('helperMissing', function(arg) {
  if(arguments.length === 2) {
    return undefined;
  } else {
    throw new Error("Could not find property '" + arg + "'");
  }
});

var toString = Object.prototype.toString, functionType = "[object Function]";

Handlebars.registerHelper('blockHelperMissing', function(context, options) {
  var inverse = options.inverse || function() {}, fn = options.fn;


  var ret = "";
  var type = toString.call(context);

  if(type === functionType) { context = context.call(this); }

  if(context === true) {
    return fn(this);
  } else if(context === false || context == null) {
    return inverse(this);
  } else if(type === "[object Array]") {
    if(context.length > 0) {
      return Handlebars.helpers.each(context, options);
    } else {
      return inverse(this);
    }
  } else {
    return fn(context);
  }
});

Handlebars.K = function() {};

Handlebars.createFrame = Object.create || function(object) {
  Handlebars.K.prototype = object;
  var obj = new Handlebars.K();
  Handlebars.K.prototype = null;
  return obj;
};

Handlebars.logger = {
  DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 3,

  methodMap: {0: 'debug', 1: 'info', 2: 'warn', 3: 'error'},

  // can be overridden in the host environment
  log: function(level, obj) {
    if (Handlebars.logger.level <= level) {
      var method = Handlebars.logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, obj);
      }
    }
  }
};

Handlebars.log = function(level, obj) { Handlebars.logger.log(level, obj); };

Handlebars.registerHelper('each', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var i = 0, ret = "", data;

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  if(context && typeof context === 'object') {
    if(context instanceof Array){
      for(var j = context.length; i<j; i++) {
        if (data) { data.index = i; }
        ret = ret + fn(context[i], { data: data });
      }
    } else {
      for(var key in context) {
        if(context.hasOwnProperty(key)) {
          if(data) { data.key = key; }
          ret = ret + fn(context[key], {data: data});
          i++;
        }
      }
    }
  }

  if(i === 0){
    ret = inverse(this);
  }

  return ret;
});

Handlebars.registerHelper('if', function(context, options) {
  var type = toString.call(context);
  if(type === functionType) { context = context.call(this); }

  if(!context || Handlebars.Utils.isEmpty(context)) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

Handlebars.registerHelper('unless', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  options.fn = inverse;
  options.inverse = fn;

  return Handlebars.helpers['if'].call(this, context, options);
});

Handlebars.registerHelper('with', function(context, options) {
  return options.fn(context);
});

Handlebars.registerHelper('log', function(context, options) {
  var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
  Handlebars.log(level, context);
});

}(this.Handlebars));
;
// lib/handlebars/utils.js

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

Handlebars.Exception = function(message) {
  var tmp = Error.prototype.constructor.apply(this, arguments);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }
};
Handlebars.Exception.prototype = new Error();

// Build out our basic SafeString type
Handlebars.SafeString = function(string) {
  this.string = string;
};
Handlebars.SafeString.prototype.toString = function() {
  return this.string.toString();
};

(function() {
  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  var escapeChar = function(chr) {
    return escape[chr] || "&amp;";
  };

  Handlebars.Utils = {
    escapeExpression: function(string) {
      // don't escape SafeStrings, since they're already safe
      if (string instanceof Handlebars.SafeString) {
        return string.toString();
      } else if (string == null || string === false) {
        return "";
      }

      if(!possible.test(string)) { return string; }
      return string.replace(badChars, escapeChar);
    },

    isEmpty: function(value) {
      if (!value && value !== 0) {
        return true;
      } else if(Object.prototype.toString.call(value) === "[object Array]" && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
  };
})();;
// lib/handlebars/runtime.js
Handlebars.VM = {
  template: function(templateSpec) {
    // Just add water
    var container = {
      escapeExpression: Handlebars.Utils.escapeExpression,
      invokePartial: Handlebars.VM.invokePartial,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          return Handlebars.VM.program(fn, data);
        } else if(programWrapper) {
          return programWrapper;
        } else {
          programWrapper = this.programs[i] = Handlebars.VM.program(fn);
          return programWrapper;
        }
      },
      programWithDepth: Handlebars.VM.programWithDepth,
      noop: Handlebars.VM.noop
    };

    return function(context, options) {
      options = options || {};
      return templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
    };
  },

  programWithDepth: function(fn, data, $depth) {
    var args = Array.prototype.slice.call(arguments, 2);

    return function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
  },
  program: function(fn, data) {
    return function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
  },
  noop: function() { return ""; },
  invokePartial: function(partial, name, context, helpers, partials, data) {
    var options = { helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Handlebars.Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    } else if (!Handlebars.compile) {
      throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    } else {
      partials[name] = Handlebars.compile(partial, {data: data !== undefined});
      return partials[name](context, options);
    }
  }
};

Handlebars.template = Handlebars.VM.template;
;

(function (window, Handlebars, undefined ) {
/**
* Transforms flashVars object into a string for Url or Flashvars string.
*
* @method flashVarsToUrl
* @param {Object} flashVarsObject A flashvars object
* @param {String} paramName The name parameter to add to url
* @return {String} Returns flashVars string like: &foo=bar or &param[foo]=bar
*/
var flashVarsToUrl = function( flashVarsObject, paramName ) {
	 var params = '';

	 var paramPrefix = (paramName) ? paramName + '[' : '';
	 var paramSuffix = (paramName) ? ']' : '';

	 for( var i in flashVarsObject ){
		 // check for object representation of plugin config:
		 if( typeof flashVarsObject[i] == 'object' ){
			 for( var j in flashVarsObject[i] ){
				 params+= '&' + paramPrefix + encodeURIComponent( i ) +
				 	'.' + encodeURIComponent( j ) + paramSuffix + 
				 	'=' + encodeURIComponent( flashVarsObject[i][j] );
			 }
		 } else {
			 params+= '&' + paramPrefix + encodeURIComponent( i ) + paramSuffix + '=' + encodeURIComponent( flashVarsObject[i] );
		 }
	 }
	 return params;
};

// Setup handlebars helpers
Handlebars.registerHelper('flashVarsUrl', function(flashVars) {
	return flashVarsToUrl(flashVars, 'flashvars');
});
Handlebars.registerHelper('flashVarsString', function(flashVars) {
	return flashVarsToUrl(flashVars);
});
Handlebars.registerHelper('elAttributes', function( attributes ) {
	var str = '';
	for( var i in attributes ) {
		str += ' ' + i + '="' + attributes[i] + '"';
	}
	return str;
});
// Include kaltura links
Handlebars.registerHelper('kalturaLinks', function() {
	if( ! this.includeKalturaLinks ) {
		return '';
	}
	var template = Handlebars.templates['kaltura_links'];
	return template();
});

Handlebars.registerHelper('seoMetadata', function() {
	var template = Handlebars.templates['seo_metadata'];
	return template(this);
});

})(this, this.Handlebars);
(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.auto=a(function(a,b,c,d,e){function p(a,b){var d="",e,f;d+='<div id="',i=c.playerId,e=i||a.playerId,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"playerId",{hash:{}})),d+=o(e)+'"',i=c.attributes,e=i||a.attributes,i=c.elAttributes,f=i||a.elAttributes,typeof f===l?e=f.call(a,e,{hash:{}}):f===n?e=m.call(a,"elAttributes",e,{hash:{}}):e=f;if(e||e===0)d+=e;d+=">",i=c.seoMetadata,e=i||a.seoMetadata,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"seoMetadata",{hash:{}}));if(e||e===0)d+=e;i=c.kalturaLinks,e=i||a.kalturaLinks,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"kalturaLinks",{hash:{}}));if(e||e===0)d+=e;return d+="</div>\n",d}function q(a,b){var d="",e;return d+="&entry_id=",i=c.entryId,e=i||a.entryId,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"entryId",{hash:{}})),d+=o(e),d}function r(a,b){var d="",e;return d+="&cache_st=",i=c.cacheSt,e=i||a.cacheSt,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"cacheSt",{hash:{}})),d+=o(e),d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;i=c.includeSeoMetadata,g=i||b.includeSeoMetadata,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='<script src="',i=c.scriptUrl,g=i||b.scriptUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"scriptUrl",{hash:{}})),f+=o(g)+"?autoembed=true",i=c.entryId,g=i||b.entryId,h=c["if"],j=k.program(3,q,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="&playerId=",i=c.playerId,g=i||b.playerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"playerId",{hash:{}})),f+=o(g),i=c.cacheSt,g=i||b.cacheSt,h=c["if"],j=k.program(5,r,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="&width=",i=c.width,g=i||b.width,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"width",{hash:{}})),f+=o(g)+"&height=",i=c.height,g=i||b.height,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"height",{hash:{}})),f+=o(g),i=c.flashVars,g=i||b.flashVars,i=c.flashVarsUrl,h=i||b.flashVarsUrl,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"flashVarsUrl",g,{hash:{}}):g=h;if(g||g===0)f+=g;return f+='"></script>',f}),b.dynamic=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i,j=this,k="function",l=c.helperMissing,m=void 0,n=this.escapeExpression;f+='<script src="',i=c.scriptUrl,g=i||b.scriptUrl,typeof g===k?g=g.call(b,{hash:{}}):g===m&&(g=l.call(b,"scriptUrl",{hash:{}})),f+=n(g)+'"></script>\n<div id="',i=c.playerId,g=i||b.playerId,typeof g===k?g=g.call(b,{hash:{}}):g===m&&(g=l.call(b,"playerId",{hash:{}})),f+=n(g)+'"',i=c.attributes,g=i||b.attributes,i=c.elAttributes,h=i||b.elAttributes,typeof h===k?g=h.call(b,g,{hash:{}}):h===m?g=l.call(b,"elAttributes",g,{hash:{}}):g=h;if(g||g===0)f+=g;f+=">",i=c.seoMetadata,g=i||b.seoMetadata,typeof g===k?g=g.call(b,{hash:{}}):g===m&&(g=l.call(b,"seoMetadata",{hash:{}}));if(g||g===0)f+=g;i=c.kalturaLinks,g=i||b.kalturaLinks,typeof g===k?g=g.call(b,{hash:{}}):g===m&&(g=l.call(b,"kalturaLinks",{hash:{}}));if(g||g===0)f+=g;f+="</div>\n<script>\nkWidget.",i=c.embedMethod,g=i||b.embedMethod,typeof g===k?g=g.call(b,{hash:{}}):g===m&&(g=l.call(b,"embedMethod",{hash:{}})),f+=n(g)+"(",i=c.kWidgetObject,g=i||b.kWidgetObject,typeof g===k?g=g.call(b,{hash:{}}):g===m&&(g=l.call(b,"kWidgetObject",{hash:{}}));if(g||g===0)f+=g;return f+=");\n</script>",f}),b.iframe=a(function(a,b,c,d,e){function p(a,b){var d="",e;return d+="&entry_id=",i=c.entryId,e=i||a.entryId,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"entryId",{hash:{}})),d+=o(e),d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<iframe src="',i=c.protocol,g=i||b.protocol,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"protocol",{hash:{}})),f+=o(g)+"://",i=c.host,g=i||b.host,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"host",{hash:{}})),f+=o(g)+"/p/",i=c.partnerId,g=i||b.partnerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"partnerId",{hash:{}})),f+=o(g)+"/sp/",i=c.partnerId,g=i||b.partnerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"partnerId",{hash:{}})),f+=o(g)+"00/embedIframeJs/uiconf_id/",i=c.uiConfId,g=i||b.uiConfId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"uiConfId",{hash:{}})),f+=o(g)+"/partner_id/",i=c.partnerId,g=i||b.partnerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"partnerId",{hash:{}})),f+=o(g)+"?iframeembed=true&playerId=",i=c.playerId,g=i||b.playerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"playerId",{hash:{}})),f+=o(g),i=c.entryId,g=i||b.entryId,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;i=c.flashVars,g=i||b.flashVars,i=c.flashVarsUrl,h=i||b.flashVarsUrl,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"flashVarsUrl",g,{hash:{}}):g=h;if(g||g===0)f+=g;f+='" width="',i=c.width,g=i||b.width,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"width",{hash:{}})),f+=o(g)+'" height="',i=c.height,g=i||b.height,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"height",{hash:{}})),f+=o(g)+'" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder="0"',i=c.attributes,g=i||b.attributes,i=c.elAttributes,h=i||b.elAttributes,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"elAttributes",g,{hash:{}}):g=h;if(g||g===0)f+=g;f+=">",i=c.seoMetadata,g=i||b.seoMetadata,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"seoMetadata",{hash:{}}));if(g||g===0)f+=g;i=c.kalturaLinks,g=i||b.kalturaLinks,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"kalturaLinks",{hash:{}}));if(g||g===0)f+=g;return f+="</iframe>",f}),b.kaltura_links=a(function(a,b,c,d,e){c=c||a.helpers;var f,g=this;return'<a href="http://corp.kaltura.com/products/video-platform-features">Video Platform</a>\n<a href="http://corp.kaltura.com/Products/Features/Video-Management">Video Management</a> \n<a href="http://corp.kaltura.com/Video-Solutions">Video Solutions</a>\n<a href="http://corp.kaltura.com/Products/Features/Video-Player">Video Player</a>'}),b.legacy=a(function(a,b,c,d,e){function p(a,b){var d="",e;return d+='<script src="',i=c.scriptUrl,e=i||a.scriptUrl,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"scriptUrl",{hash:{}})),d+=o(e)+'"></script>\n',d}function q(a,b){var d="",e;return d+='\n	<a rel="media:thumbnail" href="',i=c.entryMeta,e=i||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.thumbnailUrl,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"entryMeta.thumbnailUrl",{hash:{}})),d+=o(e)+'"></a>\n	<span property="dc:description" content="',i=c.entryMeta,e=i||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.description,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"entryMeta.description",{hash:{}})),d+=o(e)+'"></span>\n	<span property="media:title" content="',i=c.entryMeta,e=i||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.name,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"entryMeta.name",{hash:{}})),d+=o(e)+'"></span>\n	<span property="media:width" content="',i=c.width,e=i||a.width,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"width",{hash:{}})),d+=o(e)+'"></span>\n	<span property="media:height" content="',i=c.height,e=i||a.height,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"height",{hash:{}})),d+=o(e)+'"></span>\n	<span property="media:type" content="application/x-shockwave-flash"></span>	\n	',d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;i=c.includeHtml5Library,g=i||b.includeHtml5Library,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+='<object id="',i=c.playerId,g=i||b.playerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"playerId",{hash:{}})),f+=o(g)+'" name="',i=c.playerId,g=i||b.playerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"playerId",{hash:{}})),f+=o(g)+'" type="application/x-shockwave-flash" allowFullScreen="true" allowNetworking="all" allowScriptAccess="always" height="',i=c.height,g=i||b.height,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"height",{hash:{}})),f+=o(g)+'" width="',i=c.width,g=i||b.width,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"width",{hash:{}})),f+=o(g)+'" bgcolor="#000000"',i=c.attributes,g=i||b.attributes,i=c.elAttributes,h=i||b.elAttributes,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"elAttributes",g,{hash:{}}):g=h;if(g||g===0)f+=g;f+=' data="',i=c.swfUrl,g=i||b.swfUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"swfUrl",{hash:{}})),f+=o(g)+'">\n	<param name="allowFullScreen" value="true" />\n	<param name="allowNetworking" value="all" />\n	<param name="allowScriptAccess" value="always" />\n	<param name="bgcolor" value="#000000" />\n	<param name="flashVars" value="',i=c.flashVars,g=i||b.flashVars,i=c.flashVarsString,h=i||b.flashVarsString,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"flashVarsString",g,{hash:{}}):g=h;if(g||g===0)f+=g;f+='" />\n	<param name="movie" value="',i=c.swfUrl,g=i||b.swfUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"swfUrl",{hash:{}})),f+=o(g)+'" />\n	',i=c.includeSeoMetadata,g=i||b.includeSeoMetadata,h=c["if"],j=k.program(3,q,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;i=c.kalturaLinks,g=i||b.kalturaLinks,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"kalturaLinks",{hash:{}}));if(g||g===0)f+=g;return f+="\n</object>",f}),b.seo_metadata=a(function(a,b,c,d,e){function o(a,b){var d="",e;return d+='\n<span itemprop="name" content="',h=c.entryMeta,e=h||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.name,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"entryMeta.name",{hash:{}})),d+=n(e)+'"></span>\n<span itemprop="description" content="',h=c.entryMeta,e=h||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.description,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"entryMeta.description",{hash:{}})),d+=n(e)+'"></span>\n<span itemprop="duration" content="',h=c.entryMeta,e=h||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.duration,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"entryMeta.duration",{hash:{}})),d+=n(e)+'"></span>\n<span itemprop="thumbnail" content="',h=c.entryMeta,e=h||a.entryMeta,e=e===null||e===undefined||e===!1?e:e.thumbnailUrl,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"entryMeta.thumbnailUrl",{hash:{}})),d+=n(e)+'"></span>\n<span itemprop="width" content="',h=c.width,e=h||a.width,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"width",{hash:{}})),d+=n(e)+'"></span>\n<span itemprop="height" content="',h=c.height,e=h||a.height,typeof e===k?e=e.call(a,{hash:{}}):e===m&&(e=l.call(a,"height",{hash:{}})),d+=n(e)+'"></span>\n',d}c=c||a.helpers;var f,g,h,i,j=this,k="function",l=c.helperMissing,m=void 0,n=this.escapeExpression;return h=c.includeSeoMetadata,f=h||b.includeSeoMetadata,g=c["if"],i=j.program(1,o,e),i.hash={},i.fn=i,i.inverse=j.noop,f=g.call(b,f,i),f||f===0?f:""})})()
// Add indexOf to array object
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this == null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
// Add keys for Object
if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;
 
    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) {
        throw new TypeError('Object.keys called on non-object');
      }
 
      var result = [];
 
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }
 
      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          } 
        }
      }
      return result;
    };
  })();
}
(function( window, undefined ) {
/**
* Kaltura Embed Code Generator
* Used to generate different type of embed codes
* Depended on Handlebars ( http://handlebarsjs.com/ )
* 
* @class EmbedCodeGenerator
* @constructor
*/
var EmbedCodeGenerator = function( options ) {
	this.init( options );
};

EmbedCodeGenerator.prototype = {

	types: ['auto', 'dynamic', 'thumb', 'iframe', 'legacy'],
	required: ['widgetId', 'partnerId', 'uiConfId'],

	defaults: {
		/**
		* Embed code type to generate
		* Can we one of: ['auto', 'dynamic', 'thumb', 'iframe', 'legacy']
		* 
		* @property embedType
		* @type {String}
		* @default "auto"
		*/		
		embedType: 'auto',
		/**
		* The Player element Id / Name that will be used for embed code
		* 
		* @property playerId
		* @type {String}
		* @default "kaltura_player"
		*/			
		playerId: 'kaltura_player',
		/**
		* Embed HTTP protocol to use
		* Can we one of: ['http', 'https']
		* 
		* @property protocol
		* @type {String}
		* @default "http"
		*/			
		protocol: 'http',
		/**
		* Host for loading html5 library & kdp swf
		* 
		* @property host
		* @type {String}
		* @default "www.kaltura.com"
		*/			
		host: 'www.kaltura.com',
		/**
		* Secured host for loading html5 library & kdp swf
		* Used if protocol is: 'https'
		* 
		* @property securedHost
		* @type {String}
		* @default "www.kaltura.com"
		*/		
		securedHost: 'www.kaltura.com',
		/**
		* Kaltura Widget Id
		* 
		* @property widgetId
		* @type {String}
		* @default "_{partnerId}"
		*/
		widgetId: null,
		/**
		* Kaltura Partner Id
		* 
		* @property partnerId
		* @type {Number}
		* @default null,
		*/
		partnerId: null,
		/**
		* Add cacheSt parameter to bust cache
		* Should be unix timestamp of future time
		* 
		* @property cacheSt
		* @type {Number}
		* @default null,
		*/		
		cacheSt: null,
		/**
		* Kaltura UiConf Id
		* 
		* @property uiConfId
		* @type {Number}
		* @default null,
		*/		
		uiConfId: null,
		/**
		* Kaltura Entry Id
		* 
		* @property entryId
		* @type {String}
		* @default null,
		*/		
		entryId: null,		
		/**
		* Entry Object similar to:
		* {
		*	name: 'Foo', 
		*	description: 'Bar', 
		*	thumbUrl: 'http://cdnbakmi.kaltura.com/thumbnail/...'
		* }
		* 
		* @property entryMeta
		* @type {Object}
		* @default {},
		*/		
		entryMeta: {},
		/**
		* Sets Player Width
		* 
		* @property width
		* @type {Number}
		* @default 400,
		*/		
		width: 400,
		/**
		* Sets Player Height
		* 
		* @property height
		* @type {Number}
		* @default 330,
		*/		
		height: 330,
		/**
		* Adds additonal attributes to embed code.
		* Example:
		* {
		*	"class": "player"
		* }
		* 
		* @property attributes
		* @type {Object}
		* @default {},
		*/	
		attributes: {},
		/**
		* Adds flashVars to player
		* Example:
		* {
		*	"autoPlay": "true"
		* }
		* 
		* @property flashVars
		* @type {Object}
		* @default {},
		*/			
		flashVars: {},
		/**
		* Include Kaltura SEO links to embed code
		* 
		* @property includeKalturaLinks
		* @type {Boolean}
		* @default true,
		*/
		includeKalturaLinks: true,
		/**
		* Include Entry Seo Metadata
		* Metadata is taken from {entryMeta} object
		* 
		* @property includeSeoMetadata
		* @type {Boolean}
		* @default false,
		*/
		includeSeoMetadata: false,
		/**
		* Include HTML5 library script
		* 
		* @property includeHtml5Library
		* @type {Boolean}
		* @default true,
		*/
		includeHtml5Library: true
	},
	/**
	* Merge two object together
	*
	* @method extend
	* @param {Object} destination object to merge into
	* @param {Object} sourece object to merge from
	* @return {Object} Merged object
	*/
	extend: function(destination, source) {
	    for (var property in source) {
	        if (source.hasOwnProperty(property) && !destination.hasOwnProperty(property)) {
	            destination[property] = source[property];
	        }
	    }
	    return destination;
	},
	/**
	* Check if property is null
	*
	* @method isNull
	* @param {Any} property some var
	* @return {Boolean}
	*/
	isNull: function( property ) {
		if (property.length && property.length > 0) {
			return false;
		}
	    if (property.length && property.length === 0) {
	    	return true;
	    }
		if( typeof property === 'object' ) {
			return (Object.keys(property).length > 0) ? false : true;
		}
		return !property;
	},
	/**
	* Set default options to EmbedCodeGenerator instance
	*
	* @method init
	* @param {Object} options Configuration object based on defaults object
	* @return {Object} Returns the current instance
	*/
	init: function( options ) {

		options = options || {}; 

		var defaults = this.defaults;

		// Make sure Handlebars is available
		if( typeof Handlebars === undefined ) {
			throw 'Handlebars is not defined, please include Handlebars.js before this script';
		}

		// Merge options with defaults
		if( typeof options === 'object' ) {
			this.options = this.extend(options, this.defaults);
		}
		// Set widgetId to partnerId if not defined
		if( ! this.config('widgetId') && this.config('partnerId') ) {
			this.config('widgetId', '_' + this.config('partnerId'));
		}

		return this;
	},
	/**
	* Get or Set default configuration
	*
	* @method config
	* @param {String} key configuration property name
	* @param {Any} value to set
	* @return {Mixed} Return the value for the key, configuration object or null
	*/
	config: function( key, val ) {
		// Used as getter
		if( val === undefined && typeof key === 'string' && this.options.hasOwnProperty(key) ) {
			return this.options[ key ];
		}
		// Get all options
		if( key === undefined && val === undefined ) {
			return this.options;
		}
		// Used as setter
		if( typeof key === 'string' && val !== undefined ) {
			this.options[ key ] = val;
		}
		return null;
	},
	/**
	* Check if required parameters are missing
	*
	* @method checkRequiredParams
	* @param {Object} Configuration object
	* @return throws exception if missing parameters
	*/
	checkRequiredParams: function( params ) {
		var requiredLength = this.required.length,
			i = 0;
		// Check for required configuration
		for(i; i<requiredLength; i++) {
			if( this.isNull(params[this.required[i]]) ) {
				throw 'Missing required parameter: ' + this.required[i];
			}
		}
	},	
	/**
	* Check if embed type is part of types array
	*
	* @method checkValidType
	* @param {String} type - One of config embed types
	* @return throws exception if not valid
	*/
	checkValidType: function( type ) {
		var valid = (this.types.indexOf(type) !== -1) ? true : false;;
		if( !valid ) {
			throw 'Embed type: ' + type + ' is not valid. Available types: ' + this.types.join(",");
		}
	},
	/**
	* Get Handlebars template based on embed type
	*
	* @method getTemplate
	* @param {String} type - One of config embed types
	* @return {Mixed} If found returns Handlebars template function, else null
	*/
	getTemplate: function( type ) {
		// Dynamic embed and Thumb embed has the same template
		type = (type == 'thumb') ? 'dynamic' : type;		
		return ( type && Handlebars.templates && Handlebars.templates[ type ] ) ? Handlebars.templates[ type ] : null;
	},
	/**
	* Check if embed type is using kWidget embed
	*
	* @method isKWidgetEmbed
	* @param {String} type - One of config embed types
	* @return {Boolean} true / false
	*/
	isKWidgetEmbed: function( type ) {
		return ( type == 'dynamic' || type == 'thumb' ) ? true : false;
	},
	/**
	* Get embed host based on protocol
	*
	* @method getHost
	* @param {Object} params Configuration object
	* @return {String} Embed host
	*/
	getHost: function( params ) {
		return (params.protocol === 'http') ? params.host : params.securedHost;
	},
	/**
	* Generate HTML5 library script url
	*
	* @method getScriptUrl
	* @param {Object} params Configuration object
	* @return {String} HTML5 library script Url
	*/
	getScriptUrl: function( params ) {
		return params.protocol + '://' + this.getHost(params) + '/p/' + params.partnerId + '/sp/' + params.partnerId + '00/embedIframeJs/uiconf_id/' + params.uiConfId + '/partner_id/' + params.partnerId;
	},
	/**
	* Generate Flash SWF url
	*
	* @method getSwfUrl
	* @param {Object} params Configuration object
	* @return {String} Flash player SWF url
	*/
	getSwfUrl: function( params ) {
		var cacheSt = (params.cacheSt) ? '/cache_st/' + params.cacheSt : '';
		var entryId = (params.entryId) ? '/entry_id/' + params.entryId : '';
		return params.protocol + '://' + this.getHost(params) + '/index.php/kwidget' + cacheSt + 
				'/wid/' + params.widgetId + '/uiconf_id/' + params.uiConfId + entryId;
	},
	/**
	* Generate attributes object based on configuration
	*
	* @method getAttributes
	* @param {Object} params Configuration object
	* @return {Object} Attributes object
	*/
	getAttributes: function( params ) {
		var attrs = {};

		// Add style attribute for dynamic / thumb embeds
		// Or if includeSeoMetadata is true
		if( this.isKWidgetEmbed( params.embedType ) || params.includeSeoMetadata ) {
			attrs['style'] = 'width: ' + params.width + 'px; height: ' + params.height + 'px;';
		}

		// Add Seo attributes
		if( params.includeSeoMetadata ) {
			if( params.embedType == 'legacy' ) {
				attrs["xmlns:dc"] = "http://purl.org/dc/terms/";
				attrs["xmlns:media"] = "http://search.yahoo.com/searchmonkey/media/";
				attrs["rel"] = "media:video";
				attrs["resource"] = this.getSwfUrl( params );
			} else {
				attrs['itemprop'] = 'video'; 
				attrs['itemscope itemtype'] = 'http://schema.org/VideoObject';
			}
		}

		return attrs;
	},
	/**
	* Generate kWidget object for HTML5 library
	*
	* @method getEmbedObject
	* @param {Object} params Configuration object
	* @return {Object} kWidget object
	*/
	getEmbedObject: function( params ) {
		// Used by kWidget.embed
		var embedObject = {
			targetId: params.playerId,		
			wid: params.widgetId,
			uiconf_id: params.uiConfId,
			flashvars: params.flashVars
		};
		// Add cacheSt
		if( params.cacheSt ) {
			embedObject['cache_st'] = params.cacheSt;
		}
		// Add entryId
		if( params.entryId ) {
			embedObject['entry_id'] = params.entryId;
		}
		// Transform object into a string
		return JSON.stringify(embedObject, null, 2);
	},
	/**
	* Generate Final Embed Code
	*
	* @method getCode
	* @param {Object} params Configuration object
	* @return {String} HTML embed code
	*/
	getCode: function( localParams ) {
		// Set default for params
		var params = (localParams === undefined) ? {} : this.extend({}, localParams);
		// Merge with options
		params = this.extend( params, this.config() );
		// Set widgetId to partnerId if undefined
		if( ! params.widgetId && params.partnerId ) {
			params.widgetId = '_' + params.partnerId;
		}

		this.checkRequiredParams(params); // Check for missing params
		this.checkValidType(params.embedType); // Check if embed type is valid

		// Check if we have a template
		var template = this.getTemplate(params.embedType);
		if( ! template ) {
			throw 'Template: ' + params.embedType + ' is not defined as Handlebars template';
		}

		// Add basic attributes for all embed codes
		var data = {
			host: this.getHost( params ),
			scriptUrl: this.getScriptUrl( params ),
			attributes: this.getAttributes( params )
		};
		// Add SWF Url for flash embeds
		if( params.embedType === 'legacy' ) {
			data['swfUrl'] = this.getSwfUrl( params );
		}
		// Add embed method and embed object for dynamic embeds
		if( this.isKWidgetEmbed( params.embedType ) ) {
			data['embedMethod'] = (params.embedType == 'dynamic') ? 'embed' : 'thumbEmbed';
			data['kWidgetObject'] = this.getEmbedObject( params );
		}

		data = this.extend( data, params );
		return template( data );
	}
};

// Export module to window object
window.kEmbedCodeGenerator = EmbedCodeGenerator;

 })(this);