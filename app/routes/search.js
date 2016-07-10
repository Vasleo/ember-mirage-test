import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    searchString: {
      refreshModel: true
    }
  },

  // model: function(params) {
  //   let searchString = params.searchString;
  //   let geturl = `http://itunes.apple.com/search?term=${searchString}&entity=song`;
  //   let self = this;
  //
  //   Ember.$.ajax({
  //     method: "get",
  //     url: geturl,
  //     dataType: "jsonp",
  //     contentType: "application/json; charset=utf-8"
  //   }).done(function(res) {
  //     Ember.Logger.log(' - > ', res);
  //     self.controller.set('searchResults', res);
  //
  //     Ember.Logger.log(' - > ', res.results.findBy('artistId', 262836961));
  //   });
  // }

  model: function(params) {
    let searchString = params.searchString;
    let self = this;
    this.get('store').queryRecord('search-response', {searchString: searchString}).then( function(responseData) {
      Ember.Logger.log('RESPONSE=======>>', responseData);
      self.controller.set('searchResults', responseData);
    });
  }

});
