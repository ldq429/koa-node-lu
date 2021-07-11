var wifi = async (ctx, next) => {
	// ctx.request.body 获取参数
	console.log(ctx.request.body);
	// code
	// 10001 ：参数错误
	// 10002 ： 没有企业管理员权限
	// 10003 ： 调用豆芽开放接口错误
	// 10000 ： 系统异常
	// 400 : 请求体（body）为空
	// 0 ： 成功


	let data = {
		code: 0
	};
	ctx.response.body = JSON.stringify(data);
};

var gps = async (ctx, next) => {
	// ctx.request.body 获取参数
	console.log(ctx.request.body);
	let data = {
		code: 0
	};
	ctx.response.body = JSON.stringify(data);
};

module.exports = {
	"POST /lbfa-web/locRpt/reportWifi.htm": wifi,
	"POST /lbfa-web/locRpt/reportGps.htm": gps
};