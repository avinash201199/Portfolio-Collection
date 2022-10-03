<template>
  <div class="container mx-auto">
    <navbar></navbar>
    <Nuxt />
    <div class="absolute animate-bounce m-5 top-0 right-0">
      <button class="p-1 rounded" @click="changeMode">
        <img
          :src="require(`~/assets/images/${mode}-mode.svg`)"
          width="24"
          height="24"
          alt=""
        />
      </button>
    </div>
  </div>
</template>
<script>
import navbar from "./navbar";
export default {
  components: {
    navbar,
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
  computed: {
    mode() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
};
</script>
<style>
.dark-mode {
  @apply text-secondary bg-primary;
}
,
.light-mode {
  @apply text-primary bg-secondary;
}
</style>

