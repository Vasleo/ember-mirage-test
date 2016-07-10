import { Model } from 'ember-cli-mirage';

export default Model.extend({
  resultCount: attr(),
  results: attr()
});
