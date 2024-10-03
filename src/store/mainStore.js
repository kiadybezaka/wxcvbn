import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    // Home Data
    connectedUser: reactive ({
      name: 'Lorem Ipsum',
      description: `Dolor deslar met progbisse dolor ciliar mel.`,
    }),
  }),

  actions: {
    // connectedUser Data Actions
    updateConnectedUser(updatedUser) {
      this.connectedUser = { ...this.connectedUser, ...updatedUser };
    },
    addProduct(product) {
      this.products.push(product);
    },
    removeProduct(index) {
      this.products.splice(index, 1);
    },
  },
});
