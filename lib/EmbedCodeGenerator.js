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