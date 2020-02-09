<template>
  <Layout>
      <section id="bio" class="bg-gray-200 py-20 px-20 lg:px-40">
        <div class="w-2/3 lg:w-1/3 flex flex-row items-center">
            <avatar-image image-url="https://ui-avatars.com/api/?name=nel&background=000000&color=fff&size=256&bold=true&rounded=true"></avatar-image>
            <h2 class="font-display text-2xl flex flex-col ml-4">
                <span>Nelson</span>
                <span>Nelson-Atuonwu</span>
                <span class="font-body font-light text-xs text-gray-500">Lagos, Nigeria</span>
            </h2>
        </div>
        <div class="py-12 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo sint earum suscipit hic? Deleniti atque maiores, facilis culpa accusantium cumque quod animi ab voluptatum quaerat inventore magnam porro totam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem repellat dolorum, optio rerum sint animi sapiente eveniet enim vel vero, placeat voluptas! Facilis ex, quos fuga officiis beatae ea!
        </div>
        <a class="py-5 hover:underline text-xl mx-auto lg:mx-0 text-blue-500" href="#" target="_blank">
            <i class="fas fa-link"></i>
            <span class="mx-4">nelsonatuonwu.me</span>
        </a>
        <div id="social-media" class="flex flex-row text-3xl mx-auto lg:mx-0 w-3/5 lg:w-1/5 flex justify-between mt-12">
            <a href="#">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="#">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
                <i class="fab fa-github" aria-hidden="true"></i>
            </a>
        </div>
      </section>

      <section id="works" class="px-20 lg:px-40 pb-24 lg:pb-40 bg-gray-200">
          <p class="uppercase text-gray-500 ">SELECTED WORKS</p>
          <div id="all-works" class="flex flex-row my-10">
              <work-card v-for="edge in $page.Works.edges" :work="edge.node" :key="edge.node.id"></work-card>
          </div>
      </section>
  </Layout>
</template>

<page-query>
query($username: String!) {
  Works: allWorks(filter: {username: {eq: $username}}){
    edges {
      node {
        description, id, imageUrl, link, user {
          firstName, lastName, location
        }
      }
    }
  }
}
</page-query>

<script>
import AvatarImage from "~/components/AvatarImage"
import WorkCard from "~/components/WorkCard"

export default {
    data() {
        return {
            username: ""
        }
    },
    components: {
        AvatarImage, WorkCard
    },
    mounted(){
        this.username = this.$route.params.slug
        this.$context.username = this.$route.params.slug
        console.log(this.$context)
    },
    created(){
        this.$context.username = this.$route.params.slug
    },
    beforeCreate(){
        this.$context.username = this.$route.params.slug
    }
    // computed: {
    //     username(){
    //         return this.$route.params.slug
    //     }
    // }
}
</script>