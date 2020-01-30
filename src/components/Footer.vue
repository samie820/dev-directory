<template>
    <footer class="w-full sm:container mx-auto px-8 flex justify-center border-t-2 bg-black h-32">
    <div class="flex justify-between w-full items-center bg-transparent">
      <g-link class="text-white flex flex-col text-sm uppercase">
        <span>the</span>
        <span class="font-bold">tech</span>
        <span class="font-bold">directory</span>
      </g-link>
      <div class="footer-links flex lg:mx-48 flex-grow justify-around text-white items-center">
        <g-link>About</g-link>
        <span class="circle hidden lg:block"></span>
        <g-link>Contact</g-link>
        <span class="circle hidden lg:block"></span>
        <g-link class=" underline">@thetechdirectory</g-link>
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
        name: 'Footer'
    }
</script>