interface Subject{
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
}

interface Observer{
    update(temperature: number): void;
}

// ------------------------------------------------------
export class WeatherStation implements Subject {
    private observers: Observer[] = [];
    private temperature: number = 0;

    registerObserver(o: Observer) {
        this.observers.push(o);
    }

    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }

    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.temperature);
        }
    }

    setTemperature(temperature: number) {
        this.temperature = temperature;
        this.notifyObservers();
    }
}

// ------------------------------------------------------
export class TemperatureDisplay implements Observer {
    private subject: Subject;
    private state: any;

    constructor(weatherStation: Subject, state: any) {
        this.subject = weatherStation;
        this.state = state;
        weatherStation.registerObserver(this);
    }

    update(temperature: number) {
        this.state.temperature = temperature;
    }
}