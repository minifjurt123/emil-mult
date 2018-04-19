<template>
	<table>
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Time</th>
			</tr>
		</thead>
		<tr v-for="(score, index) in scores" :key="index">
			<td>{{ index + 1 }}</td>
			<td>{{ score.name }}</td>
			<td>{{ score.time.toFixed(3) }}</td>
		</tr>
	</table>
</template>

<script>
export default {
  data() {
    return {
      loadingScores: true,
      scores: []
    };
  },
  mounted() {
    this.fetchScoreboard();
  },
  methods: {
    fetchScoreboard() {
      this.$http
        .get("/scores")
        .then(res => {
          this.scores = res.data;
          this.loadingScores = false;
        })
        .catch(console.error);
    }
  }
};
</script>

<style scoped>
table {
  text-align: left;
}
td,
th {
  padding: 0.5em;
}
thead tr {
  border-bottom: 2px #eee solid;
  color: rgb(100, 100, 100);
}
table tr:not(:last-child) {
  border-bottom: 1px #eee solid;
  padding: 5px;
}
</style>