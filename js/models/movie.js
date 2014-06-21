App.Movie = Ember.Object.extend(App, WatchedMixin,{
	id: null,
	title: null,
	watched: false,
	rating: 0,
	titleAndRating : function(){
		return this.get('title') + ' has a rating of '+ this.get('rating');
	}.property('title','rating'),
	titleChanged: function(){
		console.log('Title Changed!');
	}.observes('title')

});
