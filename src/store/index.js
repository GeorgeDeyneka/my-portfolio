import { createStore } from "vuex";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_6nUw_aqysoF0jaupTcU5pU8xNDAhUMY",
  authDomain: "portfolio-deyneka.firebaseapp.com",
  databaseURL:
    "https://portfolio-deyneka-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-deyneka",
  storageBucket: "portfolio-deyneka.appspot.com",
  messagingSenderId: "908361671087",
  appId: "1:908361671087:web:1aefe683f20fa87d850f5a",
  measurementId: "G-F8DBZWPPWM",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default createStore({
  state: {
    screenWidth: window.innerWidth,
    items: [],
    item: {},
  },

  mutations: {
    setScreenWidth(state, width) {
      state.screenWidth = width;
    },

    setItems(state, items) {
      state.items = items;
    },

    setItem(state, item) {
      state.item = item;
    },

    resetItem(state) {
      state.item = {};
    },
  },

  getters: {
    screenWidth: (state) => state.screenWidth,
  },

  actions: {
    async fetchItems({ commit }, locale) {
      const items = [];
      const snapshot = await db.ref(`projects/pet/${locale}`).once("value");
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        items.push(childData);
      });
      commit("setItems", items);
    },

    async fetchItem({ commit }, payload) {
      const { id, locale } = payload;
      const snapshot = await db
        .ref(`projects/pet/${locale}`)
        .orderByChild("id")
        .equalTo(id)
        .once("value");

      if (!snapshot.val()) {
        return null;
      }

      const item = Object.values(snapshot.val())[0];
      return commit("setItem", item);
    },
  },
});
