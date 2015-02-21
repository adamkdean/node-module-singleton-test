module.exports = exports = {

    value: 0,

    init: function() {
        // set value to something between 1 & 10,000
        this.value = Math.floor(Math.random() * 10000) + 1;
    }

};
