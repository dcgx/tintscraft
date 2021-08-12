<template>
  <div>
    <h3 className="text-xl font-bold text-slate-400 flex mb-2">
      Preview Settings
    </h3>
    <div class="flex gap-2 text-slate-400 mt-2">
      <Toggle v-model="isActiveCardPadding" />
      <label id="toggle-label">Card Padding</label>
    </div>

    <div class="flex gap-2 text-slate-400 mt-2">
      <Toggle v-model="isActiveCardOneLine" />
      <label id="toggle-label">Card One Line</label>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Toggle from "@vueform/toggle";

const isActiveCardPadding = ref(false);
const isActiveCardOneLine = ref(false);
</script>
<style src="@vueform/toggle/themes/default.css"></style>
