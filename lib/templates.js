this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["templates/auto.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":35},"end":{"line":1,"column":47}}}) : helper)))
    + "\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":1,"column":48},"end":{"line":1,"column":77}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"seoMetadata") || (depth0 != null ? lookupProperty(depth0,"seoMetadata") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seoMetadata","hash":{},"data":data,"loc":{"start":{"line":1,"column":78},"end":{"line":1,"column":95}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":1,"column":95},"end":{"line":1,"column":113}}}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&entry_id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"entryId") || (depth0 != null ? lookupProperty(depth0,"entryId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"entryId","hash":{},"data":data,"loc":{"start":{"line":2,"column":73},"end":{"line":2,"column":84}}}) : helper)));
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&wid="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"widgetId") || (depth0 != null ? lookupProperty(depth0,"widgetId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"widgetId","hash":{},"data":data,"loc":{"start":{"line":2,"column":112},"end":{"line":2,"column":124}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&cache_st="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"cacheSt") || (depth0 != null ? lookupProperty(depth0,"cacheSt") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cacheSt","hash":{},"data":data,"loc":{"start":{"line":2,"column":178},"end":{"line":2,"column":189}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"includeSeoMetadata") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":2,"column":7}}})) != null ? stack1 : "")
    + "<script src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"scriptUrl") || (depth0 != null ? lookupProperty(depth0,"scriptUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scriptUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":20},"end":{"line":2,"column":33}}}) : helper)))
    + "?autoembed=true"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"entryId") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":48},"end":{"line":2,"column":91}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"widgetId") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":91},"end":{"line":2,"column":131}}})) != null ? stack1 : "")
    + "&playerId="
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":141},"end":{"line":2,"column":153}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"cacheSt") : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":153},"end":{"line":2,"column":196}}})) != null ? stack1 : "")
    + "&width="
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":203},"end":{"line":2,"column":212}}}) : helper)))
    + "&height="
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":2,"column":220},"end":{"line":2,"column":230}}}) : helper)))
    + ((stack1 = (lookupProperty(helpers,"flashVarsUrl")||(depth0 && lookupProperty(depth0,"flashVarsUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flashVars") : depth0),{"name":"flashVarsUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":230},"end":{"line":2,"column":258}}})) != null ? stack1 : "")
    + "\"></script>";
},"useData":true});

this["Handlebars"]["templates"]["templates/dynamic.hbs"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"scriptUrl") || (depth0 != null ? lookupProperty(depth0,"scriptUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"scriptUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":13},"end":{"line":1,"column":26}}}) : helper)))
    + "\"></script>\n<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":21}}}) : helper)))
    + "\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":2,"column":22},"end":{"line":2,"column":51}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"seoMetadata") || (depth0 != null ? lookupProperty(depth0,"seoMetadata") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seoMetadata","hash":{},"data":data,"loc":{"start":{"line":2,"column":52},"end":{"line":2,"column":69}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":2,"column":69},"end":{"line":2,"column":87}}}) : helper))) != null ? stack1 : "")
    + "</div>\n<script>\nkWidget."
    + alias4(((helper = (helper = lookupProperty(helpers,"embedMethod") || (depth0 != null ? lookupProperty(depth0,"embedMethod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"embedMethod","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":23}}}) : helper)))
    + "("
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kWidgetObject") || (depth0 != null ? lookupProperty(depth0,"kWidgetObject") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kWidgetObject","hash":{},"data":data,"loc":{"start":{"line":4,"column":24},"end":{"line":4,"column":43}}}) : helper))) != null ? stack1 : "")
    + ");\n</script>";
},"useData":true});

this["Handlebars"]["templates"]["templates/iframe.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&entry_id="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"entryId") || (depth0 != null ? lookupProperty(depth0,"entryId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"entryId","hash":{},"data":data,"loc":{"start":{"line":1,"column":215},"end":{"line":1,"column":226}}}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "&wid="
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"widgetId") || (depth0 != null ? lookupProperty(depth0,"widgetId") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"widgetId","hash":{},"data":data,"loc":{"start":{"line":1,"column":254},"end":{"line":1,"column":266}}}) : helper)));
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<iframe id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":12},"end":{"line":1,"column":24}}}) : helper)))
    + "\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"protocol") || (depth0 != null ? lookupProperty(depth0,"protocol") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"protocol","hash":{},"data":data,"loc":{"start":{"line":1,"column":31},"end":{"line":1,"column":43}}}) : helper)))
    + "://"
    + alias4(((helper = (helper = lookupProperty(helpers,"host") || (depth0 != null ? lookupProperty(depth0,"host") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"host","hash":{},"data":data,"loc":{"start":{"line":1,"column":46},"end":{"line":1,"column":54}}}) : helper)))
    + "/p/"
    + alias4(((helper = (helper = lookupProperty(helpers,"partnerId") || (depth0 != null ? lookupProperty(depth0,"partnerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partnerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":57},"end":{"line":1,"column":70}}}) : helper)))
    + "/sp/"
    + alias4(((helper = (helper = lookupProperty(helpers,"partnerId") || (depth0 != null ? lookupProperty(depth0,"partnerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partnerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":74},"end":{"line":1,"column":87}}}) : helper)))
    + "00/embedIframeJs/uiconf_id/"
    + alias4(((helper = (helper = lookupProperty(helpers,"uiConfId") || (depth0 != null ? lookupProperty(depth0,"uiConfId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"uiConfId","hash":{},"data":data,"loc":{"start":{"line":1,"column":114},"end":{"line":1,"column":126}}}) : helper)))
    + "/partner_id/"
    + alias4(((helper = (helper = lookupProperty(helpers,"partnerId") || (depth0 != null ? lookupProperty(depth0,"partnerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"partnerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":138},"end":{"line":1,"column":151}}}) : helper)))
    + "?iframeembed=true&playerId="
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":1,"column":178},"end":{"line":1,"column":190}}}) : helper)))
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"entryId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":190},"end":{"line":1,"column":233}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"widgetId") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":233},"end":{"line":1,"column":273}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"flashVarsUrl")||(depth0 && lookupProperty(depth0,"flashVarsUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flashVars") : depth0),{"name":"flashVarsUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":273},"end":{"line":1,"column":301}}})) != null ? stack1 : "")
    + "\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":1,"column":310},"end":{"line":1,"column":319}}}) : helper)))
    + "\" height=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":1,"column":329},"end":{"line":1,"column":339}}}) : helper)))
    + "\" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow=\"autoplay *; fullscreen *; encrypted-media *\" frameborder=\"0\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":1,"column":465},"end":{"line":1,"column":494}}})) != null ? stack1 : "")
    + ">"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"seoMetadata") || (depth0 != null ? lookupProperty(depth0,"seoMetadata") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"seoMetadata","hash":{},"data":data,"loc":{"start":{"line":1,"column":495},"end":{"line":1,"column":512}}}) : helper))) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":1,"column":512},"end":{"line":1,"column":530}}}) : helper))) != null ? stack1 : "")
    + "</iframe>";
},"useData":true});

this["Handlebars"]["templates"]["templates/kaltura_links.hbs"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<a href=\"http://corp.kaltura.com/products/video-platform-features\">Video Platform</a>\n<a href=\"http://corp.kaltura.com/Products/Features/Video-Management\">Video Management</a> \n<a href=\"http://corp.kaltura.com/Video-Solutions\">Video Solutions</a>\n<a href=\"http://corp.kaltura.com/Products/Features/Video-Player\">Video Player</a>";
},"useData":true});

this["Handlebars"]["templates"]["templates/legacy.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<script src=\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"scriptUrl") || (depth0 != null ? lookupProperty(depth0,"scriptUrl") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"scriptUrl","hash":{},"data":data,"loc":{"start":{"line":1,"column":40},"end":{"line":1,"column":53}}}) : helper)))
    + "\"></script>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<a rel=\"media:thumbnail\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"thumbnailUrl") : stack1), depth0))
    + "\"></a>\n	<span property=\"dc:description\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\"></span>\n	<span property=\"media:title\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\"></span>\n    <span property=\"media:uploadDate\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"uploadDate") : stack1), depth0))
    + "\"></span>\n	<span property=\"media:width\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":14,"column":39},"end":{"line":14,"column":48}}}) : helper)))
    + "\"></span>\n	<span property=\"media:height\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":15,"column":40},"end":{"line":15,"column":50}}}) : helper)))
    + "\"></span>\n	<span property=\"media:type\" content=\"application/x-shockwave-flash\"></span>	\n	";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"includeHtml5Library") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":2,"column":7}}})) != null ? stack1 : "")
    + "<object id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":19},"end":{"line":2,"column":31}}}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"playerId") || (depth0 != null ? lookupProperty(depth0,"playerId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"playerId","hash":{},"data":data,"loc":{"start":{"line":2,"column":39},"end":{"line":2,"column":51}}}) : helper)))
    + "\" type=\"application/x-shockwave-flash\" allowFullScreen=\"true\" allowNetworking=\"all\" allowScriptAccess=\"always\" height=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":2,"column":170},"end":{"line":2,"column":180}}}) : helper)))
    + "\" width=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":2,"column":189},"end":{"line":2,"column":198}}}) : helper)))
    + "\" bgcolor=\"#000000\""
    + ((stack1 = (lookupProperty(helpers,"elAttributes")||(depth0 && lookupProperty(depth0,"elAttributes"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"attributes") : depth0),{"name":"elAttributes","hash":{},"data":data,"loc":{"start":{"line":2,"column":217},"end":{"line":2,"column":246}}})) != null ? stack1 : "")
    + " data=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"swfUrl") || (depth0 != null ? lookupProperty(depth0,"swfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"swfUrl","hash":{},"data":data,"loc":{"start":{"line":2,"column":253},"end":{"line":2,"column":263}}}) : helper)))
    + "\">\n	<param name=\"allowFullScreen\" value=\"true\" />\n	<param name=\"allowNetworking\" value=\"all\" />\n	<param name=\"allowScriptAccess\" value=\"always\" />\n	<param name=\"bgcolor\" value=\"#000000\" />\n	<param name=\"flashVars\" value=\""
    + ((stack1 = (lookupProperty(helpers,"flashVarsString")||(depth0 && lookupProperty(depth0,"flashVarsString"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"flashVars") : depth0),{"name":"flashVarsString","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":63}}})) != null ? stack1 : "")
    + "\" />\n	<param name=\"movie\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"swfUrl") || (depth0 != null ? lookupProperty(depth0,"swfUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"swfUrl","hash":{},"data":data,"loc":{"start":{"line":8,"column":28},"end":{"line":8,"column":38}}}) : helper)))
    + "\" />\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"includeSeoMetadata") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":1},"end":{"line":17,"column":8}}})) != null ? stack1 : "")
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"kalturaLinks") || (depth0 != null ? lookupProperty(depth0,"kalturaLinks") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kalturaLinks","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":26}}}) : helper))) != null ? stack1 : "")
    + "\n</object>";
},"useData":true});

this["Handlebars"]["templates"]["templates/seo_metadata.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<span itemprop=\"name\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"description\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"duration\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"duration") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"thumbnailUrl\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"thumbnailUrl") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"uploadDate\" content=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"entryMeta") : depth0)) != null ? lookupProperty(stack1,"uploadDate") : stack1), depth0))
    + "\"></span>\n<span itemprop=\"width\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"width") || (depth0 != null ? lookupProperty(depth0,"width") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"width","hash":{},"data":data,"loc":{"start":{"line":7,"column":32},"end":{"line":7,"column":41}}}) : helper)))
    + "\"></span>\n<span itemprop=\"height\" content=\""
    + alias2(((helper = (helper = lookupProperty(helpers,"height") || (depth0 != null ? lookupProperty(depth0,"height") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"height","hash":{},"data":data,"loc":{"start":{"line":8,"column":33},"end":{"line":8,"column":43}}}) : helper)))
    + "\"></span>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"includeSeoMetadata") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":9,"column":7}}})) != null ? stack1 : "");
},"useData":true});