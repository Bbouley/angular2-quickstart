(function(app) {

    app.AppComponent2 =
        ng.core.Component({
            selector : 'second-component',
            template : '<h2>This is the second component</h2>'
        })
        .Class ({
            constructor : function() {}
        });

})(window.app || (window.app = {}))
