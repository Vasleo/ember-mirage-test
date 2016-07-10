import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  host: 'http://itunes.apple.com',

  namespace: 'search',

  // buildURL: function(modelName, id, snapshot, requestType, query) {
  //   Ember.Logger.log('model name-', modelName);
  //   Ember.Logger.log('id-', id);
  //   Ember.Logger.log('snapshot-', snapshot);
  //   Ember.Logger.log('request type-', requestType);
  //   Ember.Logger.log('Query-', query);
  //   let searchString = id;
  //   return `{$host}\\{$namespace}?term=${searchString}&entity=song`; //?term=${searchString}&entity=song`
  // }

  queryRecord: function(modelName, query) {

      //Ember.Logger.log('id-', id);
      //Ember.Logger.log('snapshot-', snapshot);
      Ember.Logger.log('modelName-', modelName);
      Ember.Logger.log('query-', query);

      let searchString = query.searchString;
      let geturl = `http://itunes.apple.com/search?term=${searchString}&entity=song`;

      return Ember.$.ajax({
          method: "get",
          url: geturl,
          dataType: "jsonp",
          contentType: "application/json; charset=utf-8"
        }).then(function(res) {
          Ember.Logger.log(' - > ', res);
          Ember.Logger.log('res.resultCount=', res.resultCount);
          Ember.Logger.log('res.results=', res.results);

          let searchResponse = {
                resultCount: res.resultCount,
                results: res.results
              };

          return {id: 1, response: 'resposne'};
        });

      //Ember.Logger.log('RESPONSE-', response);
      //return [response];
  }

});
