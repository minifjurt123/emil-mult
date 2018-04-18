<template>
  <table>
    <tr v-for="n in max" :key="max - n + 1">
      <td class="">{{ max - n + 1 }}</td>
      <td v-for="m in max" :class="{ marked: current && current[0] >= (max - n + 1) && current[1] >= m }" :key="`${m}`"></td>
    </tr>
    <tfoot>
      <tr>
        <td></td>
        <td v-for="n in max" :key="n">{{ n }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "MultVis",
  props: {
    max: Number,
    current: Array
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border-collapse: collapse;
}
td {
  width: 1.4em;
  height: 1.4em;
  border: 6px solid white;
  border-radius: 5px;
}
.marked {
  background: red;
}
table > tr :first-child,
tfoot td {
  color: #aaa;
  font-weight: bold;
}
</style>
