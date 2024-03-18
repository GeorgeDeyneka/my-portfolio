import { db } from "/firebaseConfig";
import { defineStore } from "pinia";

export const useDatabaseStore = defineStore("database", {
  state: () => ({
    items: [],
    item: {},
  }),

  actions: {
    setItems(items) {
      this.items = items;
    },

    setItem(item) {
      this.item = item;
    },

    resetItem() {
      this.item = {};
    },

    resetItems() {
      this.items = [];
    },

    async fetchItems(payload) {
      const { category, locale } = payload;
      const items = [];

      const snapshot = await db
        .ref(`projects/${category}/${locale}`)
        .once("value");

      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        items.push(childData);
      });

      this.setItems(items);
    },

    async fetchItem(payload) {
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
      return this.setItem(item);
    },
  },
});
