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
Handlebars.registerHelper('kalturaLinks', function( show ) {
	if( ! show ) {
		return '';
	}
	var template = Handlebars.templates['kaltura_links'];
	return template();
});

})(this, this.Handlebars);