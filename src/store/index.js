import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
     
      currentPage: 1,
      formstep: [
        {
          stepPage: 1,
          name: "About you",
          form: {
            name: {
              label: "FullName",
              type: "text",
            },
            email: {
              label: "Your email",
              type: "email",
            },
          },
        },

        {
          stepPage: 2,
          name: "About your company",
          form: {
            company: {
              label: "Your Company Name",
              type: "text",
            },
            employees: {
              label: "Number Of Employees",
              type: "text",
            },
          },
        },

        {
          stepPage: 3,
          name: "Finishing Up",
         
        },
      ],
    };
  },
  getters: {
    getvalue: (state) => state.formstep.form,
  },
  mutations: {
    nextPage(state) {
      if (state.currentPage >= 3) {
        return (state.currentPage === 1);
      }

      state.currentPage++;
    },
    backPage(state) {
      if (state.currentPage === 1) {
        return;
      }
      state.currentPage--;
    },
    backreset(state) {
      return (state.currentPage = state.currentPage = 1);
    },
  },
  actions: {
    nextPage({ commit }) {
      commit("nextPage");
    },
    backPage({ commit }) {
      commit("backPage");
    },
    backreset({ commit }) {
      commit("backreset");
    },
  },
});

export default store;
