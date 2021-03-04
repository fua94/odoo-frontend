odoo.define('my_theme.mixin_test', function (require) {
    "use strict";

    // /web/static/src/js/owl_compatibility.js
    // /web/static/tests/owl_compatibility_tests.js

    const { ComponentAdapter, ComponentWrapper, WidgetAdapterMixin } = require('web.OwlCompatibility');
    const { Component, tags, useState } = owl;
    const { xml } = tags;

    const publicWidget = require('web.public.widget');

    const WidgetAdapter = publicWidget.Widget.extend(WidgetAdapterMixin, {
        selector: '#mixinComponent',
        disabledInEditableMode: false,

        destroy() {
            this._super(...arguments);
            WidgetAdapterMixin.destroy.call(this, ...arguments);
        },
    });

    class MyComponent extends Component {}
    MyComponent.template = xml`<h1>inyectado!</h1>`;
    const MyWidget = WidgetAdapter.extend({
        start() {
            const component = new ComponentWrapper(this, MyComponent, {});
            return component.mount(this.el);
        }
    });

    publicWidget.registry.mixin_test = MyWidget;
});
