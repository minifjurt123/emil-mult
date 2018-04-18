<template>
	<div>
		<input type="number" min="0" :max="max * max">
		<prog-vis :done="done" :max="max" :highlight="null" />
	</div>
</template>

<script>
import ProgVis from "@/components/ProgVis";

export default {
  components: {
    ProgVis
  },
  data() {
    let max = 10,
      arr = [];
    for (let n = 1; n < max + 1; n++)
      for (let m = n; m < max + 1; m++) {
        arr.push([n, m]);
      }
    return {
      done: arr,
      max
    };
  },
  props: {},
  computed: {}
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
td {
  width: 1.2em;
  height: 1.2em;
  border: 10px solid white;
  border-radius: 5px;
}
.body td:first-child,
tfoot th {
  font-weight: bold;
  color: rgb(113, 133, 138);
}
.grey {
  background-color: rgb(207, 207, 207);
}
.complete {
  background-color: rgb(207, 167, 167);
}
</style>
