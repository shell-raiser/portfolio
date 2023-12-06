import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    chipSelected: [],
    activeSection: 'about',
  }),

  actions: {
    changeActiveSection(activeSection) {
      this.activeSection = activeSection;
    },
  },
});
