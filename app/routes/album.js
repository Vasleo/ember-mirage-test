import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    id: {
      refreshModel: true
    }
  },

  model: function(params) {
    let id = params.id;
    Ember.Logger.log('ID PARAM-', id);
    let geturl = `http://itunes.apple.com/lookup?id=${id}`;
    let self = this;

    Ember.$.ajax({
      method: "get",
      url: geturl,
      dataType: "jsonp",
      contentType: "application/json; charset=utf-8"
    }).done(function(res) {
      Ember.Logger.log(' - > ', res);
      self.controller.set('searchResults', res);

      Ember.Logger.log(' - > ', res.results.findBy('artistId', 262836961));
    });
  }

});
