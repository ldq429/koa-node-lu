const Koa = require("koa");
const httpProxy = require("http-proxy-middleware");
const bodyparser = require("koa-bodyparser");
const KoaStatic = require("koa-static");// 处理静态文件
const config = require("./getConfig");
const controller = require("./controller");


const app = new Koa();
/**
 * 使用http代理请求转发，用于代理页面当中的http请求
 * 这个代理请求得写在bodyparse的前面，
 */
// app.use(async (ctx, next) => {
// 	if (ctx.url.startsWith("/lbfa-web")) { //匹配有lbfa-web字段的请求url
// 		ctx.respond = false; // 绕过koa内置对象response ，写入原始res对象，而不是koa处理过的response
// 		await k2c(httpProxy({
// 				target: "http://192.168.50.60:3000",
// 				changeOrigin: true,
// 				secure: false,
// 				pathRewrite: {
// 					"^/lbfa-web": ""
// 				}
// 			}
// 		))(ctx, next);
// 	}
// 	await next();
// });
app.use(bodyparser()); // 处理 post请求
app.use(KoaStatic("./web"));  // 处理静态文件
app.use(controller());
app.listen(config.port);
console.log(`${config.port} 启动了...`);