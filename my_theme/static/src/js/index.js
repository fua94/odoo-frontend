(function () {
    'use strict';

    // ------------------------------------------------------
    class WeatherStation {
        constructor() {
            this.observers = [];
            this.temperature = 0;
        }
        registerObserver(o) {
            this.observers.push(o);
        }
        removeObserver(o) {
            let index = this.observers.indexOf(o);
            this.observers.splice(index, 1);
        }
        notifyObservers() {
            for (let observer of this.observers) {
                observer.update(this.temperature);
            }
        }
        setTemperature(temperature) {
            this.temperature = temperature;
            this.notifyObservers();
        }
    }
    // ------------------------------------------------------
    class TemperatureDisplay {
        constructor(weatherStation, el) {
            this.subject = weatherStation;
            this.el = el;
            weatherStation.registerObserver(this);
        }
        update(temperature) {
            this.el.innerHTML = `<h1>${temperature.toString()}</h1>`;
        }
    }

    window.odoo.define('bh_website.project_crm_form', function (require) {
        const publicWidget = require('web.public.widget');
        publicWidget.registry.test_component = publicWidget.Widget.extend({
            selector: '#testComponent',
            disabledInEditableMode: false,
            start: function () {
                const el = this.el;
                let weatherStation = new WeatherStation();
                new TemperatureDisplay(weatherStation, el);
                setInterval(() => {
                    let number = Math.floor(Math.random() * 100);
                    weatherStation.setTemperature(number);
                }, 1000);
            }
        });
    });

}());
