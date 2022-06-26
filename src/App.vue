<template>
  <div id="app">
    <ProgressBar />
    <HeaderMain />
    <FormValidator />
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import FormValidator from "./components/FormValidator.vue";
import HeaderMain from "./components/HeaderMain.vue";

export default {
  name: "App",

  components: {
    ProgressBar,
    FormValidator,
    HeaderMain,
  },
};
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    display: flex;
    justify-content: center;}
</style>
