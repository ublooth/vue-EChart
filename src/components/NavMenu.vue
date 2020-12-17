<template>
  <div class="NavMenu">
    <el-menu
      :default-active="index || '/'"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b">
      <el-menu-item v-for="item in data" :key="item.index" :index="item.index">
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  computed: {
    index() {
      return this.$route.path.replace('/', '');
    }
  },
  data() {
    return {
      data: [
        {
          icon: 'el-icon-location',
          index: '/',
          title: '自定义图标1'
        },
        {
          icon: 'el-icon-menu',
          index: 'about',
          title: '自定义图标2'
        },
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(key)
    },
    getRouter() {
      let rou = this.$route;
      if(rou.path === '/') return
      this.index = rou.path;
      if(this.index.split('/').length > 1) {
        this.index = this.index.split('/')[1]
      }
    }
  },
  mounted () {
    setTimeout(() => {
      // this.getRouter();
    }, 100);
  },
}
</script>

<style lang="scss">
.NavMenu {
  height: 100%;
  ul {
    height: 100%;
  }
}
</style>