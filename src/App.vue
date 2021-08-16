<template>
  <div className="flex ">
    <div
      className="flex min-h-screen flex-wrap flex-col w-full max-w-screen-2xl mx-auto"
    >
      <div
        className="max-h-[50vh] overflow-auto md:sticky md:top-0 md:max-h-screen"
      >
        <Navbar />
      </div>

      <div className="max-h-[50vh] flex-1 overflow-auto pb-10 md:max-h-full">
        <div className="border-t border-dashed border-zinc-600 md:hidden" />
        <Preview />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useTitle, useFavicon } from '@vueuse/core'
import Navbar from "./components/Navbar.vue";
import Preview from "./components/Preview.vue";

const title = useTitle()
const favicon = useFavicon()

onMounted(() => {
  title.value = "Tints - Color Palette Generator";
  favicon.value = "/favicon.ico"
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
