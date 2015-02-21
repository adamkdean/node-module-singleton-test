var example = require('./example');

module.exports = exports = {

    test: function() {
        console.log('second.js, no init, value:', example.value);
        example.init();
        console.log('second.js, init, value:', example.value);
    }

};
