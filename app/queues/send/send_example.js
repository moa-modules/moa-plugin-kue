var kue = require('kue')
  , project_root = __dirname.split('node_modules')[0]
  , kue_config = require(project_root + '/config/kue')
  , queue = kue.createQueue({});

module.exports =  function (obj) {
  console.log('wh_receive queue create: ' + obj);
  var job = queue.create('wh_receive', obj).save( function(err){
     if( !err ) console.log( job.id );
  });
}