define([
    'core/js/adapt',
    'core/js/views/componentView',
    'core/js/models/componentModel'
], function(Adapt, ComponentView, ComponentModel) {

    var HelloSomethingView = ComponentView.extend({
        postRender: function() {
            this.setReadyStatus();
            this.setupInviewCompletion();
        }
    });

    var HelloSomethingModel = ComponentModel.extend({
        // Implement your component model
    });

    return Adapt.register('helloSomething', {
        model: HelloSomethingModel,
        view: HelloSomethingView
    });

});
