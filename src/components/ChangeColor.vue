<template>
  <div>
    <h3 className="text-xl font-bold text-slate-400 flex mb-2">Color Code</h3>
    <div class="flex justify-between relative">
      <div>
        <ColorInput
          class="absolute left-2 top-2 z-10"
          :modelValue="colorCode"
          @update:modelValue="onInputColor"
          position="bottom right"
          format="hex"
        />
      </div>
      <input
        class="w-full border hover:border-slate-500 input-color"
        v-model="colorCode"
      />
      <div
        class="cursor-pointer flex items-center justify-center absolute top-0 right-0 bottom-0 w-9"
      >
        <button v-tooltip="'Generate random color'" class="bg-transparent px-2 py-1 hover:bg-zinc-700 rounded-lg" @click="onGenerateRandomColor">
          <ArrowPathIcon class="h-6 w-6 text-slate-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ColorInput from "vue-color-input";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";

import { useAppStore } from "@/stores/app";
import { randomColor } from "@/utils/colors";

const appStore = useAppStore();
const colorCode = ref(appStore.color.hex);

const onGenerateRandomColor = () => {
  const color = randomColor();
  console.log(color, "RANDOM");
  colorCode.value = color;
  appStore.setColor({ hex: color });
};

const onInputColor = (color) => {
  colorCode.value = color;
  appStore.setColor({ hex: color });
};
</script>
