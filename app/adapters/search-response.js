import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'http://itunes.apple.com',
  namespace: 'search',

  queryRecord: function(store, type, query) {
      Ember.Logger.log('query-', query);

      let searchString = query.searchString;
      let geturl = `http://itunes.apple.com/search?term=${searchString}&entity=song`;

      return Ember.$.ajax({
          method: "get",
          url: geturl,
          dataType: "jsonp",
          contentType: "application/json; charset=utf-8"
        }).then(function(res) {
          // Ember.Logger.log(' - > ', res);
          // Ember.Logger.log('res.resultCount=', res.resultCount);
          // Ember.Logger.log('res.results=', res.results);

          let searchResponse = {
                id: `search/${searchString}`,
                resultCount: res.resultCount,
                results: res.results
              };

          return searchResponse;
        });

      //Ember.Logger.log('RESPONSE-', response);
      //return [response];
  }

});
