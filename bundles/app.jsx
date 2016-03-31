import React            from 'react';
import ReactDOM         from 'react-dom';
import Backbone         from 'backbone';
import About            from '../components/about';
import Clubs            from '../components/clubs';
import NavigationBar    from '../components/navigationBar';
import Welcome          from '../components/welcome';

window.jQuery = require('jquery');
require('bootstrap');

var Router = Backbone.Router.extend({
  routes : {
    "": "index",
    "about": "about",
    "clubs": "clubs"
  },
  index: function() {
      ReactDOM.render(
          <NavigationBar active=""/>,
          document.getElementById('navigation')
      );
      ReactDOM.render(
          <Welcome />,
          document.getElementById('view')
      );
  },
  about: function() {
      ReactDOM.render(
          <NavigationBar active="about"/>,
          document.getElementById('navigation')
      );
      ReactDOM.render(
          <About />,
          document.getElementById('view')
      );
  },
  clubs: function() {
      ReactDOM.render(
          <NavigationBar active="clubs"/>,
          document.getElementById('navigation')
      );
      ReactDOM.render(
          <Clubs />,
          document.getElementById('view')
      );
  }
});

new Router();
Backbone.history.start({ pushState: true });

jQuery(document).on("click", "a[href]:not([data-bypass])", function(evt) {
    var href = { prop: jQuery(this).prop("href"), attr: jQuery(this).attr("href") };
    var root = location.protocol + "//" + location.host + "/";
    if (href.prop.slice(0, root.length) === root) {
        evt.preventDefault();
        Backbone.history.navigate(href.attr, true);
    }
});
