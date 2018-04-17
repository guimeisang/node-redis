## 用nodejs redis 实现一个用户token 登陆的模块

### 思路 

大致思路如下：   
1. 用户登陆成功之后，后端用redis把用户的token（1）和id写进内存，并且回传token（2）；
2. 前端收到token之后，把token写入到cookie中，这样以后每次请求都会带上cookie；
3. 在每一次请求接口的时候，都需要通过token校验中间件，如果没有token或者token不正确，则抛出错误，不然就会进入下一个中间件；


###  步骤（Mac）

1. 安装
```
npm install redis --save

// Install redis on your system first -
brew install redis

// then start the redis server -
redis-server

```

2. 使用
```
// 还是要多看API文档，这里面有很多api和例子
https://github.com/NodeRedis/node_redis
```

### 领悟
1. 所有的操作都是 I/O 操作，也就是拿到都是回调；所以将异步转成同步至关重要；
2. redis确实好用，但是要注意一些坑点：2.1 不要滥用；2.2 存一个时间做为字段，定时清楚一些老的数据；2.3 存一个字段做为放置你字段文档的位置；

