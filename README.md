
## Kaltura Embed Code Generator

The purpose of this script is to generate kaltura embed codes.
Kaltura has several types of embed codes that can be used to embed Kaltura players and videos on your sites.

#### How to use:
 1. Include the script in your page:

```
 <script src="/{path_to_script}/KalturaEmbedCodeGenerator.min.js"></script>
```

2. Create a new instance of the generator and get the embed code:

```
<textarea id="code"></textarea>
<script>
var gen = new EmbedCodeGenerator({
	host: 'www.kaltura.com',
	partnerId: 0000,
	uiConf: {
		id: 9999,
		width: 400,
		height: 300
	},
	entryId: '0_xsd34g3'
});
var embedCode = gen.getCode();
document.getElementById('code').innerHTML = embedCode;
</script>
```
3. Done!