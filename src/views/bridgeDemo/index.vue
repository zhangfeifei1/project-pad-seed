<template>
  <div class="dashboard-container">
    <div class="btn" @click="openPage('00000001','index.html')">openPage call</div>
    <div class="btn" @click="setTitle()">setTitle call</div>
    <div class="btn" @click="showUserAgent()">showUserAgent</div>
    <div class="btn" @click="callRPC()">callRPC call</div>
    <div class="btn" @click="callAjax()">callAjax call</div>

    <div class="btn" @click="callSyn()">Synchronous call</div>
    <div class="btn" @click="callAsyn()">Asynchronous call</div>
    <div class="btn" @click="callSynSwift()">Syn call (swift)</div>
    <div class="btn" @click="callAsynSwift()">Async call(swift)</div>
    <div class="btn" @click="callNoArgSyn()">Sync call without argument</div>
    <div class="btn" @click="callNoArgAsyn()">Async call without argument</div>
    <div class="btn" @click="echoSyn()">echo.syn</div>
    <div class="btn" @click="echoAsyn()">echo.asyn</div>
    <div class="btn" @click="callAsyn_()">Stress test，2K times consecutive asynchronous API calls</div>
    <div class="btn" @click="callNever()">Never call because without @JavascriptInterface
      annotation<br>( This test is
      just for Android ,should be ignored in IOS )
    </div>
    <div class="btn" @click="callProgress()">call progress <span id="progress" /></div>
    <div class="btn" @click="hasNativeMethod('xx')">hasNativeMethod("xx")</div>
    <div class="btn" @click="hasNativeMethod('testSyn')">hasNativeMethod("testSyn")</div>

  </div>
</template>

<script>

export default {
  name: 'BridgeDemo',
  computed: {
  },
  methods: {
    openPage(packageid, indexPage) {
      dsBridge.call('openPage', { packageid: packageid, indexPage: indexPage })
    },
    setTitle() {
      dsBridge_call('setTitle', 'Hello')
    },
    showUserAgent() {
      alert(navigator.userAgent)
    },
    callRPC() {
      dsBridge.call('rpc', { tranName: 'login.do', tranParam: { ok: '111' }}, (ret) => {
        alert(ret)
      })
    },

    callAjax() {
      var log = console.log

      axios.post('pweb/login.do').then((res) => {
        console.log(res.data)
        console.log('111')
      })
      console.log('axios')
    },

    callSyn() {
      alert(dsBridge.call('testSyn', 'Hello'))
    },

    callAsyn() {
      dsBridge_call('testAsyn', 'hello', (v) => {
        alert(v)
      })
    },

    callSynSwift() {
      alert(dsBridge.call('swift.testSyn', 'hello'))
    },

    callAsynSwift() {
      dsBridge_call('swift.testAsyn', 'hello', (v) => {
        alert(v)
      })
    },

    callAsyn_() {
      for (var i = 0; i < 2000; i++) {
        dsBridge_call('testAsyn', 'js+' + i, (v) => {
          if (v == 'js+1999 [ asyn call]') {
            alert('All tasks completed!')
          }
        })
      }
    },

    callNoArgSyn() {
      alert(dsBridge.call('testNoArgSyn'))
    },

    callNoArgAsyn() {
      dsBridge_call('testNoArgAsyn', (v) => {
        alert(v)
      })
    },

    callNever() {
      alert(dsBridge.call('testNever', { msg: 'testSyn' }))
    },

    echoSyn() {
      // call with namespace
      var ret = dsBridge.call('echo.syn', { msg: ' I am echoSyn call', tag: 1 })
      alert(JSON.stringify(ret))
    },

    echoAsyn() {
      // call with namespace
      dsBridge_call('echo.asyn', { msg: ' I am echoAsyn call', tag: 2 }, (ret) => {
        alert(JSON.stringify(ret))
      })
    },

    callProgress() {
      dsBridge_call('callProgress', (value) => {
        if (value == 0) value = ''
        document.getElementById('progress').innerText = value
      })
    },

    hasNativeMethod(name) {
      alert(dsBridge.hasNativeMethod(name))
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    padding: 30px;
    .btn{
    background: #eee;
    padding: 10px 10px;
    border-radius: 10px;
    margin: 10px 0;
  }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }

}
</style>
