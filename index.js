var example = require('./example'),
    second = require('./second');

console.log('index.js, no init, value:', example.value);
example.init();
console.log('index.js, init, value:', example.value);

second.test();
