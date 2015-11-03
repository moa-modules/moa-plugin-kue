function m(dir) {
  var project_root = __dirname.split('node_modules')[0]
  var _dir = project_root;
  
  if (dir) {
    _dir = dir + "/app/queues";
  }
  
  return require(_dir);
}

module.exports = m;