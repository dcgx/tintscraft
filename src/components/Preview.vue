<template>
  <div class="px-6">
    <header class="my-5 flex items-center justify-end">
      <button
        @click="copyAllCodeColors"
        v-tooltip="'Copy all color codes'"
        class="bg-slate-800 text-slate-400 px-5 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-slate-700"
      >
        {{ isCopied ? "Copied!" : "Copy all" }}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
          />
        </svg>
      </button>
    </header>
    <main
      class="flex flex-wrap transition-all duration-200"
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
        :copyWithHash="appStore.copyWithHash"
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

const isCopied = ref(false);

const copyAllCodeColors = () => {
  const copyWithHash = appStore.copyWithHash;
  const colors = appStore.colors.map((color) => {
    const hex = color.hexString();
    return copyWithHash ? `${hex}` : hex.slice(1);
  });
  const text = colors.join(",");
  navigator.clipboard.writeText(text);
  isCopied.value = true;
};
</script>
