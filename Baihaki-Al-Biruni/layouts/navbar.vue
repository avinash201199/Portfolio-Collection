<template>
  <div>
    <nav>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center sm:h-16 md:h-32">
          <div class="flex items-center">
            <div class="hidden text-right md:block">
              <div class="ml-10 flex items-baseline">
                <nuxt-link
                  to="/"
                  class="text-2xl px-3 py-2 rounded-md text-sm font-medium text-primary dark:text-secondary"
                  >Home
                </nuxt-link>
                <!-- <a href="#">Home</a> -->
                <nuxt-link
                  to="/skills"
                  class="text-2xl px-3 py-2 rounded-md text-sm font-medium text-primary dark:text-secondary"
                  >Skills</nuxt-link
                >
                <nuxt-link
                  to="/projects"
                  href="#"
                  class="text-2xl px-3 py-2 rounded-md text-sm font-medium text-primary dark:text-secondary"
                  >Projects</nuxt-link
                >
                <nuxt-link
                  to="/blog"
                  href="#"
                  class="text-2xl px-3 py-2 rounded-md text-sm font-medium text-primary dark:text-secondary"
                  >Blog</nuxt-link
                >
                <nuxt-link
                  to="/contact"
                  href="#"
                  class="text-2xl px-3 py-2 rounded-md text-sm font-medium text-primary dark:text-secondary"
                  >Contact</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden py-5">
            <!-- Mobile menu button -->
            <button
              @click="toggle"
              class="inline-flex items-center justify-center p-2 rounded-md text-primary dark:text-secondary hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <nuxt-link
            to="/"
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-secondary"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/skills"
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-secondary"
            >Skills</nuxt-link
          >
          <nuxt-link
            to="/projects"
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-secondary"
            >Projects</nuxt-link
          >
          <nuxt-link
            to="/blog"
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-secondary"
            >Blog</nuxt-link
          >
          <nuxt-link
            to="/contact"
            href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-secondary"
            >Contact</nuxt-link
          >
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700"></div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped lang="scss">
.dark-mode {
  .nuxt-link-exact-active {
    @apply bg-blue-900;
  }
}

.light-mode {
  .nuxt-link-exact-active {
    @apply bg-gray-300;
  }
}
</style>
