# Kaltura Embed Code Generator

This Javascript library can be used to generate Kaltura Embed Codes.

It was designed to easiliy create embed codes on-the-fly for your projects.

## Quick Start

1. Include ```KalturaEmbedCodeGenerator.js``` to your page.

	```html
	<script src="/{path_to_script}/KalturaEmbedCodeGenerator.js"></script>
	```

2. Create a new instance of the generator, pass in configuration object and call ```getCode``` method.

	```html
	<textarea id="code"></textarea>
	<script>
	var gen = new kEmbedCodeGenerator({
		partnerId: 0000,
		uiConfId: 999,
		entryId: '0_xsd34g3'
	});
	document.getElementById('code').innerHTML = gen.getCode();
	</script>
	```

## Configuration

| Option     	| Description			| Default	|
| -------------	| ------------------------ 	| ------------- |
| embedType | Embed code type to generate. Can we one of: 'auto', 'dynamic', 'thumb', 'legacy' 	| "auto" |
| playerId |   The player element Id to generate | "kaltura_player" |
| protocol | Embed HTTP protocol to use | "http" | 
| host | Host for loading html5 library & kdp swf | "www.kaltura.com" | 
| securedHost | Secured host for loading html5 library & kdp swf | "www.kaltura.com" | 
| widgetId | Kaltura Widget Id | _{partnerId} | 
| partnerId | Kaltura Partner Id | null | 
| cacheSt | Add cacheSt parameter to bust cache. Should be future timestamp | null | 
| uiConfId | Kaltura UiConf Id | null | 
| entryId | Kaltura Entry Id | null | 
| entryMeta | Entry Metadata object | {name: null, description: null, thumbnailUrl: null} | 
| width | Set player width | 400 | 
| height | Set player height | 330 |
| attributes | Adds additonal attributes to embed code. Example: { "class": "player" } | {} (empty object) |
| flashVars | Adds flashVars to player. Example: { "autoPlay": "true" } | {} (empty object) |
| includeKalturaLinks | Include Kaltura SEO links | true | 
| includeSeoMetadata | Include Entry SEO Metadata ( taken from {entryMeta} option ) | false | 

You can set the configuration options when creating a new instance to set the defaults 
and you can also set the configuration when calling ```getCode``` method.

Any option that sets on ```getCode``` will override options that were set when creating the instance.

```javascript
var gen = new kEmbedCodeGenerator({
	'host': 'cdnapi.kaltura.com',
	'partnerId': 0000,
	'width': 680,
	'height': 420
});
console.log(gen.getCode({
	'uiConfId': 0000000,
	'entryId': 'x_0000000',	
	'height': 300 // Will generate embed with "height" of 300px 
}));
```

## Dependencies

This library uses [Handlebars](http://handlebarsjs.com/) to manage the embed code templates and includes ```handlebars.runtime.js``` library.
If your project already uses handlebars, you can remove that file from ```grunt.js``` file.

This library also uses ```JSON.strinify``` method which is supported nativaliy in modern browsers.
If you need to support older browsers, please add the following code.

```html
<!--[if lt IE 9]>
<script src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
<![endif]-->
```
	
