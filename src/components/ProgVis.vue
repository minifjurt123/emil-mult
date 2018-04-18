<template>
  <table>
		<tr class="body" v-for="v in max || 10" :key="v">
			<td>{{ nums[v - 1] }}</td>
			<td v-for="h in nums" :key="h" :class="{ grey: h < v, unfinished: done.find(e => e[0] == v && e[1] == h) }">
				<!-- {{ v * h }} -->
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
		return {
			
		}
	},
  props: {
    max: Number,
    done: Array
  },
  computed: {
    nums() {
      let max = this.max || 10;
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
.unfinished {
  background-color: rgb(236, 236, 236);
}
</style>
