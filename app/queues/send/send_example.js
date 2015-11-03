var kue = require('kue')
  , kue_config   = require('../../../config/kue')
  , queue = kue.createQueue(kue_config);

module.exports =  function (obj) {
  console.log('wh_receive queue create: ' + obj);
  var job = queue.create('wh_receive', obj).save( function(err){
     if( !err ) console.log( job.id );
  });
}