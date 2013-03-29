Two sites

1. widget_sites: loads widget_loader.js; Sample site, http://widget_site.yoshimoshi.com
2. widget_loader: serves w idget_loader.js and /widgets; Sample site, http://widget_loader.yoshimoshi.com

Widget Structure

Directory: /widget/:name
Files, 
1. $name.js
2. $name.css
3. $name.html

These will automatically be loaded from the widgetloader

$name.js required structure,

#widget

	widget = {
	    name: 'sample',
	    init: function(){ //init will be called by widget_loader
		//handle your events here
	    	  this.$el = $('#' + this.name);
		  $('input', this.$el).click( function(e){
		  	e.preventDefault();
			console.log('test');
		  });
	    }
	}

#$name.css naming convention

	//need to use !important
	//#id = widget.name property defined in js
	#sample.cleanslate{
	    position: fixed!important;
	    top: 0!important;
	    right: 0!important;
	    background-color: grey!important;
	}
