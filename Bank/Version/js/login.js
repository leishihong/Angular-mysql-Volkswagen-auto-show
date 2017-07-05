var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/login",function(req,res){
	console.log(req.query)
	 connection.query("select * from logins where name=? && pwd=? ",[req.query.name,req.query.pwd],function(err,result){
        	console.log(result)
        if(err) return console.error(err);
        res.send(result)
       /* if(result.length>0){
            res.send({"code":1,"msg":"登陆成功！","result":result})
        }else{
        	 res.send({"code":0,"msg":"登陆失败！"})
        }*/
    })
})
module.exports=router;