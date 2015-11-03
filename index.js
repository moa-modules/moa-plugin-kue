function m(dir) {
  var project_root = __dirname.split('node_modules')[0]
  var _dir = project_root;
  
  if (dir) {
    _dir = dir;
  }
  console.log(_dir);
  
  return require(_dir + "/app/queues");
}

module.exports = m;