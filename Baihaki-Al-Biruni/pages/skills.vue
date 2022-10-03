<template>
  <div>
    <section>
      <div class="skills">
        <div class="container px-4 mx-auto">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 pb-6">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="sm:px-6 sm:w-1/2 lg:w-1/4 mt-8"
            >
              <div class="card-item mx-auto max-w-sm text-center">
                <i
                  class="colored"
                  :class="skill.icon"
                  style="font-size: 15rem"
                ></i>
                <div class="px-1 py-4 text-center">
                  <h5
                    class="font-semibold text-xl text-primary dark:text-secondary"
                  >
                    {{ skill.name }}
                  </h5>
                  <p class="text-gray-600">
                    <span class="font-bold">{{ skill.experience }}</span> of
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      skills: [
        {
          name: "Photoshop",
          icon: "devicon-photoshop-plain",
          experience: "3 years",
        },
        {
          name: "CSS",
          icon: "devicon-css3-plain",
          experience: "4 years",
        },
        {
          name: "PHP",
          icon: "devicon-php-plain",
          experience: "4 years",
        },
        {
          name: "SASS",
          icon: "devicon-sass-plain",
          experience: "7 months",
        },
        {
          name: "VueJS",
          icon: "devicon-vuejs-plain",
          experience: "1 years",
        },
        {
          name: "Laravel",
          icon: "devicon-laravel-plain",
          experience: "1 years",
        },
        {
          name: "React",
          icon: "devicon-react-plain",
          experience: "3 months",
        },
        {
          name: "NodeJS",
          icon: "devicon-nodejs-plain",
          experience: "1 months",
        },
        {
          name: "Jquery",
          icon: "devicon-jquery-plain",
          experience: "4 years",
        },
        {
          name: "ExpressJS",
          icon: "devicon-express-original",
          experience: "1 months",
        },
        {
          name: "Python",
          icon: "devicon-python-plain",
          experience: "2 months",
        },
        {
          name: "Mysql",
          icon: "devicon-mysql-plain",
          experience: "4 years",
        },
        {
          name: "MongoDB",
          icon: "devicon-mongodb-plain",
          experience: "2 months",
        },
      ],
    };
  },
};
</script>
