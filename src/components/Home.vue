<template>
  <div>
	  <div class="container">
      <div>
        <mult-vis :max="max" :current="current" />
        <p class="mult-text">{{ current ? current.join(' * ') : "start the gamp" }}</p>
        <input ref="num-input" @input="onInput" type="text" min="0" :max="max * max" autofocus="true" :disabled="!running">
      </div>
      <prog-vis :remaining="remaining" :current="current" :max="max" :min="min" :highlight="null" />
    </div>
    <button v-if="!running" @click="startGame">Start</button>
    <p v-if="end">{{ end / 1000 }}</p>
	</div>
</template>

<script>
import ProgVis from "@/components/ProgVis";
import MultVis from "@/components/MultVis";

export default {
  components: {
    ProgVis,
    MultVis
  },
  data() {
    let max = 9,
      min = 2,
      remaining = [];

    for (let n = min; n < max + 1; n++)
      for (let m = n; m < max + 1; m++) remaining.push([n, m]);

    return {
      remaining,
      current: null,
      max,
      min,
      running: false,
      start: null,
      end: null
    };
  },
  methods: {
    getNext() {
      if (this.remaining.length === 0) {
        this.endGame();
        return;
      }
      this.current = this.remaining.splice(
        Math.floor(Math.random() * this.remaining.length),
        1
      )[0];
    },
    endGame() {
      this.end = performance.now();
      this.running = false;
    },
    startGame() {
      this.start = performance.now();
      if (!this.current) {
        this.getNext();
      }
      this.running = true;
    },
    onInput(event) {
      if (Number(event.target.value) == this.current[0] * this.current[1]) {
        event.target.value = null;
        this.getNext();
      }
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
.container {
  justify-content: center;
  display: flex;
  background-color: white;
}
.mult-text {
  font-weight: bold;
}
</style>
