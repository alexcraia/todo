App.MovieListingsView = Ember.View.extend({
	templateName: 'movie_listings',
	controllerBinding: 'App.moviesController'

});
app.ToggleWatched = Ember.View.extend({
	templateName: 'movie-watched',
	click:function(event){
		alert('I pressed movie-watched!');
	}
});