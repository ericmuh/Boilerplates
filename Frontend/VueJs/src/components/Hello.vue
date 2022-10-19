<script lang="ts">
import { getLanguages } from "../api";

export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      greetings: {
        language: "Luganda",
        greeting: "Jebale",
      },
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes("?")) {
        this.getHello();
      }
    },
  },
  methods: {
    async getHello() {
      this.greetings = await getLanguages();
    },
  },
};
</script>

<template>
  <div class="card">
    <div className="flex flex-col my-0 mx-auto enter align-center w-96 mt-48">
      <h1 className="text-4xl text-center">
        {{ greetings.language }} : {{ greetings.greeting }}
      </h1>
      <button v-on:click="getHello" className="bg-emerald-700  p-4 ">
        Click to say hello in different Languages.
      </button>
    </div>
  </div>
</template>

<style scoped></style>
