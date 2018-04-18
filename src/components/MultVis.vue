<template>
  <table>
    <tr v-for="n in max" :key="n">
      <td class="left-header">n</td>
      <td v-for="m in max" :key="`${n}:${m}`"></td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    max: Number
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-header {
  text-align: right;
}
</style>
