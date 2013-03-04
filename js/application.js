define(['router'], function(appRouter) {
    //bootup directory
    initialize = function() {
        console.log('app initialized');
        Backbone.history.start({pushState: true});
        appRouter.navigate('index', {trigger: true});

        window.onpopstate = function(event) {
            console.log("popstate event triggerred");
            console.log(event.state);
        }
    }


    return {
        init:initialize,

    }


})
