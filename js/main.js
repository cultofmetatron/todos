requirejs.config({
    paths: {
               jquery:'/js/libs/jquery-1.9.1',
               underscore:'/js/libs/underscore',
               modernizr: '/js/libs/modernizr',
               backbone: '/js/libs/backbone',
               localstorage: '/js/libs/backbone.localStorage',
               handlebars: '/js/libs/handlebars',
               text: '/js/libs/text',
               cs: '/js/libs/cs',
               templates:'/templates'
           },

    shim: {
                modernizr:['jquery'],
                backbone: ['jquery', 'underscore', 'handlebars', 'modernizr'],
                //Localstorage: ["Backbone"],
                application: [ 'backbone'],
           }

})

require(['application'], function(app) {
   $(document).ready(function() {
       app.init();

   });
})
