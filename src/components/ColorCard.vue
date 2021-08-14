<template>
  <div class="flex-1">
    <div class="group relative min-w-[180px] p-4" :style="{ background: hex }">
      <div className="text-sm text-left" :style="{ color: textColor }">
        {{ weight }}%
      </div>
      <div class="mt-2 flex items-center justify-between">
        <div class="text-lg" :style="{ color: textColor }">{{ hex }}</div>
        <div class="opacity-50 group-hover:opacity-100 md:opacity-0">
          <button v-tooltip="'Copy'" @click="copyHexToClipboard">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              :stroke="textColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { vTooltip } from "floating-vue";

const props = defineProps({
  hex: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  textColor: {
    type: String,
    required: true,
  },
  copyWithHash: {
    type: Boolean,
    required: true,
  },
});

const copyHexToClipboard = () => {
  let hex = props.copyWithHash ? props.hex : props.hex.slice(1);
  navigator.clipboard.writeText(hex);
};
</script>
