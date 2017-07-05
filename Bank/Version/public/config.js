angular.module("app",['ui.router'])

//配置路由
.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/loginpage")
	$urlRouterProvider.when("/resetpage","resetpage/list1page")
	$stateProvider
/*登录页*/
	.state({
		name:"login",
		url:"/loginpage",
		templateUrl:"view/login.html",
		controller:myLogin
	})
/*主页面*/
	.state({
		name:"home",
		url:"/homepage",
		templateUrl:'view/home.html',
		controller:myHome
	})
//绑定银行卡
	.state({
		name:"bang",
		url:"/bangpage",
		templateUrl:"view/bang.html",
		controller:myBang
	})
/*卡信息*/
	.state({
		name:"info",
		url:"/infopage",
		templateUrl:"view/info.html",
		params:{prices:""},
		controller:myInfo
	})
/*交易记录*/
	.state({
		name:'recharge',
		url:"/rechargepage",
		templateUrl:"view/recharge.html",
		controller:myRecharge
	})
/*充值*/
	.state({
		name:'confirm',
		url:"/confirmpage",
		params:{custom:''},
		templateUrl:"view/confirm.html",
		controller:myConfirm
	})
/*确认订单*/
	.state({
		name:'cards',
		url:"/cardspage",
		templateUrl:"view/cards.html",
		controller:myCards
	})
/*付款*/
	.state({
		name:"fukaun",
		url:"/fukuanpage",
		templateUrl:"view/fukuan.html"
	})
/*交易结果*/
	.state({
		name:"result",
		url:"/resultpage",
		templateUrl:"view/result.html"
		
	})
/*重置密码*/
	.state({
		name:"reset",
		url:"/resetpage",
		templateUrl:"view/reset.html",
		controller:myReset
	})
/*重置密码1*/
	.state({
		name:"reset.list1",
		url:"/list1page",
		templateUrl:"view/list1.html",
		controller:myList1
	})
/*重置密码2*/
	.state({
		name:"reset.list2",
		url:"/list2page",
		templateUrl:"view/list2.html",
		controller:myList2
	})
/*接触银行卡的弹框*/
	.state({
		name:"reset.dialog",
		url:"dialogpage",
		templateUrl:"view/dialog.html"
	})
//充值记录
	.state({
		name:"record",
		url:"/recordpage",
		templateUrl:"view/record.html"
	})
/*银行卡充值记录*/
	.state({
		name:"xiang",
		url:"/xiangpage",
		templateUrl:"view/xiang.html"
	})
/*点卡充值记录*/
	.state({
		name:"qing",
		url:"/qingpage",
		templateUrl:"view/qing.html"
	})
})