var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/kazi",function(req,res){
	console.log(req.query)
	connection.query("select * from bank where boundCard=? && boundPass=? ",[req.query.kahao,req.query.kami],function(err,result){
        console.log(result)
        if(err) return console.error(err);
        if(result.length>0){
            res.send({"code":1,"msg":"成功！","result":result})
        }else{
        	 res.send({"code":0,"msg":"失败！"})
        }
    })
})
module.exports=router;