define(['router'], function(appRouter) {
    //bootup directory
    initialize = function() {
        console.log('app initialized');
        Backbone.history.start({pushState: true});
        appRouter.navigate('index', {trigger: true});

        //should be triggering the event
        /*
        window.onpopstate = function(event) {
            console.log(event);
        }
        */


    }


    return {
        init:initialize,

    }


})
