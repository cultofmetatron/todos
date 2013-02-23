requirejs.config({
    paths: {
               jQuery:'/js/libs/jquery-1.9.1',
               Underscore:'/js/libs/underscore',
               Modernizr: '/js/libs/modernizr',
               Backbone: '/js/libs/backbone',
               Handlebars: '/js/libs/handlebars',
               text: '/js/libs/text',
               cs: '/js/libs/cs',
               templates:'/templates'
           },
    shim: {
                Modernizr:['jQuery'],
                Backbone: ['jQuery', 'Underscore', 'Handlebars'],
                Application: ['Backbone']

           }
})

require(['Application'], function(app) {
   $(document).ready(function() {
       app.init();
   });
})
