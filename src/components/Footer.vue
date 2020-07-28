<template>
    <footer :class="['w-full sm:container mx-auto px-2 md:px-8 flex justify-center border-t-2 bg-black md:h-32', {'fixed bottom-0 left-0 right-0': isFooterFixed}]">
    <div class="flex flex-col md:flex-row justify-between w-full items-center bg-transparent my-10 md:py-0">
      <g-link class="text-white flex flex-col text-center md:text-left text-sm uppercase">
        <span>the</span>
        <span class="font-bold">tech</span>
        <span class="font-bold">directory</span>
      </g-link>
      <div class="footer-links flex-col md:flex-row flex lg:mx-48 flex-grow justify-around text-white items-center py-10 md:py-0 w-full md:w-auto">
        <a href="#" @click="e => showAboutModal = !showAboutModal">About</a>
        <span class="circle my-2 md:my-0"></span>
        <a href="#" @click="e => showContactModal = !showContactModal">Contact</a>
        <span class="circle my-2 md:my-0"></span>
        <g-link class="md:underline">@thetechdirectory</g-link>
      </div>
      <g-link class="text-white">©TTD. 2020</g-link>
    </div>

    <transition
          leave-active-class="duration-200 transform ease-linear"
          leave-class="scale-100 opacity-100"
          leave-to-class="scale-75 opacity-0"
          enter-active-class="duration-200 transform ease-linear delay-200"
          enter-class="scale-75 opacity-0 delay-150"
          enter-to-class="scale-100 opacity-100">
      <div class="fixed top-0 left-0 right-0 bottom-0 bg-cover z-10 flex items-center justify-center" v-if="showAboutModal || showContactModal">
        <transition
          leave-active-class="duration-200 transform ease-linear"
          leave-class="scale-100 opacity-100"
          leave-to-class="scale-75 opacity-0"
          enter-active-class="duration-200 transform ease-linear delay-200"
          enter-class="scale-75 opacity-0 delay-150"
          enter-to-class="scale-100 opacity-100">
          <div class="bg-white rounded p-10 shadow w-1/3 text-center relative" v-if="showAboutModal">
            <button class="absolute right-0 top-0 mt-4 mr-6 text-gray-600" @click="e => showAboutModal = !showAboutModal"> <i class="fas fa-times"></i></button>
            <p class="pb-4 test-xl font-bold">BUILT BY</p>
            <div class="grid grid-cols-1 row-gap-4">
              <p>Nelson Nelson-Atuonwu . <a href="https://twitter.com/blvckcoder" target="_blank" class="text-gray-500 underline">Twitter</a></p>
              <p>Samuel Omole . <a href="https://twitter.com/ajebodeveloper" target="_blank" class="text-gray-500 underline">Twitter</a></p>
            </div>
          </div>
          <div class="bg-white rounded p-10 shadow w-1/3 text-center relative" v-else-if="showContactModal">
            <button class="absolute right-0 top-0 mt-4 mr-6 text-gray-600" @click="e => showContactModal = !showContactModal"> <i class="fas fa-times"></i></button>
            <p class="pb-4 test-xl font-bold">REACH OUT TO:</p>
            <div class="grid grid-cols-1 row-gap-4">
              <p>Nelson Nelson-Atuonwu . <a href="https://twitter.com/blvckcoder" target="_blank" class="text-gray-500 underline">Twitter</a></p>
              <p>Samuel Omole . <a href="https://twitter.com/ajebodeveloper" target="_blank" class="text-gray-500 underline">Twitter</a></p>
            </div>
          </div>
          
        </transition>
      </div>
    </transition>
  </footer>
</template>

<style scoped>
.circle {
  height: 7px;
  width: 7px;
  background-color: white;
  border-radius: 7px;
}

.bg-cover{
  background: rgba(0, 0, 0, .5);
}
</style>

<script>
    export default {
        name: 'Footer',
        props: {
          isFooterFixed: Boolean
        },
        data: () => ({
          showAboutModal: false,
          showContactModal: false
        })
    }
</script>