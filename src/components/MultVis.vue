<template>
  <table>
    <tr v-for="n in max" :key="max - n + 1">
      <td class="">{{ max - n + 1 }}</td>
      <td v-for="m in max" :key="`${m}`">
        <div class="block" :class="{ marked: current && current[0] >= (max - n + 1) && current[1] >= m }"></div>
      </td>
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
.block {
  width: 1.4em;
  height: 1.4em;
  margin: 0.2em;
  border-radius: 0.1em;
  transition: background-color 100ms linear;
}
.block.marked {
  background-color: var(--accent);
}
table > tr :first-child,
tfoot td {
  color: rgb(113, 133, 138);
  font-weight: bold;
}
</style>
