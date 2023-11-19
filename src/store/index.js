import { createStore } from "vuex";
import screenWidth from "./screenWidth";
import databaseModule from "./databaseModule";

export default createStore({
  modules: {
    screenWidth,
    databaseModule,
  },
});
