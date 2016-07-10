import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalize: function(modelClass, resourceHash, prop) {
    Ember.Logger.log('&&&&&&&&&&');
    // Ember.Logger.log('modelClass-', modelClass);
    // Ember.Logger.log('resourceHash-', resourceHash);
    // Ember.Logger.log('prop-', prop);
  }

});
