var odoo = window.odoo;
odoo.define('bh_website.project_crm_form', function (require) {
    'use strict';
    var publicWidget = require('web.public.widget');
    publicWidget.registry.test_component = publicWidget.Widget.extend({
        selector: '#testComponent',
        disabledInEditableMode: false,
        start: function () {
            var self = this;
            var el = this.el;
            el.innerHTML = "<h1>Hola amigos!</h1>";
        }
    });
});
