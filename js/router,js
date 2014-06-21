App.Router = Ember.Router.extend({
	root: Ember.Route.extend({
		index: Ember.Route.extend({
			route: '/',
			connectOutlets: function(router){
				router.get('applicationController').connectOutlet
				('details', App.moviesController.content);
			}
		})
	})
});
App.DetailsController = Ember.ArrayController.extend();
App.DetailsView = Ember.View.extend({
	templateName: 'details'
});