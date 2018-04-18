<template>
  <div>
    <div class="container">
      <score-board />
    </div>
    <div class="container">
      <div>
        <router-link to="/play" class="link"><button class="button">Play</button></router-link>
      </div>
    </div>
    <div class="mt col" v-if="registeredTime > 0">
			<div>
				<h2>Your result</h2>
				Your time was {{ registeredTime }} seconds
			</div>
			<input v-model="name" class="number-input" type="text" autofocus="true" placeholder="Enter a name" />
			<button class="button" @click="postResult">Post</button>
    </div>
  </div>
</template>

<script>
import ScoreBoard from "@/components/ScoreBoard";
import BInput from "@/components/Input";

export default {
  components: {
    ScoreBoard,
    BInput
  },
  props: {
		registeredTime: Number,
		max: Number,
		min: Number
  },
  methods: {
    postResult() {
      if (this.posting) return;

      this.$http
        .post("/scores", {
          time: this.registeredTime,
          max: this.max,
          min: this.min,
          name: this.name
        })
        .then(d => {
					this.registeredTime = null;
          this.posting = true;
        })
        .catch(err => {
          this.posting = false;
        });
    }
  },
  data() {
    return {
      name: "",
      posting: false
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
h2 {
	margin-top: 0;
	margin-bottom: .4rem;
}

.button {
  padding: 1rem 2rem;
  background-color: var(--blue);
  border-radius: 0.8rem;
  color: #eee;
  /* text-transform: uppercase; */
  letter-spacing: 0.2rem;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 0.3rem var(--blue-dark);
  margin-bottom: 0.8rem;
  margin-top: 1rem;
}
.button:hover {
  transform: translateY(0.3rem);
  background-color: var(--blue-dark);
  box-shadow: none;
}

.link {
  text-decoration: none;
}
.mt {
  margin-top: 1rem;
}
input {
  border: none;
  padding: 0.6rem;
  font-size: 1.2rem;
  width: 20rem;
}
.col {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #eee;
  padding: 2em;
}
</style>