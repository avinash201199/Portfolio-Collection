<template>
  <div>
    <nav class="fixed top-0 left-0 bg-white w-full shadow mt-4">
        <div class="container m-auto flex justify-between items-center text-gray-700">
          <h1 class="pl-8 py-4 text-xl font-bold">Ramanda</h1>
          <ul class="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
            <li class="hover:bg-gray-200 py-4 px-6">Home</li>
            <li class="hover:bg-gray-200 py-4 px-6">Portfolio</li>
            <li class="hover:bg-gray-200 py-4 px-6">Skill</li>
            <li class="hover:bg-gray-200 py-4 px-6">Contact</li>
        </ul>
          <button class="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div class="w-5 h-1 bg-gray-600 mb-1"></div>
            <div class="w-5 h-1 bg-gray-600 mb-1"></div>
            <div class="w-5 h-1 bg-gray-600"></div>
            <div class="absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0  group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li class="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
                <li class="hover:bg-gray-200 py-4 px-6 w-full">Portfolio</li>
                <li class="hover:bg-gray-200 py-4 px-6 w-full">Skill</li>
                <li class="hover:bg-gray-200 py-4 px-6 w-full">Contact</li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
      <!-- Section About Me -->
      <section class="mt-20 flex ">
          <div class="grid grid-cols-12 lg:grid-cols-12  w-full">
             <div class="col-span-12 text-center">
                 <h3 class="font-rubik mt-20 text-4xl">R a m a n d a  M a u l a n a</h3>
                 <h3 class="font-rubik text-4xl">F r o n t e n d   w e b d e v e l o p e r</h3>
                </div>
          </div>
      </section>
  </div>
</template>
