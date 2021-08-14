import { defineStore } from "pinia";
import Values from "values.js";

export const useAppStore = defineStore("app", {
  state: () => ({
    color: {
      hex: "#f15025",
    },
    colors: [],
    weight: 10,
    hasCardGap: false,
    hasCardOneline: false,
    isIndicator: false,
    copyWithHash: false,
  }),

  actions: {
    setColor(color) {
      this.color = color;
      try {
        const colorValue = new Values(this.color.hex);
        this.colors = colorValue.all(this.weight);
      } catch (error) {
        this.colors = [];
      }
    },
    setWeight(weight) {
      this.weight = weight;
      try {
        const colorValue = new Values(this.color.hex);
        this.colors = colorValue.all(this.weight);
      } catch (error) {
        this.colors = [];
      }
    },
    setHasCardGap(hasCardGap) {
      this.hasCardGap = hasCardGap;
    },
    setHasCardOneline(hasCardOneline) {
      this.hasCardOneline = hasCardOneline;
    },
    setIsIndicator(isIndicator) {
      this.isIndicator = isIndicator;
    },
    setCopyWithHash(copyWithHash) {
      this.copyWithHash = copyWithHash;
    },
  },
});
