import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('headscarves');
  this.route('headscarf', { path: 'headscarf/:id' });
});

export default Router;
