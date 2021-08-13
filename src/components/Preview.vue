<template>
  <div>
    <header class="my-5 flex items-center justify-end mx-5">
      <button>Copy All</button>
    </header>
    <main
      class="flex flex-wrap px-6 transition-all duration-200"
      :class="{
        'gap-4': appStore.hasCardGap,
        'gap-0': !appStore.hasCardGap,
        'flex-col': appStore.hasCardOneline,
      }"
    >
      <ColorCard
        v-for="(color, index) in appStore.colors"
        :key="index"
        :hex="color.hexString()"
        :weight="color.weight"
        :textColor="color.getBrightness() >= 50 ? '#18181b' : '#ffffff'"
      />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app";
import ColorCard from "./ColorCard.vue";

const appStore = useAppStore();
</script>
