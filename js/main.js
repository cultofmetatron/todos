requirejs.config({
    paths: {
               jQuery:'/js/libs/jquery-1.9.1',
               Underscore:'/js/libs/underscore',
               Modernizr: '/js/libs/modernizr',
               Backbone: '/js/libs/backbone',
               Localstorage: '/js/libs/backbone.localStorage',
               Handlebars: '/js/libs/handlebars',
               text: '/js/libs/text',
               cs: '/js/libs/cs',
               templates:'/templates'
           },
    shim: {
                Modernizr:['jQuery'],
                Backbone: ['jQuery', 'Underscore', 'Handlebars', 'Modernizr'],
                Localstorage: ["Backbone"],
                application: ['Backbone']
           }
})

require(['application'], function(app) {
   $(document).ready(function() {
       app.init();
   });
})
