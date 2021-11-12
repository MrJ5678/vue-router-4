<template>
  <div id="root">
    <h2>index</h2>
    <router-link
      to="/home"
      active-class="active-item"
      replace
      >
      <button>首页</button>
    </router-link>
    <router-link to="/about" active-class="active-item" replace>关于</router-link>
    <router-link to="/user/1">用户</router-link>

    <router-view v-slot="props">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // created () {
  //   console.log(this.$router.getRoutes());
  // },
  // mounted () {
  //   console.log(this.$router.getRoutes());
  // },
}
</script>

<style scoped>
.active-item {
  color: red;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  position: absolute;
  transition: opacity 1s ease;
}
</style>
