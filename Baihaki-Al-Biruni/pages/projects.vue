<template>
  <div>
    <section>
      <div class="skills">
        <div class="container px-4 mx-auto text-center">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 pb-6">
            <div
              v-for="p in projects"
              :key="p.name"
              class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8"
            >
              <div class="card-item mx-auto max-w-sm">
                <div class="card-img relative overflow-hidden cursor-pointer">
                  <img
                    :src="getPict(p.picture)"
                    alt="card image"
                    class="object-cover h-48 w-full"
                  />
                  <div class="card-hover"></div>
                </div>
                <div class="px-1 py-4">
                  <h5
                    class="font-semibold text-xl text-primary dark:text-secondary"
                  >
                    {{ p.name }}
                  </h5>
                  <p class="text-primary dark:text-secondary">
                    {{ p.desc }}
                  </p>
                </div>
                <div class="px-2 pt-1 pb-2">
                  <span
                    v-for="stack in p.stack"
                    :key="stack"
                    class="inline-block bg-primary dark:bg-secondary opacity-75 rounded-lg px-3 py-1 text-sm font-bold text-secondary dark:text-primary mr-2 mb-2"
                    >{{ stack }}</span
                  >
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
      projects: [
        {
          name: "Sitama Admin",
          desc: "Pengelolaan data semua bisnis",
          picture: "sitamaadmin.png",
          stack: ["Laravel", "VueJs"],
        },
        {
          name: "Grosir Mobil 2.0",
          desc: "Situs eccomerce jual beli mobil",
          picture: "grosirmobil.png",
          stack: ["Laravel", "VueJs"],
        },
        {
          name: "Negondeal",
          desc: "Penjualan Mobil secara Elektronik",
          picture: "negondeal.png",
          stack: ["Laravel", "VueJs"],
        },
        {
          name: "Admin Negondeal",
          desc: "Manajemen, Mengatur aplikasi negondeal",
          picture: "adminnegondeal.png",
          stack: ["Laravel", "VueJs"],
        },
        {
          name: "Monster Slayer",
          desc: "Simple game seperti MMORPG",
          picture: "monsterslayer.png",
          stack: ["VueJs"],
        },
        {
          name: "Logtify",
          desc: "Pengolah data absensi",
          picture: "logtify.png",
          stack: ["VueJs", "Laravel"],
        },
        {
          name: "Admin Grosir Mobil",
          desc: "Manajemen Mengatur Aplikasi Grosir Mobil",
          picture: "admingrosirmobil.png",
          stack: ["VueJs", "Laravel"],
        },
        {
          name: "Rozor Galeri",
          desc: "Eccomerce penjualan hotwhells",
          picture: "rozorgaleri.png",
          stack: ["VueJs", "Laravel"],
        },
        {
          name: "Pengaduan Santri",
          desc: "Pengaduan antar santri dan guru (Tugas Akhir Bootcamp)",
          picture: "pengaduan.png",
          stack: ["Laravel"],
        },
        {
          name: "Telegram Bot Message",
          desc: "Mengirim pesan ke Telegram dengan Bot",
          picture: "telegrambot.png",
          stack: ["Javascript"],
        },
        {
          name: "Bacot Generator",
          desc: "Pengubah huruf vocal teks menjadi I",
          picture: "bacotgenerator.png",
          stack: ["Javascript"],
        },
        {
          name: "Yayasan Quran Company Profile",
          desc: "Pengenalan Yayasan Quran melalui Website",
          picture: "ycquran.png",
          stack: ["Laravel"],
        },
        {
          name: "E-Voting",
          desc: "Pemilihan secara elektronik",
          picture: "evoting.png",
          stack: ["PHP"],
        },
      ],
    };
  },
  methods: {
    getPict(pict) {
      return require(`~/assets/images/projects/` + pict);
    },
  },
};
</script>
