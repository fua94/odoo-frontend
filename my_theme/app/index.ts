interface IOdoo {
    define(module: string, callback: any): void;
}

declare global {
    interface Window {
        odoo: IOdoo;
        owl: any;
    }
}

import './modules/weatherObserver';