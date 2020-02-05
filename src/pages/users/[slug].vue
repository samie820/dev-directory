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
              <div class="flex flex-col flex-grow work">
                  <div class="bg-white work-image p-10 w-full relative">
                      <g-image src="~/assets/images/Sample.jpg" class="object-cover h-full"></g-image>
                  </div>
                  <div class="my-16 pl-10 border-l-8 rounded-md border-gray-500 w-full py-5">
                      <p class="mb-10">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dolore ut, ex nisi autem error id amet velit est expedita saepe? Eius, labore exercitationem fugit magni dolores minus numquam delectus?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique perferendis magni, suscipit, aut, eum cum labore eveniet quas consectetur iste excepturi molestiae facilis? A nesciunt tenetur dicta atque autem laboriosam.
                      </p>
                      <a href="#" target="_blank" class="text-blue-500">
                          View Project
                          <span class="mx-4">
                              <i class="fas fa-arrow-right"></i>
                          </span>
                      </a>
                  </div>
              </div>
          </div>
      </section>
  </Layout>
</template>

<script>
import AvatarImage from "../../components/AvatarImage"
export default {
    components: {
        AvatarImage
    }
}
</script>

<style lang="scss">
.work-image{
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    height: 400px;
    position: relative;

    &>img {
        height: 100% !important;
    }
}
</style>