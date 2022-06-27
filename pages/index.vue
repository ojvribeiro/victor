<template>
  <div>
    <header class="h-screen bg-gradient-to-r from-[#3c06a7] to-[#237d98]">
      <div class="grid grid-cols-12 gap-8 h-full pt-10 lg:pt-0">
        <div class="col-span-12 lg:col-span-3 lg:col-start-3 flex items-center justify-center">
          <div class="ping rounded-full overflow-hidden aspect-square w-[100px] md:w-[200px] xl:w-[300px] ring-4">
            <img src="~/assets/img/avatar/me.jpg" alt="" class="w-full object-cover">
          </div>
        </div>

        <div class="col-span-12 lg:col-span-4 lg:col-start-7 flex items-center">
          <div class="px-4 sm:px-8 md:px-16">
            <p class="font-sans text-white opacity-50 font-semibold">
              Olá! Eu sou o
            </p>
    
            <h1 class="font-mono text-white text-5xl mb-6 font-black">
              Victor Ribeiro
            </h1>
    
            <p class="font-mono text-white mb-5">
              Sou um desenvolvedor front-end que ama codar e ama mais ainda o JavaScript desde 2010. ❤️
            </p>

            <p>
              <ul class="text-white/50 list-disc ml-8">
                <li>JS</li>
                <li>CSS / Sass</li>
                <li>Vue / Nuxt</li>
                <li>Bootstrap / Tailwind / Materialize</li>
                <li>Webpack (Laravel Mix) / Vite</li>
              </ul>
            </p>

            <p class="mt-8">
              <div class="flex gap-5">
                <a href="https://github.com/ojvribeiro" target="_blank" class="transition-ease duration-200 text-white hover:text-white/50">
                  <i class="fab fa-github text-4xl"></i>
                </a>

                <a href="https://linkedin.com/in/ojvribeiro" target="_blank" class="transition-ease duration-200 text-white hover:text-white/50">
                  <i class="fab fa-linkedin text-4xl"></i>
                </a>

                <a href="https://twitter.com/ojvribeiro" target="_blank" class="transition-ease duration-200 text-white hover:text-white/50">
                  <i class="fab fa-twitter text-4xl"></i>
                </a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>


<style scoped>
  @import 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css';
</style>