This is a quick test to work out how module caching works.

Turns out, Node has built in singleton.

    adam@macbook:node-module-singleton-test $ node index.js
    index.js, no init, value: 0
    index.js, init, value: 5903
    second.js, no init, value: 5903
    second.js, init, value: 8851
