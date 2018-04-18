<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
:root {
  --background: #d3d0cb;
  --accent: #587b7f;
  
  --dark: #393e41;
  --darker: #1e2019;

  --blue-light: #8ea4d2;
  --blue: #6279b8;
  --blue-dark: #49516f;
  
  --green-dark: #496f5d;
  --green: #4c9f70;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark);
}
html,
body {
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: var(--background);
}
</style>
