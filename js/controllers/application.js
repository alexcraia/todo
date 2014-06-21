App.ApplicationController = Ember.Controller.extend();
App.moviesController = Ember.ArrayController.extend({
	content: [],
	init: function(){

		var list = [
			App.Movie.create({
				title: 'Movie 1',
				rating: 5
			}),
			App.Movie.create({
				title:'Movie2',
				rating: 5
			})
		];
		this.set('content', list);
		return this._super();
	}
});

App.selectedMovieController = 
	Ember.ObjectController.create({
		selectedMovie: [],

		select: function(item){
			this.set('selectedMovie', item);
		},
		toggleWatched: function(){
			this.selectedMovie.toggleProperty('watched');
		}
	});
