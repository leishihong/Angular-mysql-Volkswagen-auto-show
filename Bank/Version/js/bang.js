var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/bound",function(req,res){
	console.log(req.query)
	connection.query("select * from bank where boundCard=? && boundPass=? && boundName=? && boundMark=? ",[req.query.boundCard,req.query.boundPass,req.query.boundName,req.query.boundMark],function(err,result){
        console.log(result)
        if(err) return console.error(err);
       	res.send(result)
    })
})
module.exports=router;