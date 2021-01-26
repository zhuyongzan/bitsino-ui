<template>
  <button>组件按钮<slot></slot></button>
</template>

<script>
export default {
  name: 'alert',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
