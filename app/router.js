import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("internet-exchange", { path: "/internet-exchange/:slug" })
  this.route("building", { path: "/building/:slug" })
  this.route("metro-area", { path: "/metro-area/:slug" })
  this.route("country", { path: "/country/:slug" })
});

export default Router;
