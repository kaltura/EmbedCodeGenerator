(function(window, undefined) {

var Demo = {
	storageName: 'kEmbedCodeGeneratorConfig',

	escapeHTML: function( text ) {
    	return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
	},

	generateIframe: function(embedCode, container) {
		var container = document.getElementById(container);		
		var iframe = container.appendChild(document.createElement('iframe'));
		var newDoc = iframe.contentDocument;

		newDoc.open();
		newDoc.write( '<!doctype html><html><body>' + embedCode + '</body></html>' );
		newDoc.close();
	},

	setValue: function( $el, value ) {
		// Populate form fields
		switch( $el.prop('tagName') ) {
			case 'INPUT':
				switch( $el.prop('type') ) {
					case 'checkbox':
						$el.prop('checked', value);
					default:
						$el.val(value);
						break;
				}
				break;
			case 'SELECT':
				$.each($el.children(), function() {
					if( this.value == value ) {
						this.selected = true;
					}
				});
				break;
		}
	},

	addField: function( fieldName, key, value ) {
		var targetDiv = fieldName + 'Fields';
		var $row = $('<div />').addClass('row-fluid');
		var $remove = $('<div />')
						.addClass('span1 close')
						.html('X')
						.click(function(){
							$(this).parent().remove();
						});
		var $keyDiv = $('<div />').addClass('span5');
		var $valDiv = $('<div />').addClass('span5');
		var $hiddenInput = $('<input />').prop('type', 'hidden');
		var $keyInput = $('<input />')
						.prop({
							'class': 'input-medium',
							'placeholder': 'key'
						})
						.change(function() {
							$hiddenInput.prop('name', fieldName + '[' + this.value + ']');
						});
		var $valInput = $('<input />')
						.prop({
							'class': 'input-medium',
							'placeholder': 'value'
						})
						.change(function() {
							$hiddenInput.prop('value', this.value);
						});

		if( key && value !== undefined ) {
			$hiddenInput.prop({
				name: fieldName + '[' + key + ']',
				value: value
			});
			$keyInput.prop('value', key);
			$valInput.prop('value', value);
		}

		$keyDiv.append($keyInput);
		$valDiv.append($valInput);

		$row.append($hiddenInput, $remove, $keyDiv, $valDiv);
		$('#' + targetDiv).append($row);
	},

	populateFormFields: function( $form ) {
		var _this = this;
		$.each(this.getConfig(), function( key, val ) {

			if( key == 'flashVars' || key == 'attributes' ) {
				if( val && typeof val == 'object' ) {
					$.each(val, function( k, v ) {
						_this.addField( key, k, v );
					});
				}
				return true;
			}

			if( val && typeof val == 'object' ) {
				$.each(val, function( k, v ) {
					var $field = $form.find('[name="'+key+'[' + k + ']"]');
					_this.setValue( $field, v );
				});
			}
			else 
			{
				var $field = $form.find('[name=' + key + ']');
				_this.setValue( $field, val );
			}
		});
	},

	addBindings: function( $form ) {
		var _this = this;
		// Adds new field
		$('.add-field').click(function(e) {
			e.preventDefault();
			var fieldName = $(this).data('field')
			_this.addField(fieldName);
		});

		$('.reset').click(function() {
			if( localStorage && typeof localStorage.removeItem === 'function' ) {
				localStorage.removeItem(_this.storageName);
				location.reload();
			}		
		});
		$form.submit(function(e) {
			var config = $(this).serializeObject();
			// Save config to local storage
			if( localStorage && typeof localStorage.setItem === 'function' ) {
				localStorage.setItem(_this.storageName, JSON.stringify(config));
			}			
			try {
				var embedCode = _this.generator.getCode(config);
				$('code').html(_this.escapeHTML(embedCode));
				$('code').each(function(i, e) {hljs.highlightBlock(e)});
				$('#playerContainer').empty();
				_this.generateIframe(embedCode, 'playerContainer');
			} catch(err){
				alert(err);
			}
			return false;
		});		
	},

	setConfig: function( config ) {
		var defaultConfig = this.generator.config();
		this.config = this.generator.extend(config, defaultConfig);
	},

	getConfig: function() {
		// Get data from local storage
		if( localStorage && typeof localStorage.getItem === 'function' ) {
			var userConfig = localStorage.getItem( this.storageName );
			if( userConfig ) {
				this.config = JSON.parse(userConfig);
			}
		}
		return this.config;
	},

	setup: function( config ) {
		var $form = $('#config');
		var _this = this;
		this.generator = new kEmbedCodeGenerator();
		this.setConfig(config);
		this.populateFormFields($form)
		this.addBindings($form);
		// Run the demo
		$form.submit();
	}
};

window.Demo = Demo;

})(this);

// jQuery.serializeObject
(function(e){e.fn.serializeObject=function(){var t=this,n={},r={},i={validate:/^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,key:/[a-zA-Z0-9_]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_]+$/};this.build=function(e,t,n){e[t]=n;return e};this.push_counter=function(e){if(r[e]===undefined){r[e]=0}return r[e]++};e.each(e(this).serializeArray(),function(){if(!i.validate.test(this.name)){return}var r,s=this.name.match(i.key),o=this.value,u=this.name;while((r=s.pop())!==undefined){u=u.replace(new RegExp("\\["+r+"\\]$"),"");if(r.match(i.push)){o=t.build([],t.push_counter(u),o)}else if(r.match(i.fixed)){o=t.build([],r,o)}else if(r.match(i.named)){o=t.build({},r,o)}}n=e.extend(true,n,o)});return n}})(jQuery);