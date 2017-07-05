var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    body=require('body-parser'),
    mysql=require("mysql");

//加载静态资源
    app.use(express.static('./Version'))

//配置模板引擎
    app.set('views',__dirname+'/Version/view');
    app.set('view engine','html');
    app.engine('html',ejs.__express);

//配置解析普通表单post请求体
    app.use(body.urlencoded({extended:true}));

//加载路由系统
    require('./Version/config/router.js')(app)

    app.listen(8872,function(){
        console.log('listen 8872...')
    })