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
| embedType ```string``` | Embed code type to generate. Can we one of: 'auto', 'dynamic', 'thumb', 'iframe', 'legacy' 	| "auto" |
| playerId ```string``` |   The player element Id to generate | "kaltura_player" |
| protocol ```string``` | Embed HTTP protocol to use | "http" | 
| host ```string``` | Host for loading html5 library & kdp swf | "www.kaltura.com" | 
| securedHost ```string``` | Secured host for loading html5 library & kdp swf | "www.kaltura.com" | 
| widgetId ```string``` | Kaltura Widget Id | _{partnerId} | 
| partnerId ```int``` | Kaltura Partner Id | null | 
| cacheSt ```int``` | Add cacheSt parameter to bust cache. Should be future timestamp | null | 
| uiConfId ```int``` | Kaltura UiConf Id | null | 
| entryId ```string``` | Kaltura Entry Id | null | 
| entryMeta ```object``` | Entry Metadata object. Example: {name: "Foo", description: "Bar", thumbnailUrl: "http://foo.bar.com/img.jpg"} | null | 
| width ```int``` | Set player width | 400 | 
| height ```int``` | Set player height | 330 |
| attributes ```object``` | Adds additonal attributes to embed code. Example: { "class": "player" } | {} (empty object) |
| flashVars ```object``` | Adds flashVars to player. Example: { "autoPlay": "true" } | {} (empty object) |
| includeKalturaLinks ```boolean``` | Include Kaltura SEO links | true | 
| includeSeoMetadata ```boolean``` | Include Entry SEO Metadata ( taken from {entryMeta} option ) | false | 
| includeHtml5Library ```boolean``` | Inclde HTML5 Library in legacy embed type | true | 

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

If you like to play with all the different options you're welcome to try out the [demo](http://kaltura.github.com/EmbedCodeGenerator/demo/)

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

## Build minified version
Just run:
```
grunt
```
	
