<template>
  <div class="app-wrapper">
    <div class="app-contraner">
      <!--左侧菜单  -->
      <div v-show="menuType=='menu'" class="app-menu">
        <!-- 主菜单 -->
        <div class="menu-title"><img class="menu-icon" src="@/assets/iOS-512.png"><div class="menu-h5">{{ menuTitle }}</div></div>
        <el-menu
          :default-active="menuStatus"
          class="el-menu-vertical-demo"
          background-color="#293134"
          text-color="#fff"
          active-text-color="#ffd04b"
          active-background-color="#ffffff"
          @select="selMenu"
        >
          <el-menu-item v-for="(item,index) in menus" :key="index" :index="index+''">
            <i :class="item.icon" />
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
        <el-button-group class="otherMenu">
          <el-button class="btn-menu" round icon="el-icon-user">个人中心</el-button>
        </el-button-group>
      </div>
      <div v-show="menuType=='func'" class="app-menu menu-func">
        <!-- 功能菜单 -->
        <div class="submenu-header"><div class="menu-back" @click="goBack"><img class="icon-back" src="@/assets/icon_back@2x.png">返回</div></div>
        <div class="submenu-title">{{ title }}</div>
        <div class="submenu-box">
          <div v-for="(item,index) in subMenus" :key="index" class="submenu-item" @click="selSubMenu(index)">
            <div class="icon-box">
              <img v-if="index!==subMenuStatus" class="icon-dot" src="@/assets/bg_03@2x.png">
              <img v-if="index==subMenuStatus" class="icon-dot" src="@/assets/bg_0102@2x.png">
            </div>
            <div class="icon-item icon-menubg" :class="{'active':index==subMenuStatus}">
              <img v-if="index!==subMenuStatus" class="icon-i" src="@/assets/icon_Ydxyxuanzhong@2x.png">
              <img v-if="index==subMenuStatus" class="icon-i" src="@/assets/icon_Ydxyyiwancheng@2x.png">
              <span class="icon-txt">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧内容 -->
      <div class="app-content" :class="menuType=='null'?'fullwidth':''">
        <!-- 标题栏 -->
        <div class="app-header">{{ title }}</div>
        <!-- 界面内容 -->
        <!-- 缓存路由 -->
        <!-- <transition name="fade-transform" mode="out-in"> -->
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" class="viewclass" />
        </keep-alive>
        <!-- </transition> -->
        <!-- 不缓存路由 -->
        <!-- <transition name="fade-transform" mode="out-in"> -->
        <router-view v-if="!$route.meta.keepAlive" class="viewclass" />
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
/**
   * @description 布局模板
   */

import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
  },
  data() {
    return {
      menuTitle: '华夏银行客户经理',
      // 主菜单json数据
      menus: [
        { name: '首页', icon: 'el-icon-menu', path: '/user' },
        { name: '客户业务', icon: 'el-icon-document', path: '/user' },
        { name: '理财业务', icon: 'el-icon-setting', path: '/user' },
        { name: '基金业务', icon: 'el-icon-setting', path: '/user' },
        { name: '其他业务', icon: 'el-icon-setting', path: '/user' },
        { name: 'bridge测试', icon: 'el-icon-setting', path: '/bridgeDemo' }
      ]
      // 功能菜单json数据
      // submenus: [
      //   { name: '操作一', icon: '', path: '/user' },
      //   { name: '操作二', icon: '', path: '/user' },
      //   { name: '操作三', icon: '', path: '/user' },
      //   { name: '操作四', icon: '', path: '/user' },
      //   { name: '操作五', icon: '', path: '/user' }]
    }
  },
  computed: {
    ...mapState({
      title: state => state.app.title,
      menuType: state => state.app.menuType,
      subMenus: state => state.app.subMenus,
      menuStatus: state => state.app.menuStatus,
      subMenuStatus: state => state.app.subMenuStatus

    })
  },
  methods: {
    // 功能菜单点击事件
    selSubMenu(index) {
      // 设置功能菜单当前选中状态
      this.$store.commit('app/SET_SUBMENUSTATUS', index)
    },
    // 主菜单点击事件
    selMenu(key, value) {
      if (key === '0') {
        this.$router.push('/')
      } else if (key === '1') {
        this.$router.push('/user')
      } else if (key === '5') {
        this.$router.push('/bridgeDemo')
      }
    },
    // 点击返回按钮事件
    goBack() {
      this.$router.go(-1)
    }
  }
}

</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/settings/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .app-contraner {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
  }

  .app-menu {
    width: $sideBarWidth;
    height: 100%;
    background: #293134;
    .menu-icon{
      width: 50px;
    }
    .menu-title {
      color: #fff;
      font-size: 16px;
      text-align: center;
      padding: 40px 24px 20px;
    }
    .menu-h5{
      width: 76px;
      margin: 6px auto;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 0;
      text-align: center;
      line-height: 20px;
    }

  }
  .menu-func{
      width:212px;
      background: #fff;
      .submenu-header{
        .menu-back{
          display: flex;
          justify-content: center;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          color: #293036;
          letter-spacing: 0;
          line-height: 16px;
          width: 100px;
          height: 60px;
        }
        .icon-back{
          width: 40px;
          height: 40px;
        }
      }
      .submenu-title{
        font-family: PingFangSC-Semibold;
        font-size: 30px;
        color: #293036;
        letter-spacing: 0;
        line-height: 30px;
        text-align: center;
        margin:24px 0;
      }
      .submenu-box{
        height: calc(100% - 160px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .submenu-item{
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon-box{
        text-align: center;
      }
      .icon-item{
        display: flex;
        align-items: center;
      }
      .icon-i{
        width: 40px;
        height: 40px;
        margin: 0 14px;
      }
      .icon-txt{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        // color: #293036;
        letter-spacing: 0;
        line-height: 16px;
      }
      .icon-dot{
        width: 16px;
        height: 16px;
      }
      .icon-menubg{
        width: 164px;
        height: 63px;
        color: #293036;
        background: url('~@/assets/bg_2@2x.png') center center no-repeat;
        background-size: 100% auto;
      }
      .icon-menubg.active{
        width: 164px;
        height: 63px;
        color: #fff;
        background: url('~@/assets/bg1@2x.png') center center no-repeat;
        background-size: 100% auto;
      }
    }
  .app-header {
    height: 58px;
    line-height: 60px;
    font-size: 26px;
    text-align: center;
    background: #fff;
    box-shadow: 2px 2px 1px #e1e1e1;
  }

  .app-content {
    height: 100%;
    background: #eee;
    width: calc(100% - #{$sideBarWidth});
  }
  .fullwidth{
    width:100%
  }
  .app-breadcrumb {
    margin: 8px 14px;
  }

  .viewclass {
    height: calc(100% - 58px);
    overflow-y: scroll;
  }

  .otherMenu {
    position: absolute;
    bottom: 40px;
    width: $sideBarWidth;
    display: flex;
    justify-content: center;

    .btn-menu {
      background: transparent;
      color: #fff
    }
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #f5a623 !important;
  }
  //去掉左侧菜单使用menu后出现边框问题
  /deep/.el-menu {
    border-right: 0px
  }

</style>
