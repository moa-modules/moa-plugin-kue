var kue = require('kue')
  , kue_config   = require('../../config/kue')
  , queue = kue.createQueue(kue_config);

exports.wh_receive = function (obj) {
  console.log('wh_receive queue create: ' + obj);
  var job = queue.create('wh_receive', obj).save( function(err){
     if( !err ) console.log( job.id );
  });
}

exports.wh_receive_finished = function (obj) {
  console.log('wh_receive_finished queue create: ' + obj);
  var job = queue.create('wh_receive_finished', obj).save( function(err){
     if( !err ) console.log( job.id );
  });
}

exports.wh_send_finished = function (obj) {
  console.log('wh_send_finished  queue create: ');
  console.log(obj);
  var job = queue.create('wh_send_finished', obj).save( function(err){
     if( !err ) console.log( job.id );
  });
}