<template>
  <nav
    className="flex h-screen w-full flex-col border-none border-zinc-700 md:w-80 md:border-r md:border-solid lg:w-96"
  >
    <div className="flex-1 px-5">
      <div className="py-4">
        <h1 className="text-center text-2xl font-black text-zinc-100">
          Tints and Shadows
          <br />
          Generator
        </h1>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <section className="border-t border-zinc-600/60 pt-4">
            <ChangeColor />
          </section>
          <section>
            <ChangeWeight />
          </section>

          <section className="border-t border-zinc-600/60 pt-4">
            <h2>Section 1</h2>
          </section>
        </div>
      </div>
    </div>

    <div className="border-t border-zinc-700"></div>
  </nav>
</template>

<script setup>
import ChangeColor from "./ChangeColor.vue"; 
import ChangeWeight from "./ChangeWeight.vue"; 
</script>