//在js里面,函数皆以function开头,没有返回值,在python里面,函数皆以def开头,不用写什么返回值类型,只要在函数里面return就可以了,形参也不用标注类型,弱类型语言好用而且灵活

function add(a,b){

    return a+b
}
console.log(add(1,2))
//程序语言分成弱语言和强语言,弱类型语言灵活度非常高,在node里面,用js编写代码,所有的代码支持js规范,那么在js里面,虽然支持面向对象写法,但是,里面没有类的概念,如果我们不容易理解js的语法,我们就参照python的语法规则来理解它,两者语法基本一致

//弱类型语言是按照脚本一行一行的解释的,当然,后面写程序,我们会遇到一个js文件引用另外一个js文件运行的情况,
console.log("Hello World");
//
// var http=require("http")
//删去var,还是可以运行,var是任意类型,又因为js里面是弱语言,可以不用指定类型,所以在这里,可以去掉var
http=require("http")

//注意观察下面语句的结构,是不是有点复杂??????为什么这么复杂呢???
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World,我确定你麻痹\n');
}).listen(8888);






// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');