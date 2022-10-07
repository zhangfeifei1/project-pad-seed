<template>
  <div class="menu-container">
    <div v-for="(item,index) in menus" :key="index" class="menu-box" @click="getMenu(item)">
      <img src="@/assets/icon_kpgs@2x.png">
      <div class="menu-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data() {
    return {
      menus: [{ title: '移动开卡', url: '/home/form' }, { title: '移动开卡', url: '/openCard' }, { title: '移动开卡', url: '/openCard' }, { title: '移动开卡', url: '/openCard' }, { title: '移动开卡', url: '/openCard' }, { title: '移动开卡', url: '/openCard' }]
    }
  },
  computed: {
  },
  methods: {
    getMenu(item) {
      this.$router.push(item.url)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  &-container {
    padding: 30px;
    display: flex;
    align-content: center;
    flex-wrap:wrap;
    .menu-box{
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      width: 157px;
      height: 205px;
      padding: 34px 14px;
      margin: 14px 20px;
      text-align: center;
      background: #FFFFFF;
      box-shadow: 0 4px 16px 0 rgba(225,225,225,0.50);
      border-radius: 8px;
      border-radius: 8px;
      img{
        width: 100px;
        height: 80px;
      }
      .menu-title{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #293036;
        letter-spacing: 0;
        text-align: center;
        line-height: 16px;
      }
    }
  }
}
</style>
