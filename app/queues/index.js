var requireDirectory = require('require-directory');
var queues = requireDirectory(module, '.');
console.log(queues);