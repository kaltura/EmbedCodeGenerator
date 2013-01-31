/*! Kaltura Embed Code Generator - v0.1.0 - 2013-01-31
* http://www.kaltura.com/
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

(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.auto=a(function(a,b,c,d,e){function p(a,b){var d="",e;return d+="&cache_st=",i=c.cacheSt,e=i||a.cacheSt,typeof e===l?e=e.call(a,{hash:{}}):e===n&&(e=m.call(a,"cacheSt",{hash:{}})),d+=o(e),d}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<script type="text/javascript" src="',i=c.scriptUrl,g=i||b.scriptUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"scriptUrl",{hash:{}})),f+=o(g)+"?autoembed=true&entry_id=",i=c.entry,g=i||b.entry,g=g===null||g===undefined||g===!1?g:g.id,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"entry.id",{hash:{}})),f+=o(g)+"&playerId=",i=c.playerId,g=i||b.playerId,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"playerId",{hash:{}})),f+=o(g),i=c.cacheSt,g=i||b.cacheSt,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;f+="&width=",i=c.uiConf,g=i||b.uiConf,g=g===null||g===undefined||g===!1?g:g.width,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"uiConf.width",{hash:{}})),f+=o(g)+"&height=",i=c.uiConf,g=i||b.uiConf,g=g===null||g===undefined||g===!1?g:g.height,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"uiConf.height",{hash:{}})),f+=o(g),i=c.flashVars,g=i||b.flashVars,i=c.flashVarsUrl,h=i||b.flashVarsUrl,typeof h===l?g=h.call(b,g,{hash:{}}):h===n?g=m.call(b,"flashVarsUrl",g,{hash:{}}):g=h;if(g||g===0)f+=g;return f+='"></script>',f}),b.legacy=a(function(a,b,c,d,e){function p(a,b){return'\n	<a href="http://corp.kaltura.com/products/video-platform-features">Video Platform</a>\n	<a href="http://corp.kaltura.com/Products/Features/Video-Management">Video Management</a> \n	<a href="http://corp.kaltura.com/Video-Solutions">Video Solutions</a>\n	<a href="http://corp.kaltura.com/Products/Features/Video-Player">Video Player</a>\n	'}c=c||a.helpers;var f="",g,h,i,j,k=this,l="function",m=c.helperMissing,n=void 0,o=this.escapeExpression;f+='<script src="',i=c.scriptUrl,g=i||b.scriptUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"scriptUrl",{hash:{}})),f+=o(g)+'"></script>\n<object id="',i=c.elementName,g=i||b.elementName,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"elementName",{hash:{}})),f+=o(g)+'" name="',i=c.elementName,g=i||b.elementName,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"elementName",{hash:{}})),f+=o(g)+'" type="application/x-shockwave-flash" allowFullScreen="true" allowNetworking="all" allowScriptAccess="always" height="',i=c.height,g=i||b.height,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"height",{hash:{}})),f+=o(g)+'" width="',i=c.width,g=i||b.width,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"width",{hash:{}})),f+=o(g)+'" bgcolor="#000000" ',i=c.metaAtts,g=i||b.metaAtts,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"metaAtts",{hash:{}})),f+=o(g)+' data="',i=c.swfUrl,g=i||b.swfUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"swfUrl",{hash:{}})),f+=o(g)+'">\n	<param name="allowFullScreen" value="true" />\n	<param name="allowNetworking" value="all" />\n	<param name="allowScriptAccess" value="always" />\n	<param name="bgcolor" value="#000000" />\n	<param name="flashVars" value="',i=c.flashVars,g=i||b.flashVars,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"flashVars",{hash:{}})),f+=o(g)+'" />\n	<param name="movie" value="',i=c.swfUrl,g=i||b.swfUrl,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"swfUrl",{hash:{}})),f+=o(g)+'" />\n	',i=c.metaTags,g=i||b.metaTags,typeof g===l?g=g.call(b,{hash:{}}):g===n&&(g=m.call(b,"metaTags",{hash:{}})),f+=o(g)+"\n	",i=c.includeKalturaLinks,g=i||b.includeKalturaLinks,h=c["if"],j=k.program(1,p,e),j.hash={},j.fn=j,j.inverse=k.noop,g=h.call(b,g,j);if(g||g===0)f+=g;return f+="\n</object>",f}),b.legacy_seo=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i=this,j="function",k=c.helperMissing,l=void 0,m=this.escapeExpression;return f+='<a rel="media:thumbnail" href="',h=c.thumbUrl,g=h||b.thumbUrl,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"thumbUrl",{hash:{}})),f+=m(g)+'"></a>\n<span property="dc:description" content="',h=c.description,g=h||b.description,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"description",{hash:{}})),f+=m(g)+'"></span>\n<span property="media:title" content="',h=c.name,g=h||b.name,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"name",{hash:{}})),f+=m(g)+'"></span>\n<span property="media:width" content="',h=c.width,g=h||b.width,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"width",{hash:{}})),f+=m(g)+'"></span>\n<span property="media:height" content="',h=c.height,g=h||b.height,typeof g===j?g=g.call(b,{hash:{}}):g===l&&(g=k.call(b,"height",{hash:{}})),f+=m(g)+'"></span>\n<span property="media:type" content="application/x-shockwave-flash"></span>',f})})()
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
/*
 * Embed Code Generator
 * Used to generate different type of embed code
 * Depended on Handlebars ( http://handlebarsjs.com/ )
 */
 // http://ejohn.org/blog/simple-javascript-inheritance/

 (function( window, undefined ) {

Handlebars.registerHelper('flashVarsUrl', function(flashVars) {
	var str = '';
	for(var key in flashVars) {
		str += '&flashvars[' + key + ']=' + encodeURIComponent(flashVars[ key ]);
	}
	return str;
});

var extend = function(destination, source) {
    for (var property in source) {
        if (!destination.hasOwnProperty(property)) {
            destination[property] = source[property];
        }
    }
    return destination;
};

var isNull = function( property ) {
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
};

var EmbedCodeGenerator = function( options ) {
	this.init( options );
};

EmbedCodeGenerator.prototype = {

	types: ['auto', 'dynamic', 'thumb', 'legacy'],
	required: ['host', 'widgetId', 'partnerId', 'uiConf'],

	defaults: {
		embedType: 'legacy',
		playerId: 'kaltura_player',
		protocol: 'http',
		host: null,
		secured_host: null,
		widgetId: null,
		partnerId: null,
		cacheSt: 0,
		uiConf: {},
		entry: {},
		flashVars: {},
		includeKalturaLinks: true,
		includeSeoMetadata: true	
	},

	init: function( options ) {

		var defaults = this.defaults;

		// Make sure Handlebars is available
		if( typeof Handlebars === undefined ) {
			throw 'Handlebars is not defined, please include Handlebars.js before this script';
		}

		// Merge options with defaults
		if( typeof options === 'object' ) {
			this.options = extend(options, this.defaults);
		}
		// Set widgetId to partnerId if not defined
		if( ! this.config('widgetId') && this.config('partnerId') ) {
			this.config('widgetId', '_' + this.config('partnerId'));
		}

		return this;
	},

	checkRequiredParams: function( params ) {
		var requiredLength = this.required.length,
			i = 0;
		// Check for required configuration
		for(i; i<requiredLength; i++) {
			if( isNull(params[this.required[i]]) ) {
				throw 'Missing required parameter: ' + this.required[i];
			}
		}
	},

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

	getTemplate: function( type ) {
		return ( type && Handlebars.templates && Handlebars.templates[ type ] ) ? Handlebars.templates[ type ] : null;
	},

	isValid: function( type ) {
		if( type ) {
			return (this.types.indexOf(type) !== -1) ? true : false;
		}
		return false;
	},

	getScriptUrl: function( params ) {
		var host = (params.protocol === 'http') ? params.host : params.secured_host;
		return params.protocol + '://' + host + '/p/' + params.partnerId + '/sp/' + params.partnerId + '00/embedIframeJs/uiconf_id/' + params.uiConf.id + '/partner_id/' + params.partnerId;
	},

	getCode: function( params ) {
		// Merge with options
		params = extend( params, this.config() );

		// Check for missing params
		this.checkRequiredParams(params);

		// Check if embed type is valid
		if( ! this.isValid(params.embedType) ) {
			throw 'Embed type: ' + params.embedType + ' is not valid. Available types: ' + this.types.join(",");
		}
		// Check if we have a template
		var template = this.getTemplate(params.embedType);
		if( ! template ) {
			throw 'Template: ' + params.embedType + ' is not defined as Handlebars template';
		}

		var data = {
			scriptUrl: this.getScriptUrl( params )
		};

		data = extend( data, params );
		return template( data );

	}
};

/*

	getSwfUrl: function() {
		var url = this.config('protocol') + '://' + this.config('host') + '/index.php/kwidget/cache_st/' + 
					this.getCacheKey() + '/wid/' + this.config('widgetId') + '/uiconf_id/' + this.config('uiConfId');
		if( this.config('entryId') ) {
			url += '/entry_id/' + this.config('entryId');
		}
		return url;
	},

	getMetaAtts: function() {
		if( this.get('includeSeoLinks') ) {
			return 'xmlns:dc="http://purl.org/dc/terms/" xmlns:media="http://search.yahoo.com/searchmonkey/media/" rel="media:video" resource="' + this.getSwfUrl() + '"';	
		}
		return '';
	},

	getMetaTags: function() {
		var tags = '';

		if( this.get('includeKalturaLinks') ) {
			tags += $('#kaltura_links').html();
		}

		if( this.get('includeSeoLinks') ) {
			tags += _.template(
				$('#media_seo_info'), {
					thumbUrl: this.getThumbnailUrl(),
					name: this.get('name'),
					description: this.get('description'),
					width: this.get('width'),
					height: this.get('height')
			});
		}

		return tags;
	},	

	getCacheKey: function() {
		if( ! this.cacheKey ) {
			var d = new Date;
			this.cacheKey = Math.floor(d.getTime() / 1000) + (15 * 60); // time + 15 mins
		}
		return this.cacheKey;
	},

*/

// Export module to window object
window.EmbedCodeGenerator = EmbedCodeGenerator;

 })(this);