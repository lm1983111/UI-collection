var commonServiceApp = angular.module("commonServiceApp",[]);
commonServiceApp.factory("commonService", function(){
	return{
		status : function(status,closeFlag){
			if(closeFlag==1)
			return "已关闭";
			if(status == 1)
			return "待接单";
			else if(status == 2)
			return ""已接单;
		}
	}
})
