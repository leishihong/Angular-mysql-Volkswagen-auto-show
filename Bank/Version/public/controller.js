function myLogin($scope,$rootScope,$http,$state){
	//获取输入的账户和密码
	var reg1=/[a-zA-Z0-9_]{3,16}/
	var reg2=/^[a-zA-Z]\w{5,17}$/
	$scope.name
	$scope.pwd
	//点击登录
	$rootScope.isShow=false
	$scope.logined=function(){
		//请求数据发送给数据库匹配
		$http({
			url:"/login",
			method:"post",
			params:{name:$scope.name,pwd:$scope.pwd}
		})
		//成功的回调
		.success(function(msg){
			if(msg.length>0){
				$scope.infos="登陆成功！"
				$scope.isShow=true;
			//获取到所有的数据
				$rootScope.name=msg[0].name
				$rootScope.ind=msg[0].ind
				$rootScope.price=msg[0].price
				console.log(msg[0].price)
				$scope.bundle=function(){
					$state.go('home')
				}
			}else{
				$scope.infos="账户和用户名不匹配，登陆失败！"
				$scope.isShow=true;
					$scope.bundle=function(){
						$scope.isShow=false;
					}
			}
			
		})
	}
}
function myHome($scope,$rootScope,$http,$state,$stateParams){
	//返回页面
	$scope.Login=function(){
		$state.go("login")
	}
	
	$scope.yong=$scope.name//用户名传值
	$scope.id=$scope.ind//用户名的ID
	$scope.hui=function(){//点击会员卡跳转到卡信息页面
		$state.go("info")
	}
}

function myBang($scope,$rootScope,$http,$state,$stateParams){
	//返回到卡信息
	$scope.Ka=function(){
		$state.go("info")
	}
	var reg1=/^([1-9]{1})(\d{14}|\d{18})$/;
	var reg1= /^(\d{16}|\d{19})$/;
	var reg2=/\d{6}/;
	var reg3=/[\u4e00-\u9fa5]{2}/;
	var reg4=/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	$rootScope.isShow=false
	$scope.bang=function(){
		if($scope.cards=="" || !reg1.test($scope.cards)){
			alert("请输入正面卡号(19位数字)")
		}else{
			if($scope.cardPass=="" || !reg2.test($scope.cardPass)){
				alert("请输入卡背面密码(6位数字)")
			}else{
			
				$http({
					url:"/bound",
					method:"post",
					params:{boundCard:$scope.cards,boundPass:$scope.cardPass,boundName:$scope.boundName,boundMark:$scope.cardId}
				})
				.success(function(msg){
					if(msg.length>0){
						$scope.infos="绑定成功！"
						$scope.isShow=true;
					//找到所有的数据存储在远端
						$rootScope.boundName=msg[0].boundName
						$rootScope.boundMark=msg[0].boundMark
						$rootScope.boundCard=msg[0].boundCard
						$rootScope.boundPrice=msg[0].boundPrice
						$rootScope.boundMoreprice=msg[0].boundMoreprice
						console.log($rootScope.boundMoreprice)
					//如果绑定成功，点击确定跳转到充值页面，如果失败返回当前页面重新输入
						$scope.bundle=function(){
							$state.go("recharge")
						}
					}else{
						$scope.infos="绑定失败，卡信息或持卡人信息不正确！"
						$scope.isShow=true;
						$scope.bundle=function(){
							$scope.isShow=false;
						}
					}
					
				})
			}
		}
	}
}

function myInfo($scope,$rootScope,$stateParams,$state){
	//返回首页
	$scope.Home=function(){
		$state.go("home")
	}
	console.log($scope.price)
	$rootScope.price=$rootScope.price
	$scope.price=$stateParams.prices
	$rootScope.boundCard=$scope.boundCard
	$rootScope.boundPrice=$scope.boundPrice
	$rootScope.boundMoreprice=$scope.boundMoreprice
	$scope.recharge=function(){
		$state.go("bang")
	}
	$rootScope.isShow=false
	$rootScope.unbundle=function(){
		$scope.isShow=true;
	}
	$rootScope.bundle=function(){
		$scope.isShow=false;
	}
}

function myRecharge($scope,$rootScope,$stateParams,$state,$element){
	//返回绑卡首页
	$scope.Bang=function(){
		$state.go("bang")
	}
	$rootScope.boundCard=$scope.boundCard
	$rootScope.boundPrice=$scope.boundPrice
	$rootScope.custom=values
	$scope.cards=function(){
		if((vall.val())*1<($rootScope.boundMoreprice)*1){
			console.log(($rootScope.boundMoreprice)*1)
			console.log((vall.val())*1)
			
			$state.go("confirm",{
				custom: vall.val()
			})
			
		}else{
			alert("您最多可以充值"+$rootScope.boundMoreprice+"元")
		}
	}
	var ele=$element.find(".recharge").children()
	var vall=$element.find("input")
	var values=vall.val()
	ele.on("click","li:not(.ziding)",function(){
		var info=$(this).text().slice(0,-1)
		vall.val(info)
		vall.attr("readonly","readonly")
		$(this).addClass("bgColor").siblings().removeClass("bgColor")
	})
	ele.on("click","li.ziding",function(){
		$(this).addClass("bgColor").siblings().removeClass("bgColor")
		vall.removeAttr("readonly")
		vall.focus()
		vall.val("")
	})
}

function myConfirm($scope,$rootScope,$stateParams,$state){
	//返回充值页
	$scope.recharge=function(){
		$state.go("recharge")
	}
	$rootScope.custom=$stateParams.custom
	$rootScope.card=$scope.cards
	$scope.cards=function(){
		$state.go("cards")
	}
}

function myCards($scope,$rootScope,$http,$state,$stateParams){
//返回卡资金与银行卡页
$scope.confirm=function(){
	$state.go("confirm")
}
$scope.cards=function(){
	var reg1= /^(\d{16}|\d{19})$/;
	var reg2=/\d{6}/;
	if($scope.kahao=="" || !reg1.test($scope.kahao)){
		alert("请输入正面卡号(16-19位数字)")
	}else{
		if($scope.kami=="" || !reg2.test($scope.kami)){
			alert("请输入卡背面密码(6位数字)")
		}else{
			$http({
				url:"/kazi",
				method:"post",
				params:{kahao:$scope.kahao,kami:$scope.kami}
			})
			.success(function(msg){
				if(($scope.custom)*1<($rootScope.boundPrice)*1){
					console.log($scope.custom)
					$scope.isShow=true;
					$scope.src="./images/tan_03.png"
					$scope.number="卡资金归集成功"
					$scope.bundle=function(){
						$rootScope.price=($scope.price)*1+($scope.custom)*1
						$rootScope.Price=($rootScope.boundPrice)*1-($scope.custom)*1
						$rootScope.Moreprice=($rootScope.boundMoreprice)*1-($scope.custom)*1
						$http({
							url:"/updatebank",
							method:"post",
							params:{boundPrice:$rootScope.Price,boundMoreprice:$rootScope.Moreprice}
						})
						.success(function(msg){
							$state.go("info")
						})
						$http({
							url:"/updatelogins",
							method:"post",
							params:{prices:$rootScope.price}
						}).success(function(msg){
							$state.go("info",{
								prices:$rootScope.price
							})
							console.log(msg)
						})
					}
				}else{
					$scope.isShow=true;
					$scope.src="./images/tan_06.png"
					$scope.number="卡资金归集失败"
					$scope.yue="付款卡内余额为￥"+$rootScope.boundPrice+"，余额不足"
				}
				})
			}
		}
	}
	$rootScope.isShow=false
	$rootScope.cards=function(){
		$scope.isShow=true;
	}
	$rootScope.bundle=function(){
		$scope.isShow=false;
	}
	$rootScope.dialog=function(){
		$scope.isShow=false;
	}
}
function myReset($scope,$state){
	//返回卡信息
	$scope.Info=function(){
		$state.go("info")
	}
}
function myList1($scope,$rootScope,$state,$stateParams,$http){
	//$scope.shen=$rootScope.cardId
	/*var Idcards=$rootScope.cardIds
	console.log(Number(Idcards) )*/
	$scope.Idcard=function(){
		$http({
			url:"/Idcards",
			method:"post",
			params:{Idcards:$scope.shen}
		})
		.success(function(msg){
			if(msg.length>0){
				$state.go("reset.list2")
			}else{
				alert(222)
			}
		})
	}
}
function myList2($scope,$rootScope,$state,$element,$http){
	$scope.resetdialog=function(){
		$scope.isShows=true
	}
	$scope.close=function(){
		$scope.isShows=false
	}
	var kami=$element.find(".kami")
	var lis=$element.find(".num");
	var n=0;
	//var loginKami=""
	var loginKami=[];
	lis.on("click","li",function(){
		/*if($(this).hasClass("del")){
			console.log($(this))
			kami.find("li").eq(n).html("")
			if(n>0){
				n--
			}
		}else if($(this).hasClass("space")){
			if(n<5){
				alert("请完善您的操作")
			}else{
				//如果点击的是确定按钮就请求数据修改密码
				$http({
					url:"/Loginkami",
					method:"post",
					params:{Loginkami:loginKami}
				}).success(function(msg){
					if(msg.code==0){
						console.log(msg)
					}
					$scope.isShows=false
					$state.go("login")
					
				})
			}
		}else {
			kami.find("li").eq(n).html($(this).html());
			loginKami+=kami.find("li").eq(n).html();
			console.log(loginKami)
			if(n<5){
				n++
			}else{
				$scope.isShows=false;
				console.log(45514545)
				return false;
			}
		}*/
		if($(this).hasClass("del")){
			if(loginKami.length)loginKami.splice(loginKami.length-1,1);
			kami.find("li").eq(loginKami.length).html("");
		}else if($(this).hasClass("space")){
			if(loginKami.length<6){
				alert("请完善您的操作")
			}else{
				console.log(887878787878)
				//如果点击的是确定按钮就请求数据修改密码
				$http({
					url:"/Loginkami",
					method:"post",
					params:{Loginkami:loginKami.join("")}
				}).success(function(msg){
					if(msg.code==0){
						console.log(msg)
					}
					$scope.isShows=false
					$state.go("login")
				})
			}
		}else {
			if(loginKami.length<6){
				loginKami.push($(this).html());
				kami.find("li").eq(loginKami.length-1).html($(this).html());
			}
		}
	})
}
angular.module("app")
	.controller("myLogin",myLogin)
	.controller("myHome",myHome)
	.controller("myBang",myBang)
	.controller("myInfo",myInfo)
	.controller("myRecharge",myRecharge)
	.controller("myConfirm",myConfirm)
	.contoller("myCards",myCards)
	.controller("myReset",myReset)
	.directive("myList1",myList1)
	.controller("myList2",myList2)
