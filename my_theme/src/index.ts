interface Window {
    odoo: any;
}

let odoo = window.odoo;

odoo.define('bh_website.project_crm_form', function (require: any) {
    'use strict';

    const publicWidget = require('web.public.widget');

    publicWidget.registry.test_component = publicWidget.Widget.extend({
        selector: '#testComponent',
        disabledInEditableMode: false,

        start: function() {
            const self = this;

            const el: HTMLElement = this.el;

            el.innerHTML = `<h1>Hola amigos!</h1>`;
        }
    });
});