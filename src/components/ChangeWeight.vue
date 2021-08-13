<template>
  <div>
    <h3 className="text-xl font-bold text-slate-400 flex mb-2">Weight</h3>
    <div class="flex items-center justify-end">
      <vue-number-input
        class="w-28 text-center flex items-center justify-center"
        v-model="range"
        size="small"
        controls
        @update:model-value="onUpdateNumberInput"
      ></vue-number-input>
    </div>
    <vue-slider
      class="mt-4"
      v-model="range"
      @change="onChangeSlider"
    ></vue-slider>
  </div>
</template>

<script>
import { ref } from "vue";
import VueNumberInput from "@chenfengyuan/vue-number-input";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

import { useAppStore } from "@/stores/app";

export default {
  components: {
    VueNumberInput,
    VueSlider,
  },
  setup() {
    const appStore = useAppStore();

    const range = ref(appStore.weight || 1); 
    const onChangeSlider = (value) => {
      range.value = value;
      appStore.setWeight(value);
    };

    const onUpdateNumberInput = (value) => {
      range.value = value;
      appStore.setWeight(value);
    };
    return {
      range,
      onUpdateNumberInput,
      onChangeSlider,
    };
  },
};
</script>

<style>
.vue-number-input.vue-number-input--controls input {
  background: #25262b;
  border: 1px solid #373a40;
  color: #c1c2c5;
  border-radius: 12px;
}
.vue-number-input.vue-number-input--controls button {
  background: #25262b;
  border: 1px solid #373a40;
}
.vue-number-input.vue-number-input--controls button::before {
  background: #c1c2c5;
}
.vue-number-input.vue-number-input--controls button::after {
  background: #c1c2c5;
}
.vue-number-input__input {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
