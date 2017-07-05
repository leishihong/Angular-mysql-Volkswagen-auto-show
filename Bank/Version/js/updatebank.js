var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/updatebank",function(req,res){
	console.log(req.query)
	connection.query("update bank set boundPrice=?,boundMoreprice=? ",[req.query.boundPrice,req.query.boundMoreprice],function(err,result){
        if(err) return console.error(err);
       	res.send({"code":0,"msg":"刷新成功！"})
    })
})
module.exports=router;