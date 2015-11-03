/**
 * 从货栈接收信息，并持久化
 */ 
module.exports = function(){
   var kue_config   = require('../../config/kue');
   var kue = require('kue')
    , queue = kue.createQueue(kue_config);
    
   console.log(kue_config)
   // processing mq receive data
   _queue_processing(queue, [
       'wms_send'
     , 'wms_send_cancelled'
     , 'wms_receive'
     , 'wms_user'
     , 'wms_contact'
     , 'wms_product'
   ]);
   
   // only for debug
   // kue.app.listen(3004);
}

function _queue_processing (queue, arr) {
  arr.forEach(function _queue_processing_one(entity){
    _queue_receive_item (queue, entity)
  });
}

function _queue_receive_item (queue, entity) {
  console.log(entity)
  queue.process(entity+"", require('./pull/' + entity ));
}