<template>
  <div>
    <header class="h-screen bg-gradient-to-r from-[#3c06a7] to-[#237d98] overflow-hidden">
      <div class="grid grid-cols-12 gap-8 h-full pt-10 lg:pt-0">
        <div class="col-span-12 lg:col-span-3 lg:col-start-3 flex items-center justify-center">
          <div class="relative">
            <div class="orbit">
              <div class="orbit-object">
                <i class="fab fa-sass"></i>
              </div>

              <div class="orbit-object">
                <i class="fab fa-js"></i>
              </div>

              <div class="orbit-object">
                <i class="fab fa-vuejs"></i>
              </div>

              <div class="orbit-object">
                <i class="fab fa-react"></i>
              </div>

              <div class="orbit-object">
                <i class="fab fa-bootstrap"></i>
              </div>

              <div class="orbit-object">
                <i class="fab fa-wordpress"></i>
              </div>
            </div>

            <div class="ping relative rounded-full overflow-hidden aspect-square w-[100px] md:w-[200px] xl:w-[300px] ring-4">
              
              <img src="~/assets/img/avatar/me.jpg" alt="" class="w-full object-cover">
            </div>
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
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/brands.min.css';
</style>


<style lang="scss" scoped>
  $time: 40s;

  i.fab {
    font-style: normal;
  }

  .orbit {
    height: 160%;
    left: -30%;
    position: absolute;
    top: -30%;
    transform: translate(-50%,-50%);
    transform-origin: center center;
    width: 160%;
    border-radius: 50%;
    animation: orbit-animation linear $time infinite;

    .orbit-object {
      position: absolute;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      aspect-ratio: 1;
      background-color: rgba(#fff, 7%);
      animation: orbit-compensation linear $time infinite;
      display: flex;
      justify-content: center;
      align-items: center;

      i.fab {
        font-style: normal;
        font-size: 2rem;
        color: rgba(#fff, 20%);
      }
      
      &:nth-child(1) {
        top: 43px;
        left: 14px;
      }

      &:nth-child(2) {
        top: -55px;
        left: 171px;
      }

      &:nth-child(3) {
        top: 392px;
        left: 330px;
      }

      &:nth-child(4) {
        top: 1px;
        left: 347px;
      }

      &:nth-child(5) {
        top: 364px;
        left: 1px;
      }

      &:nth-child(6) {
        left: 438px;
        top: 234px;
      }

      @keyframes orbit-animation {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes orbit-compensation {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(-360deg);
        }
      }
    }
  }
</style>