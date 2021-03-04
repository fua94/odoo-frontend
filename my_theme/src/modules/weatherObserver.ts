import {WeatherStation, TemperatureDisplay} from '../patterns/observer';

window.odoo.define('bh_website.project_crm_form', function (require: any) {
    'use strict';

    const publicWidget = require('web.public.widget');

    publicWidget.registry.test_component = publicWidget.Widget.extend({
        selector: '#testComponent',
        disabledInEditableMode: false,

        start: function() {
            const self = this;

            const el: HTMLElement = this.el;

            let weatherStation = new WeatherStation();
            new TemperatureDisplay(weatherStation, el);

            setInterval(() => {
                let number = Math.floor(Math.random() * 100);
                weatherStation.setTemperature(number);
            }, 1000);
        }
    });
});

