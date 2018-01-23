this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["templates/auto.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "<div id=\"";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.elAttributes),stack1 ? stack1.call(depth0, depth0.attributes, options) : helperMissing.call(depth0, "elAttributes", depth0.attributes, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  if (stack2 = helpers.seoMetadata) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.seoMetadata; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.kalturaLinks) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.kalturaLinks; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "&entry_id=";
  if (stack1 = helpers.entryId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.entryId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "&cache_st=";
  if (stack1 = helpers.cacheSt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.cacheSt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.includeSeoMetadata, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<script src=\"";
  if (stack1 = helpers.scriptUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.scriptUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "?autoembed=true";
  stack1 = helpers['if'].call(depth0, depth0.entryId, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "&playerId=";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, depth0.cacheSt, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "&width=";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "&height=";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.flashVarsUrl),stack1 ? stack1.call(depth0, depth0.flashVars, options) : helperMissing.call(depth0, "flashVarsUrl", depth0.flashVars, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\"></script>";
  return buffer;
  });

this["Handlebars"]["templates"]["templates/dynamic.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<script src=\"";
  if (stack1 = helpers.scriptUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.scriptUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></script>\n<div id=\"";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.elAttributes),stack1 ? stack1.call(depth0, depth0.attributes, options) : helperMissing.call(depth0, "elAttributes", depth0.attributes, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  if (stack2 = helpers.seoMetadata) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.seoMetadata; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.kalturaLinks) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.kalturaLinks; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</div>\n<script>\nkWidget.";
  if (stack2 = helpers.embedMethod) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.embedMethod; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "(";
  if (stack2 = helpers.kWidgetObject) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.kWidgetObject; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ");\n</script>";
  return buffer;
  });

this["Handlebars"]["templates"]["templates/iframe.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "&entry_id=";
  if (stack1 = helpers.entryId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.entryId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  return buffer;
  }

  buffer += "<iframe id=\"";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" src=\"";
  if (stack1 = helpers.protocol) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.protocol; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "://";
  if (stack1 = helpers.host) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.host; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/p/";
  if (stack1 = helpers.partnerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.partnerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/sp/";
  if (stack1 = helpers.partnerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.partnerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "00/embedIframeJs/uiconf_id/";
  if (stack1 = helpers.uiConfId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.uiConfId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/partner_id/";
  if (stack1 = helpers.partnerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.partnerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "?iframeembed=true&playerId=";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1);
  stack1 = helpers['if'].call(depth0, depth0.entryId, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.flashVarsUrl),stack1 ? stack1.call(depth0, depth0.flashVars, options) : helperMissing.call(depth0, "flashVarsUrl", depth0.flashVars, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" width=\"";
  if (stack2 = helpers.width) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.width; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" height=\"";
  if (stack2 = helpers.height) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.height; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" allowfullscreen webkitallowfullscreen mozAllowFullScreen frameborder=\"0\"";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.elAttributes),stack1 ? stack1.call(depth0, depth0.attributes, options) : helperMissing.call(depth0, "elAttributes", depth0.attributes, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">";
  if (stack2 = helpers.seoMetadata) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.seoMetadata; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.kalturaLinks) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.kalturaLinks; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</iframe>";
  return buffer;
  });

this["Handlebars"]["templates"]["templates/kaltura_links.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<a href=\"http://corp.kaltura.com/products/video-platform-features\">Video Platform</a>\n<a href=\"http://corp.kaltura.com/Products/Features/Video-Management\">Video Management</a> \n<a href=\"http://corp.kaltura.com/Video-Solutions\">Video Solutions</a>\n<a href=\"http://corp.kaltura.com/Products/Features/Video-Player\">Video Player</a>";
  });

this["Handlebars"]["templates"]["templates/legacy.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<script src=\"";
  if (stack1 = helpers.scriptUrl) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.scriptUrl; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></script>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n	<a rel=\"media:thumbnailUrl\" href=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.thumbnailUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n<span itemprop=\"media:uploadDate\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.uploadDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></a>\n	<span property=\"dc:description\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n	<span property=\"media:title\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n	<span property=\"media:width\" content=\"";
  if (stack2 = helpers.width) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.width; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></span>\n	<span property=\"media:height\" content=\"";
  if (stack2 = helpers.height) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.height; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></span>\n	<span property=\"media:type\" content=\"application/x-shockwave-flash\"></span>	\n	";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.includeHtml5Library, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<object id=\"";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" name=\"";
  if (stack1 = helpers.playerId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.playerId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" type=\"application/x-shockwave-flash\" allowFullScreen=\"true\" allowNetworking=\"all\" allowScriptAccess=\"always\" height=\"";
  if (stack1 = helpers.height) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.height; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" width=\"";
  if (stack1 = helpers.width) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.width; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" bgcolor=\"#000000\"";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.elAttributes),stack1 ? stack1.call(depth0, depth0.attributes, options) : helperMissing.call(depth0, "elAttributes", depth0.attributes, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " data=\"";
  if (stack2 = helpers.swfUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.swfUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n	<param name=\"allowFullScreen\" value=\"true\" />\n	<param name=\"allowNetworking\" value=\"all\" />\n	<param name=\"allowScriptAccess\" value=\"always\" />\n	<param name=\"bgcolor\" value=\"#000000\" />\n	<param name=\"flashVars\" value=\"";
  options = {hash:{},data:data};
  stack2 = ((stack1 = helpers.flashVarsString),stack1 ? stack1.call(depth0, depth0.flashVars, options) : helperMissing.call(depth0, "flashVarsString", depth0.flashVars, options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" />\n	<param name=\"movie\" value=\"";
  if (stack2 = helpers.swfUrl) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.swfUrl; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" />\n	";
  stack2 = helpers['if'].call(depth0, depth0.includeSeoMetadata, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  if (stack2 = helpers.kalturaLinks) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.kalturaLinks; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</object>";
  return buffer;
  });

this["Handlebars"]["templates"]["templates/seo_metadata.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<span itemprop=\"name\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n<span itemprop=\"description\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n<span itemprop=\"duration\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.duration)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n<span itemprop=\"thumbnailUrl\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.thumbnailUrl)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n<span itemprop=\"uploadDate\" content=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.entryMeta),stack1 == null || stack1 === false ? stack1 : stack1.uploadDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></span>\n<span itemprop=\"width\" content=\"";
  if (stack2 = helpers.width) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.width; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></span>\n<span itemprop=\"height\" content=\"";
  if (stack2 = helpers.height) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.height; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"></span>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.includeSeoMetadata, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });