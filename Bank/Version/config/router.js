var login=require("../js/login.js"),
	bang=require("../js/bang.js"),
	kazi=require("../js/kazi.js"),
	Idcards=require("../js/Idcards.js"),
	Loginkami=require("../js/Loginkami.js"),
	updatebank=require("../js/updatebank.js"),
	updatelogins=require("../js/updatelogins.js");

module.exports=function (app) {
    app.post("/login",login)
    app.post("/bound",bang)
    app.post("/kazi",kazi)
    app.post("/Idcards",Idcards)
    app.post("/Loginkami",Loginkami)
    app.post("/updatebank",updatebank)
    app.post("/updatelogins",updatelogins)
}