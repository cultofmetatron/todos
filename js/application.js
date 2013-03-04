define(['router'], function(appRouter) {
    //bootup directory
    initialize = function() {
        console.log('app initialized');

        Backbone.history.start({pushState:true});
        appRouter.navigate('index', {trigger: true});
    }


    return {
        init:initialize,

    }


})
