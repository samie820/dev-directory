<template>
  <Layout>
    <section id="hero" class="mt-12 mb-16 lg:my-24 flex flex-col container mx-auto">
      <span class="uppercase text-gray-600 font-bold text-xs">
        the tech directory
      </span>
      <div class="flex justify-between w-full">
        <div class="md:w-3/6 lg:w-2/5 sm:full">
            <h1 class="text-3xl pt-12 pb-16">
            An extensive directory of people in tech all over the world building and growing awesome stuff.
            </h1>
              <div class="flex">
                <input type="text" class="focus:outline-none text-base border-b-2 border-black flex-grow"
                placeholder="Begin Your Search...">
                <button class="bg-slightly-dark px-8 py-2 mx-4 rounded-sm">
                <g-image alt="Search button" src="~/assets/images/Search-white.svg"></g-image>
              </button>
            </div>
        </div>
        <div class="banner flex md:w-3/6 lg:3/5">
          <g-image class="w-full" alt="Search Icon" src="~/assets/images/dev-banner.svg" />
        </div>
      </div>
    </section>
    <section id="recently-added" class="bg-gray-300 py-24 w-full">
      <div class="w-full flex justify-between px-8">
        <h2 class="section-title">Top Trending</h2>
        <p>View All</p>
      </div>
      <div class="w-full flex flex-wrap justify-around py-4">
        <UserCard v-for="user in users" v-bind:key="user.id" v-bind:user="user" />
      </div>
    </section>
  </Layout>
</template>

<script>
import UserCard from '~/components/UserCard.vue';
export default {
  components: {
    UserCard,
  },
  metaInfo: {
    title: 'Home'
  },

  data() {
    return {
      users: [
        {
        id: 1,
        name: 'Nelson Nelson Atonwu',
        location: 'Lagos, Nigeria',
        currentRole: 'Software Engineer',
        currentCompany: 'Interswitch',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenat.'
      },
        {
        id: 2,
        name: 'Nelson Nelson Atonwu',
        location: 'Lagos, Nigeria',
        currentRole: 'Software Engineer',
        currentCompany: 'Interswitch',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenat.'
      },
        {
        id: 3,
        name: 'Nelson Nelson Atonwu',
        location: 'Lagos, Nigeria',
        currentRole: 'Software Engineer',
        currentCompany: 'Interswitch',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenat.'
      },
        {
        id: 4,
        name: 'Nelson Nelson Atonwu',
        location: 'Lagos, Nigeria',
        currentRole: 'Software Engineer',
        currentCompany: 'Interswitch',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenat.'
      },
        {
        id: 5,
        name: 'Nelson Nelson Atonwu',
        location: 'Lagos, Nigeria',
        currentRole: 'Software Engineer',
        currentCompany: 'Interswitch',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenat.'
      },
        {
        id: 6,
        name: 'Nelson Nelson Atonwu',
        location: 'Lagos, Nigeria',
        currentRole: 'Software Engineer',
        currentCompany: 'Interswitch',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenat.'
      },
      
      ]
    }
  },
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.section-title {
  position: relative;

  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    left: 10px;
    height: 10px;
    z-index: -1;
  }
}

@media screen and (max-width: 640px) {
.banner {
  display: none;
}  
}
</style>
