<template>
  <div>
    <header class="my-5">
      <button>Copy All</button>
    </header>
    <main
      class="flex flex-wrap px-6 transition-all duration-200"
      :class="{
        'gap-4': isCardGap,
        'gap-0': !isCardGap,
        'flex-col': isOneline,
      }"
    >
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
      <ColorCard />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ColorCard from "./ColorCard.vue";

const isCardGap = ref(true);
const isOneline = ref(false);
</script>
