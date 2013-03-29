widget = {
	name: 'sample',
    init: function(){
		this.$el = $('#' + this.name);
		
		$('input', this.$el).click( function(e){
			e.preventDefault();
			console.log('test');
		});
    }
}