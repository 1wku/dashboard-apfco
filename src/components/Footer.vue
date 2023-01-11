<template>
  <div class="w-full border-t-2 px-8 py-3 lg:flex justify-between items-center">
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentYear = ref<number>(new Date().getFullYear());
</script>
