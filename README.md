# moa-plugin-kue

## Usages

```
moan your_project_name
npm install --save moa-plugin-kue
npm start
```

操作

- 创建app/queues目录
- 创建config/kue.exampe.js

获取$queues对象

```
var $queues = require('moa-plugin-kue')();
```