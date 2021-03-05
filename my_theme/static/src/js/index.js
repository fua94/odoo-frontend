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
        constructor(weatherStation, state) {
            this.subject = weatherStation;
            this.state = state;
            weatherStation.registerObserver(this);
        }
        update(temperature) {
            this.state.temperature = temperature;
        }
    }

    window.odoo.define('my_theme.wrapper_component', function (require) {
        const { ComponentWrapper, WidgetAdapterMixin } = require('web.OwlCompatibility');
        const { Component, tags, useState } = window.owl;
        const { xml } = tags;
        const publicWidget = require('web.public.widget');
        class MyComponent extends Component {
            constructor() {
                super(...arguments);
                this.state = useState({ temperature: 0 });
                let weatherStation = new WeatherStation();
                new TemperatureDisplay(weatherStation, this.state);
                setInterval(() => {
                    let number = Math.floor(Math.random() * 100);
                    weatherStation.setTemperature(number);
                }, 1000);
            }
        }
        MyComponent.template = xml `<div class="jumbotron">
        <h1 class="display-4">Temperatura: <t t-esc="state.temperature"/></h1>
        
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>`;
        publicWidget.registry.wrapper_component = publicWidget.Widget.extend(WidgetAdapterMixin, {
            selector: '#wrapperComponent',
            disabledInEditableMode: false,
            start: function () {
                const component = new ComponentWrapper(this, MyComponent, {});
                return component.mount(this.el);
            }
        });
    });

}());
