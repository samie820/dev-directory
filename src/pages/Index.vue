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
                <form @submit='handleSearch' class="flex w-full">
                  <input type="text" class="focus:outline-none text-base border-b-2 border-black flex-grow"
                  placeholder="Begin Your Search..." v-model="searchTerm">
                  <button :disabled="searchTerm === ''" @click="handleSearch" class="bg-slightly-dark px-8 py-2 mx-4 rounded-sm">
                    <g-image alt="Search button" src="~/assets/images/Search-white.svg"></g-image>
                  </button>
                </form>
            </div>
        </div>
        <div class="banner hidden lg:block md:w-3/6 lg:3/5">
          <g-image class="w-full" alt="Search Icon" src="~/assets/images/header-img.svg" />
        </div>
      </div>
    </section>
    <section id="recently-added" class="bg-gray-300 py-24 w-full">
      <div class="container">
        <div class="w-full flex justify-between px-8">
        <h2 class="section-title">Recently Added</h2>
        <g-link :to="{path: '/users/search'}" class="flex flex-row items-center">View All
          <span class="ml-4">
            <g-image src="~/assets/images/Arrow-right.svg"></g-image>
          </span>
        </g-link>
      </div>
      <div class="cards mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <user-card v-for="edge in $page.Users.edges.slice($page.Users.edges.length > 6 ? $page.Users.edges.length - 6 : 0, $page.Users.edges.length)" v-bind:key="edge.node.id" v-bind:user="edge.node" />
      </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query {
    Users:allUsers {
      edges {
        node {
          firstName, lastName, currentRole, currentCompany, bio, id, name, isVerified, username, avatar
        }
      }
    }
}
</page-query>

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
      searchTerm: '',
    }
  },
  methods: {
    handleSearch(evt) {
      evt.preventDefault();
      if(this.searchTerm === '') return;
        this.$router.push({ path: '/users/search', query: {
            q: this.searchTerm
        } })
    }
  }
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}

.section-title {
  position: relative;
  z-index: 2;

  &::before{
    content: '';
    position: absolute;
    bottom: 0;
    background-color: white;
    width: 100%;
    left: 10px;
    height: 50%;
    z-index: -1;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
}

.cards > div{
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 4px;
}
@media screen and (max-width: 640px) {
.banner {
  display: none;
}
}
</style>
