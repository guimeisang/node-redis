module.exports = function(){
    return function(req, res, next){
        var token = req.query.token;
        if(token){
            co(function* (){
                var userId = yield redisCo.get(token);
                if(userId){
                    next();
                }else{
                    next(new Error('token 不正确'));
                }
            })
        }else {
            next(new Error('没有token'));
        }
    }
}