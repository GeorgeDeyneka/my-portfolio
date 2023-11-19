export default {
  state: () => ({
    screenWidth: window.innerWidth,
  }),

  mutations: {
    setScreenWidth(state, width) {
      state.screenWidth = width;
    },
  },

  getters: {
    screenWidth: (state) => state.screenWidth,
  },

  actions: {},
};
