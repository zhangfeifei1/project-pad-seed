(function () {
  console.log('public start load')
})()

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

window.isNotDSBridge = window.navigator.userAgent.toString().toLowerCase().indexOf('loongeasy') == -1;

(function () {
  var ie = !!(window.attachEvent && !window.opera)
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525)
  var fn = []
  var run = function () {
    for (var i = 0; i < fn.length; i++) fn[i]()
  }
  var d = document
  d.ready = function (f) {
    if (!ie && !wk && d.addEventListener) {
      return d.addEventListener('DOMContentLoaded', f, false)
    }
    if (fn.push(f) > 1) return
    if (ie) {
      (function () {
        try {
          d.documentElement.doScroll('left')
          run()
        } catch (err) {
          setTimeout(arguments.callee, 0)
        }
      })()
    } else if (wk) {
      var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState)) {
          clearInterval(t), run()
        }
      }, 0)
    }
  }
})()

document.ready(function () {
  console.log('DOMContentLoaded SUCCESS')
})

function addLoadEvent(func) {
  var oldonload = window.onload
  if (typeof window.onload !== 'function') {
    window.onload = func
  } else {
    window.onload = function () {
      oldonload()
      func()
    }
  }
}



//在声明之后需要调用Native的地方使用
dsBridgeReadyFun(function () {
  console.log("dsBridgeReadyFun");
  dsBridge_call("setTitle", "Hello")
});

// 截取url中指定的字符，
String.prototype.getUrlKey = function () {
  return this.replace(/(.*\/)*([^.]+).*/ig, '$2')
}

// function dsBridge_startupParams (callback) {
//   console.log(localStorage.getItem('windowParam'))
//   let startupParams = JSON.parse(localStorage.getItem('windowParam'))
//   if (startupParams && startupParams.url.getUrlKey() == document.URL.getUrlKey()) {
//     callback && callback(startupParams.data)
//   } else {
//     callback && callback({})
//   }
// }

addLoadEvent(function () {
  console.log('window.onload SUCCESS')
})

function dsBridge_call(rpcStr, paramDict, successFun, errorFun) {
  console.log(rpcStr);
  if (rpcStr == 'pushWeb') {
    localStorage.setItem('windowParam', JSON.stringify({
      url: paramDict.url,
      data: paramDict.passData
    }))
    window.location.href = paramDict.url
  } else if (rpcStr == 'popWeb') {
    window.history.go(-1)
  } else {
    dsBridgeReadyFun(function () {
      dsBridge.call(rpcStr, paramDict, successFun)
    })
  }
}
console.log('public start load success')

