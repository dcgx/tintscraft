<template>
  <div className="flex flex-col">
    <div className="flex min-h-screen flex-col flex-wrap md:flex-row">
      <div
        className="max-h-[50vh] overflow-auto md:sticky md:top-0 md:max-h-screen"
      >
        <Sidebar />
      </div>

      <div className="max-h-[50vh] flex-1 overflow-auto pb-10 md:max-h-full">
        <div className="border-t border-dashed border-zinc-600 md:hidden" />
        <Preview />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Preview from "./components/Preview.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log("mounted");
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
