<template>
  <div @click="$refs.numinput.focus()">
	  <div class="container">
      <div>
        <mult-vis :max="max" :current="current" />
        <p class="mult-text">{{ current ? current.join(' * ') : "start the gamp" }}</p>
        <input class="number-input" ref="numinput" @keydown="onInputStart" @input="onInput" type="text" min="0" :maxlength="String(max * max).length" :max="max * max" autofocus="true" :placeholder="current ? current.join(' * ') : `Press the 'any' key to start`" />
      </div>
      <div class="gutter"></div>
      <prog-vis :remaining="remaining" :current="current" :max="max" :min="min" :highlight="null" />
    </div>
    <button v-if="debug" @click="remaining.length = 0">Cleanse!</button>
	</div>
</template>

<script>
import ProgVis from "@/components/ProgVis";
import MultVis from "@/components/MultVis";
import BInput from "@/components/Input";

export default {
  components: {
    ProgVis,
    MultVis,
    BInput
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
  props: {
    debug: Boolean
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

      this.$router.push({
        name: "Home",
        params: {
          registeredTime: (this.end - this.start) / 1000,
          max: this.max,
          min: this.min
        }
      });
    },
    startGame() {
      this.start = performance.now();
      if (!this.current) {
        this.getNext();
      }
      this.running = true;
    },
    onInput(event) {
      if (!this.running) {
        return;
      }
      event.target.value = event.target.value.replace(/\D/, "");
      if (Number(event.target.value) == this.current[0] * this.current[1]) {
        event.target.value = null;
        this.getNext();
      }
    },
    onInputStart(event) {
      if (this.running) return;
      event.preventDefault();
      event.target.value = "";
      this.startGame();
    },
    onMounted(e) {
      if (!this.running) {
        this.$refs.numinput.focus();
        this.startGame();
        e.preventDefault();
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", this.onMounted);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.onMounted);
  }
};
</script>

<style scoped>
.container {
  justify-content: center;
  display: flex;
}
.mult-text {
  font-weight: bold;
}
.gutter {
  width: 2.5rem;
}
input {
  border: none;
  padding: 0.6rem;
  font-size: 1.2rem;
  width: 100%;
}
</style>
