
require('./bootstrap');

window.Vue = require('vue');
import Buefy from 'buefy';

Vue.use (Buefy);
//Vue.component('example', require('./components/Example.vue'));

var app = new Vue ({
    el: '#app',
	data: {}
})

$(document).ready(function() {
    //  Dropdowns
    $('button.dropdown').hover(function(e) {
      $(this).toggleClass('is-open');
    });
  });