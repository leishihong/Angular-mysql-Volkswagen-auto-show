var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/Loginkami",function(req,res){
	console.log(req.query)
	connection.query("update logins set pwd=?",[req.query.Loginkami],function(err,result){
        if(err) return console.error(err);
       	res.send({"code":0,"msg":"修改成功！"})
    })
})
module.exports=router;