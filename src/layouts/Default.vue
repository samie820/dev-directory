<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main class="flex-grow">
      <slot/>
    </main>
    <footer class="flex px-16 justify-center border-t-2 bg-black h-32">
    <div class="flex justify-between w-full items-center bg-transparent">
      <g-link class="text-white">THE TECH DIRECTORY</g-link>
      <g-link class="text-white">About</g-link>
      <g-link class="text-white">Contact</g-link>
      <g-link class="text-white">©TTD. 2020</g-link>
    </div>
  </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

