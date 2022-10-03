<template>
  <div>
    <section>
      <h1 class="text-center text-4xl text-primary dark:text-secondary">-_-</h1>
    </section>
  </div>
</template>
<script>
export default {
  transition: "slide-bottom",
  head() {
    return {
      title: this.title,
    };
  },
  computed: {
    title() {
      return this.$capitalizeFirstLetter(this.$route.name);
    },
  },
};
</script>
<style scoped>
</style>
