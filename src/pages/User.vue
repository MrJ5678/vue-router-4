<template>
  <div>user</div>
</template>

<script>
import { useRoute } from "vue-router"

export default {
  // created() {
  //   console.log(this.$route)
  // },
  setup() {
    const route = useRoute()
    console.log(route.params);
  }
}
</script>

<style scoped></style>
