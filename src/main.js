// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "./assets/css/global.css";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  // Added FontAwesome Scripts
  head.script.push({
    src: 'https://use.fontawesome.com/releases/v5.1.1/js/all.js',
    integrity: 'sha384-BtvRZcyfv4r0x/phJt9Y9HhnN5ur1Z+kZbKVgzVBAlQZX4jvAuImlIz+bG7TS00a',
    crossorigin: 'anonymous'
  })
  
  Vue.component('Layout', DefaultLayout)
}
