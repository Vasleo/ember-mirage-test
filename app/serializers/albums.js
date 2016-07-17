import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    let data = {
          "data": {
            "type": "albums",
            "id": payload.id,
            "attributes": {
              "resultCount": payload.resultCount,
              "results": payload.results
            }
          }
        };

    return data;
  }

});
