<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);

const greetings = {
  language: "Luganda",
  greeting: "Jebale",
};

const getHello = () => {
  return;
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

    <div className="flex flex-col my-0 mx-auto enter align-center w-96 mt-48">
      <h1 className="text-4xl text-center">
        {{ greetings.language }} : {{ greetings.greeting }}
      </h1>
      <button
        @oclick="
          {
            getHello;
          }
        "
        className="bg-emerald-700  p-4 "
      >
        Click to say hello in different Languages.
      </button>
    </div>
  </div>
</template>

<style scoped></style>
