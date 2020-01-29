<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <transition name="fade" appear>
      <main class="flex-grow">
        <slot />
      </main>
    </transition>
    <Footer />
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

/* ADDED CIRCULAR-STD FONT FACES */

@font-face {
  font-family: 'Circular Std';
  src: url('../assets/fonts/circular-std/circular-std-book.ttf');
  font-weight: normal;
}

@font-face {
  font-family: 'Circular Std Bold';
  src: url('../assets/fonts/circular-std/circular-std-bold.ttf');
  font-weight: bold;
}

@font-face {
  font-family: 'Circular Std Black';
  src: url('../assets/fonts/circular-std/circular-std-black.ttf');
  font-weight: bolder;
}

@font-face {
  font-family: 'Circular Std Medium';
  src: url('../assets/fonts/circular-std/circular-std-medium.ttf');
  font-weight: 500;
}

body {
  @apply font-body;
  margin:0;
  padding:0;
  line-height: 1.5;
}

main > *{
  @apply px-8;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

