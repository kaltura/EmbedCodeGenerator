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
		var templateName = 'templates/' + type + '.hbs';
		return ( type && Handlebars.templates && Handlebars.templates[ templateName ] ) ? Handlebars.templates[ templateName ] : null;
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