//写在所有js之前，做Native方法的同步调用声明，最终调用是在异步js加载完成执行
function dsBridgeReadyFun(readyCallback) {
    function ready(callback) {
        // 如果 jsbridge 已经注入则直接调用
        if (window.dsBridge) {
            callback && callback()
        } else {
            document.addEventListener('dsBridgeReady', callback, false)
        }
    }
    ready(readyCallback)
}



var engine = EngineWrapper(function (request, responseCallback) {
//    dsBridgeReadyFun(function () {
        dsBridge.call("rpc", { tranName: request.url, tranParam: request.body, tranMethod: request.method }, function (ret) {
            console.log();
            var obj = JSON.parse(ret);
            responseCallback({
                statusCode: obj.status,
                responseText: obj.responseText,
                statusMessage: obj.statusMessage
            })
        })

//    });

})
XMLHttpRequest = engine;

console.log('XMLHttpRequest SUCCESS')


/*
//保存XMLHttpRequest
var realXMLHttpRequest=XMLHttpRequest;
var engine= EngineWrapper(function (request,responseCallback) {
  //输出请求链接和请求方法
  console.log(request.url,request.method)

  //发起真正的请求
  var xhr=new realXMLHttpRequest()
  xhr.open(request.method,request.url);
  xhr.send(request.body);
  var callback=function () {
    responseCallback({
      statusCode:xhr.status,
      responseText:xhr.responseText,
      statusMessage:xhr.statusText
    })
  }
  xhr.onload=callback;
  xhr.onerror=callback;
})
XMLHttpRequest=engine;
*/
