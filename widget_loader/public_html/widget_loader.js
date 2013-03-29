var widget_loader_url = 'http://widget_loader.yoshimoshi.com';
$.get( widget_loader_url + '/widgets/widgets.html', function(widgets){
	var widgets = eval(widgets);
	console.log(widgets);
	$(widgets).each( function(k,v){
		$.get(v, function(res){
			text = res;
			var widget = eval(text);

			var css = $('<link href="'+ widget_loader_url + '/widgets/' + widget.name + '/' + widget.name + '.css" rel="stylesheet" type="text/css">').appendTo('head');
			
			$.get( widget_loader_url + '/widgets/' + widget.name + '/' + widget.name + '.html', function(res){
				var html = $(res);
				var widget_area = $('<div id="' + widget.name +'" class="cleanslate"></div>').append(html).appendTo('body');
				widget.init();
			});
		 });
	});
});


