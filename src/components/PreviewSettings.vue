<template>
  <div>
    <h3 className="text-xl font-bold text-slate-400 flex mb-2">
      Preview Settings
    </h3>
    <div class="flex gap-2 text-slate-400 mt-3">
      <Toggle v-model="isActiveCardPadding" @change="onChangeCardPadding" />
      <label
        id="card-padding-label"
        class="cursor-pointer"
        @click="onChangeCardPadding(!isActiveCardPadding)"
        >Card Padding</label
      >
    </div>

    <div class="flex gap-2 text-slate-400 mt-4">
      <Toggle v-model="isActiveCardOneLine" @change="onChangeCardOneLine" />
      <label
        id="card-oneline-label"
        class="cursor-pointer"
        @click="onChangeCardOneLine(!isActiveCardOneLine)"
        >Card One Line</label
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Toggle from "@vueform/toggle";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();

const isActiveCardPadding = ref(false);
const isActiveCardOneLine = ref(false);

const onChangeCardPadding = (value) => {
  isActiveCardPadding.value = value;
  appStore.setHasCardGap(value);
};

const onChangeCardOneLine = (value) => {
  isActiveCardOneLine.value = value;
  appStore.setHasCardOneline(value);
};
</script>
<style src="@vueform/toggle/themes/default.css"></style>
