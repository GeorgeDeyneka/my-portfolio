import { db } from "/firebaseConfig";

export default {
  state: () => ({
    items: [],
    item: {},
  }),

  mutations: {
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

  getters: {},

  actions: {
    async fetchItems({ commit }, payload) {
      const { category, locale } = payload;
      const items = [];
      const snapshot = await db
        .ref(`projects/${category}/${locale}`)
        .once("value");
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        items.push(childData);
      });
      commit("setItems", items);
    },

    async fetchItem({ commit }, payload) {
      const { id, locale, category } = payload;
      const snapshot = await db
        .ref(`projects/${category}/${locale}`)
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
};
