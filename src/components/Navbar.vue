<template>
  <nav
    className="flex w-full flex-col border-none border-zinc-700 md:border md:rounded-md pb-3 md:border-solid "
  >
    <div className="flex-1 px-5">
      <div className="py-4">
        <h1 className="text-center text-3xl font-black text-zinc-100">
          Tintscraft
        </h1>

        <span class="text-zinc-500"> Tool to generate tints and shadows of a color. <br /> </span>
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
            <PreviewSettings />
          </section>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import ChangeColor from "./ChangeColor.vue";
import ChangeWeight from "./ChangeWeight.vue";
import PreviewSettings from "./PreviewSettings.vue";
</script>
