<template>
  <div>
    <div
      class="
        font-sans
        antialiased
        text-gray-900
        leading-normal
        tracking-wider
        bg-cover
      "
    >
      <!-- <div
      class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
      style="background-image: url('https://source.unsplash.com/1L71sPT5XKc')"
    > -->
      <div
        class="
          max-w-4xl
          flex
          items-center
          h-auto
          flex-wrap
          mx-auto
          my-32
          lg:my-32
        "
      >
        <!--Main Col-->
        <div
          id="profile"
          class="
            w-full
            rounded-lg
            lg:rounded-l-lg lg:rounded-r-none
            shadow-2xl
            bg-primary
            dark:bg-secondary
            opacity-75
            mx-6
            lg:mx-0
          "
        >
          <div class="p-4 md:p-12 text-center">
            <!-- Image for view-->
            <img
              src="~/assets/images/photo.jpg"
              class="
                block
                rounded-full
                shadow-xl
                mx-auto
                -mt-32
                h-48
                w-48
                bg-cover bg-center
                object-cover
              "
              alt=""
            />
            <h1
              class="text-3xl font-bold pt-6 text-secondary dark:text-primary"
            >
              {{ name }}
            </h1>
            <div
              class="
                mx-auto
                w-3/5
                pt-3
                border-b-2 border-white-600
                dark:border-indigo-600
                opacity-25
                shadow-2xl
              "
            ></div>
            <p
              class="
                pt-4
                text-base text-secondary
                dark:text-primary
                font-bold
                flex
                items-center
                justify-center
              "
            >
              <svg
                class="h-4 fill-current text-secondary dark:text-primary pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                />
              </svg>
              {{ job }} at {{ office }}
            </p>
            <p
              class="
                pt-2
                text-secondary
                dark:text-primary
                text-xs
                lg:text-sm
                flex
                items-center
                justify-center
              "
            >
              <svg
                class="h-4 fill-current text-secondary dark:text-primary pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
                />
              </svg>
              {{ address }}
            </p>
            <p class="p-8 lg:text-lg text-md text-secondary dark:text-primary">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: "slide-bottom",
  data() {
    return {
      name: "Baihaki Al Biruni",
      job: "Frontend Engineer",
      office: "Solusi Integrasi Pratama",
      address: "Bogor, Parung Panjang",
      description:
        "Web Developer Enthusiast menyukai hal - hal berbau teknologi dan juga menyukai dunia investasi.",
    };
  },
};
</script>
