import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizeResponse: function(store, primaryModelClass, payload, id, requestType) {
    Ember.Logger.log('payload-', payload);
    let details = Ember.A([]);
    payload.details.forEach(function(detail) {
      let temp = {
        ArtistId: detail.artistId,
        ArtistName: detail.artistName,
        CollectionId: detail.CollectionId,
        CollectionName: detail.collectionName,
        Kind: detail.kind,
        Genra: detail.primaryGenreName,
        TrackName: detail.trackName,
        ReleaseDate: detail.releaseDate,
        IsStreaming: detail.isStreamable,
        Price: detail.collectionPrice,
        ViewUrl: detail.trackViewUrl
      };
      details.pushObject(temp);
    });
    Ember.Logger.log('details-', details);
    let data = {
          "data": {
            "type": "search-details",
            "id": payload.id,
            "attributes": {
              "details": details
            }
          }
        };

    return data;
  }

});
