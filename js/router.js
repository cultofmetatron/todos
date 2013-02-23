define(['views/index'], function(IndexView) {

    //declare the router
    var router = Backbone.Router.extend({
        currentView: null,
        routes: {
                    'index':'index'

                },
        changeView: function(newView) {
            if(this.currentView != null) {
                this.currentView.undelegateEvents();
            }
            this.currentView = newView;
            this.currentView.render();
        },
        index: function() {
            indexView = new IndexView();
            this.changeView(indexView);

        },






    })

    return new router();

})
