var express=require("express");
var router=express.Router();
var connection=require("../config/configsql.js");
router.post("/Idcards",function(req,res){
	console.log(req.query)
	connection.query("select * from logins where cardId=?",[req.query.Idcards],function(err,result){
        console.log(result)
        if(err) return console.error(err);
        
       res.send(result)
    })
})
module.exports=router;