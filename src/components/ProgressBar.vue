<template>
  <div class="progress-bar">
    <div class="progress">
      <div v-if="currentPage === 1" class="progress-content" style="width: 34%"></div>
      <div v-if="currentPage === 2" class="progress-content" style="width: 67%"></div>
      <div v-if="currentPage === 3" class="progress-content" style="width: 100%"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "progress-bar",
  computed: {
    ...mapState({ currentPage: (state) => state.currentPage })
    
  },
};
</script>

<style>
.progress {
  width: 100%;
  height: 18px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
}
.progress-content {
  height: 100%;
  background-color: #437fe8;
  border-radius: 12px;
  transition: width 0.5s ease;
  text-align: center;
}
</style>