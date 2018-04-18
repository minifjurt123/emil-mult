<template>
  <table>
		<tr class="body" v-for="v of max" :key="v">
			<td>{{ max - v + 1 }}</td>
			<td 
        v-for="h of max" 
        :key="h" 
        :class="{ grey: max - v + 1 < h || h < min, finished: !remaining.find(e => e[0] == h && e[1] == max - v + 1), current: current && current[0] == h && current[1] == max - v + 1 }"
        class="block">
				<!-- <span style="color:grey">{{ max - v + 1 }}{{ h }}</span> -->
			</td>
		</tr>
		<tfoot>
			<tr>
				<th></th>
				<th v-for="n in (max || 10)" :key="n">{{ n }}</th>
			</tr>
		</tfoot>
	</table>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    max: Number,
    min: Number,
    remaining: Array,
    current: Array
  },
  computed: {
    nums() {
      let max = this.max;
      return Array(max)
        .fill(0)
        .map((e, i) => max - i);
    }
  }
};
</script>

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
.body td:first-child,
tfoot th {
  font-weight: bold;
  color: rgb(113, 133, 138);
}
.block.current {
  background-color: rgb(173, 125, 189);
}
.block.grey {
  background-color: rgb(172, 172, 172);
}
.block.finished:not(.grey):not(.current) {
  background-color: rgb(218, 218, 218);
}
.block {
  background: rgb(245, 245, 245);
}
</style>
