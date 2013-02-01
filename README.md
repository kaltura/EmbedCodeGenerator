# Kaltura Embed Code Generator

This Javascript library can be used to generate Kaltura Embed Codes.

It was designed to easiliy create embed codes on-the-fly for your projects.

## Quick Start

1. Include ```KalturaEmbedCodeGenerator.js``` to your page.

	```html
	<script src="/{path_to_script}/KalturaEmbedCodeGenerator.min.js"></script>
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


## Dependencies:

This library uses Handlebars to manage the embed code templates and includes handlebars.runtime.js library.
If your project already uses handlebars, you can remove that file from ```grunt.js``` file.

This library also uses ```JSON.strinify``` method which is supported nativaliy in modern browsers.
If you need to support older browsers, please add the following code.

	```html
	<!--[if lt IE 9]>
	<script src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
	<![endif]-->
	```
	
