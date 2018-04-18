<template>
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Time</th>
			</tr>
		</thead>
		<tr v-for="(score, index) in scores" :key="index">
			<td>{{ score.name }}</td>
			<td>{{ score.time }}</td>
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
}
table tr:not(:last-child) {
  border-bottom: 1px #eee solid;
  padding: 5px;
}
</style>