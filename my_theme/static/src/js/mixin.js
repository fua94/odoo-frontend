odoo.define('my_theme.mixin_test', function (require) {
    "use strict";

    // /web/static/src/js/owl_compatibility.js
    // /web/static/tests/owl_compatibility_tests.js

    const { ComponentWrapper, WidgetAdapterMixin } = require('web.OwlCompatibility');
    const { Component, tags } = owl;
    const { xml } = tags;

    const publicWidget = require('web.public.widget');

    class MyComponent extends Component {}
    MyComponent.template = xml`<div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>`;

    publicWidget.registry.mixin_test = publicWidget.Widget.extend(WidgetAdapterMixin, {
        selector: '#mixinComponent',
        disabledInEditableMode: false,

        start() {
            const component = new ComponentWrapper(this, MyComponent, {});
            return component.mount(this.el);
        }
    });
});
