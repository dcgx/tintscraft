<template>
  <div>
    <h3 className="text-xl font-bold text-slate-400 flex mb-2">Color Code</h3>
    <div class="flex justify-between relative">
      <div>
        <ColorInput
          class="absolute left-2 top-2 z-10"
          v-model="colorCode"
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
        <button class="bg-transparent">
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

const colorCode = ref("#000000");
</script>
