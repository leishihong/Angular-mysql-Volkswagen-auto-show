var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/updatelogins",function(req,res){
	console.log(req.query)
	connection.query("update logins set price=?",[req.query.prices],function(err,result){
        if(err) return console.error(err);
       	res.send({"code":0,"msg":"刷新成功！"})
    })
})
module.exports=router;