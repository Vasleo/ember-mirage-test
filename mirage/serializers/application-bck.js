import { JSONAPISerializer } from 'ember-cli-mirage';
import { Ember} from 'ember';

export default JSONAPISerializer.extend({

  serialize(object, request) {
    let json = Serializer.prototype.serialize.apply(this, arguments);

    Ember.Logger.log('OBJECT-', object);
    Ember.Logger.log('REQ-', request);
    Ember.Logger.log('JSON-', json);

    return json;
  }
});
