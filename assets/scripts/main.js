require('../styles/main.css');

var signaJs = require('signa');

console.log('Hello Webpack');

// выоводим сигну
var $container = document.querySelector('.container');
console.log('fff', signaJs('.container'));
// $container.innerHTML = signaJs;
