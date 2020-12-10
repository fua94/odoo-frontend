const minValue = document.querySelector('[name=min_value]');

const vm = new Vue({
    el: '#app',
    data: {
        minValue: Number(minValue.value)
    },
    created: function () {
        // `this` points to the vm instance
        console.log('minValue is: ' + this.minValue)
    },
    methods: {
        sumValue: function () {
            this.minValue = this.minValue + 1;
        }
    }
});