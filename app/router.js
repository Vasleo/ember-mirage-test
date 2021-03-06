import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('search');
  this.route('artists');
  this.route('albums');
  this.route('album', { path: '/album/:id'});
  this.route('tracks');
  this.route('album');
});

export default Router;
