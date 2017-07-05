/*头部组建*/
function myHeader(){
	return {
		restrict:"AE",
		scope:{
			tittle: "@",
			send:"&onSend"
		},
		replace:true,
		template:`<header class="head pos-relative">
					<div class="back pos-absolute" ng-click="send()">
						<i class="iconfont icon-fanhui f4"></i>
						<span>返回</span>
					</div>
					<h3>{{tittle}}</h3>
				</header>`,
		link:function($rootScope,$lacation){
			$rootScope.back=function(){
				/* history.back();  */
			}
		}
	}
}
/*弹框组件*/
function myDialog(){
	return {
		restrict:"AE",
		scope:{
			tittle: "@",
			img:"@",
			content:"@",
			btnname:"@",
			info:"@",
			send:"&onSend"
		},
		replace:true,
		template:`<div class="Dialog" ng-click="send()">
					<div class="mark" >
						<dl>
							<dt>
								<img ng-src="{{img}}" alt="" />
								
							</dt>
							<dd>{{content}}</dd>
						</dl>
						<i class="iconfont icon-close f22" ng-click="send()"></i>
						<div class="du">{{info}}</div>
						<p ng-click="send()">{{btnname}}</p>
						
					</div>
				</div>`,
		controller:function($scope){
			
		},
		link:function(scope,ele,attr){
			/*console.log(scope.statego)*/
		}
	}
}
/*选框的组件*/
function myXuan(){
	return {
		restrict:"AE",
		replace:true,
		scope:{},
		template:`<i class="iconfont icon-yuanxingweixuanzhong f22"  ng-class={"icon-yuanxingxuanzhongfill":!flag,"icon-yuanxingweixuanzhong":flag} ng-click="cls()" ng-checked="checked"></i>`,
		controller:function($rootScope,$scope){
			$scope.flag=true
			$scope.cls=function(){
				$scope.flag=!$scope.flag
			}
		}
	}
}
angular
	.module("app")
	.directive("myHeader",myHeader)
	.directive("myDialog",myDialog)
	.directive("myXuan",myXuan)