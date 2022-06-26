<template>
  <div class="header">
    <div class="header_title">
      <div v-for="header in headers" :key="header.stepPage">
        <div :class="{ active: header.stepPage === active }">
          <div class="title ">
            <span class="number">{{ header.stepPage}} </span>
            <span class="text">{{ header.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HeaderMain",
  computed: {
    ...mapState({ active: (state) => state.currentPage }),

    headers() {
      return this.$store.state.formstep;
    },
  },
};
</script>

<style scoped>
.header {
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
}

.header_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  padding: 8px 20px;
  border-radius: 12px;
  background-color: #f3f3f3;
}
.title.active {
  border: 2px solid #32683c;
}
.active {
  border: 2px solid #9fbcd7;
  border-radius: 12px;

}
.number{
    display: inline-block;
    text-align: center;
    font-size: 16px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    color: #f7f7f7;
    background-color: #969899;
    margin-right: 8px;
}
.text {
  color: #8f9294;
    font-size: 14px;
    font-weight: 500;
}
</style>