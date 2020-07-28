<template>
  <Layout :is-footer-fixed="false">
      <section id="bio" class="bg-gray-200 p-10 md:p-20 lg:px-40">
        <div class="w-full sm:w-2/3 lg:w-1/3 flex flex-col md:flex-row items-center">
            <avatar-image :image-url="profileImage" class="mx-auto md:mx-px" :is-verified="$page.user.isVerified"></avatar-image>
            <h2 class="font-display text-2xl flex flex-col sm:ml-4 text-center sm:text-left">
                <span>{{ $page.user.firstName }}</span>
                <span>{{ $page.user.lastName }}</span>
                <span class="font-body font-light text-xs text-gray-500" v-if="$page.user && $page.user.location">{{ $page.user.location }}</span>
            </h2>
        </div>
        <div class="py-12 text-xl" v-if="$page.user && $page.user.bio">
            <p class="font-light text-gray-600 mb-4" v-if="$page.user && $page.user.currentRole && $page.user.currentCompany">
                {{$page.user.currentRole}} <span v-if="$page.user.currentCompany">@ <span class="underline">{{$page.user.currentCompany}}</span></span>
            </p>
            {{ $page.user.bio }}
            
            <div class="w-full flex flex-row flex-wrap mt-6" v-if="$page.user && $page.user.skills && $page.user.skills.length > 0">
                <span v-for="(skill, i) in $page.user.skills" :key="i" class="bg-gray-300 rounded text-center py-1 font-light px-4 mr-2 my-2">
                    {{skill}}
                </span>
            </div>
        </div>
        <a class="py-5 hover:underline text-xl mx-auto lg:mx-0 text-blue-500" v-if="$page.user && $page.user.portfolio" :href="$page.user.portfolio" target="_blank">
            <i class="fas fa-link"></i>
            <span class="mx-4" v-if="$page.user && $page.user.portfolio">{{$page.user.portfolio}}</span>
        </a>
        <div id="social-media" class="flex flex-row text-3xl mx-auto lg:mx-0 w-3/5 lg:w-1/5 justify-between mt-10" v-if="$page.user && $page.user.social">
            <a v-if="$page.user.social.facebook" :href="`https://facebook.com/${($page.user.social && $page.user.social.facebook) ? $page.user.social.facebook : ''}`" target="__blank">
                <i class="fab fa-facebook-square"></i>
            </a>
            <a v-if="$page.user.social.linkedIn" :href="`https://linkedin.com/in/${($page.user.social && $page.user.social.linkedIn) ? $page.user.social.linkedIn : ''}`" target="__blank">
                <i class="fab fa-linkedin"></i>
            </a>
            <a v-if="$page.user.social.twitter" :href="`https://twitter.com/${($page.user.social && $page.user.social.twitter) ? $page.user.social.twitter : ''}`" target="__blank">
                <i class="fab fa-twitter"></i>
            </a>
            <a v-if="$page.user.social.github" :href="`https://github.com/${($page.user.social && $page.user.social.github) ? $page.user.social.github : ''}`" target="__blank">
                <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a v-if="$page.user.social.email" :href="`mailto:${($page.user.social && $page.user.social.email) ? $page.user.social.email : ''}`">
                <i class="far fa-envelope" aria-hidden="true"></i>
            </a>
        </div>
      </section>

      <section id="works" class="p-10 md:p-20 lg:px-40 bg-gray-200" v-if="$page.user && $page.user.selectedWorks && $page.user.selectedWorks.length > 0">
          <p class="uppercase text-gray-500 ">SELECTED WORKS</p>
          <div id="all-works" class="flex flex-row my-10">
              <work-card v-for="work in $page.user.selectedWorks" :work="work" :key="work.id"></work-card>
          </div>
      </section>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  user: users(id: $id) {
    id,
    name,
    avatar,
    username,
    firstName,
    lastName,
    bio,
    portfolio,
    currentRole,
    currentCompany,
    location,
    isVerified,
    social { github, twitter, linkedIn, email },
    selectedWorks {
      projectTitle,
      projectImageUrl,
      projectDescription,
      projectLink
    },
    skills
  }
}
</page-query>

<script>
import AvatarImage from "~/components/AvatarImage"
import WorkCard from "~/components/WorkCard"

export default {
    data() {
        return {
        }
    },
    components: {
        AvatarImage, WorkCard
    },
    computed: {
        profileImage() {
             return this.$page.user.avatar ? this.$page.user.avatar : `https://ui-avatars.com/api/?name=${this.$page.user.firstName}&background=000000&color=fff&size=256&bold=true&rounded=true`;
        }
    }
}
</script>