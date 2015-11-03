var requireDirectory = require('require-directory');
var queues = requireDirectory(module, '.');
console.log(queues);

var receive_arr = [];
for (var k in queues.receive) {
  var v = queues.receive[k];
  receive_arr.push(k);
}

receive_init(receive_arr);


/**
 * 接收信息，并持久化
 */
function receive_init(receive_arr) {
  var project_root = __dirname.split('node_modules')[0]
  var kue_config = require(project_root + '/config/kue');
  var kue = require('kue')
    , queue = kue.createQueue(kue_config);

  console.log(kue_config)
  // processing mq receive data
  _queue_processing(queue, receive_arr);
   
  // only for debug
  // kue.app.listen(3004);
}

function _queue_processing(queue, arr) {
  arr.forEach(function _queue_processing_one(entity) {
    _queue_receive_item(queue, entity)
  });
}

function _queue_receive_item(queue, entity) {
  console.log(entity)
  queue.process(entity + "", require('./receive/' + entity));
}

module.exports = queues;