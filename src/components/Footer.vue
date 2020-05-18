<template>
    <footer :class="['w-full sm:container mx-auto px-2 md:px-8 flex justify-center border-t-2 bg-black md:h-32', {'fixed bottom-0 left-0 right-0': isFooterFixed}]">
    <div class="flex flex-col md:flex-row justify-between w-full items-center bg-transparent my-10 md:py-0">
      <g-link class="text-white flex flex-col text-center md:text-left text-sm uppercase">
        <span>the</span>
        <span class="font-bold">tech</span>
        <span class="font-bold">directory</span>
      </g-link>
      <div class="footer-links flex-col md:flex-row flex lg:mx-48 flex-grow justify-around text-white items-center py-10 md:py-0 w-full md:w-auto">
        <g-link>About</g-link>
        <span class="circle my-2 md:my-0"></span>
        <g-link>Contact</g-link>
        <span class="circle my-2 md:my-0"></span>
        <g-link class="md:underline">@thetechdirectory</g-link>
      </div>
      <g-link class="text-white">©TTD. 2020</g-link>
    </div>
  </footer>
</template>

<style>
.circle {
  height: 7px;
  width: 7px;
  background-color: white;
  border-radius: 7px;
}
</style>

<script>
    export default {
        name: 'Footer',
        props: {
          isFooterFixed: Boolean
        }
    }
</script>