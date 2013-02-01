## Kaltura Embed Code Generator

The purpose of this script is to generate kaltura embed codes.
Kaltura has several types of embed codes that can be used to embed Kaltura players and videos on your sites.

#### How to use:
##### Step 1: Include the script in your page:

```javascript
 <script src="/{path_to_script}/KalturaEmbedCodeGenerator.min.js"></script>
```

##### Step 2: Create a new instance of the generator and get the embed code:

```html
<textarea id="code"></textarea>
<script>
var gen = new kEmbedCodeGenerator({
	partnerId: 0000,
	uiConfId: 999,
	entryId: '0_xsd34g3'
});
var embedCode = gen.getCode();
document.getElementById('code').innerHTML = embedCode;
</script>
```
##### Step 3: Done!


#### Dependencies:
This script uses ```JSON.strinify``` method which is supported nativaliy in modern browsers.
If you need to support older browsers, please add the following code.
```javascript
<!--[if lt IE 9]>
<script src="http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"></script>
<![endif]-->
```
