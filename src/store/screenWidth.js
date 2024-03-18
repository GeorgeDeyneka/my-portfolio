import { defineStore } from "pinia";

export const useScreenWidthStore = defineStore("screen-width", {
  state: () => ({
    screenWidth: window.innerWidth,
  }),

  actions: {
    setScreenWidth(width) {
      this.screenWidth = width;
    },
  },
});
