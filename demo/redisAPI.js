var redis = require('redis');
var client = redis.createClient();

client.on("connect", function(error) {  
    console.log("链接成功....");  
});

client.on("error", function(error) {  
    console.log("链接错误....");  
});

client.set("name", "张桂梅", redis.print); 

client.get("domain", function(error, res){
    if(error){
        console.log(error);
    }else{
        console.log(res);
    }
})

// 设置多个参数时
client.hmset('cat', 'name', 'ketty', 'male', '公', 'age', '1year');
client.hgetall('cat', function(err, res){
    console.log(res);
})

// 也可以
client.hmset('frameworks', {  
    'javascript': 'AngularJS',  
    'css': 'Bootstrap',  
    'node': 'Express'  
}); 
client.hgetall('frameworks', function(err, res) {  
    //结果：{ javascript: 'AngularJS', css: 'Bootstrap', node: 'Express' }  
    console.log(res);  
});

// 自增1和自减1
client.set('key2', 10);

// 增加1
client.incr('key2')





