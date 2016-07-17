import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    id: {
      refreshModel: true
    }
  },

  // model: function(params) {
  //   let searchString = params.id;
  //   let geturl = `http://itunes.apple.com/lookup?id=${searchString}&entity=album`;
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
    let searchString = params.id;
    let self = this;
    let storeId = JSON.stringify({
      type: 'albums',
      searchString: searchString,
    });
    this.get('store').findRecord('albums', storeId).then( function(responseData) {
      Ember.Logger.log('RESPONSE=======>>', responseData.get('data'));
      //self.controller.set('searchResults', responseData.get('data'));
      Ember.set(self.controller, 'searchResults', responseData.get('data'));
    });
  }

});
