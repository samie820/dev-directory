<template>
    <Layout classes="flex pb-10 min-h-full overflow-hidden">
        <div class="min-h-full grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            <div class="flex flex-col flex-grow relative lg:justify-center w-full items-start">
                <input type="text" @input="handleSearch" v-model="query" placeholder="Begin your search here..." class="focus:outline-none border-0 text-3xl" />

                <div class="options gap-6 grid-cols-4 lg:grid-cols-3 mt-10 lg:mt-20 grid w-full">
                    <category-radio v-for="(category, index) in categories"
                    :key="index" name="category" :value="category" @input="$data => currentCategory = $data"
                    :classes="index == 0 || index == 3 ? 'lg:col-span-2' : ''" :ref="`checkbox-${index}`"></category-radio>
                </div>
            </div>
            <div class="bg-gray-200 col-span-2 flex flex-grow flex-col rounded-md search-results p-10 lg:p-16 overflow-y-auto">

                <div class="results grid-cols-2 md:grid-cols-3 grid gap-10 row-gap-10">
                    <div class="search-result relative" v-for="edge in users" v-bind:key="edge.node.id">
                        <div class="bg-white p-6 text-black" style="box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);">
                            <h2 class="text-xl text-gray-500">{{ edge.node.firstName }}</h2>
                            <h2 class="text-xl text-gray-500">{{ edge.node.lastName }}</h2>
                            <span class="text-sm">{{ edge.node.location }}</span>
                            <h2 class="text-lg mt-6">{{ edge.node.currentRole }}</h2>
                            <h2 class="text-lg underline">{{ edge.node.currentCompany }}</h2>
                        </div>
                        <g-link class="absolute h-12 w-12 bg-black rounded-full flex justify-center items-center text-white top-0 search-navigator" style="box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);" :to="{ path: `/users/${edge.node.username}`, params: { username: 'edge.node.username' } }">
                            <i class="fas fa-chevron-right"></i>
                        </g-link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>


<page-query>
  query {
    Users:allUsers {
      edges {
        node {
          firstName, lastName, currentRole, currentCompany, bio, id, name, isVerified, username
        }
      }
    }
}
</page-query>

<script>
import * as JsSearch from 'js-search'; 
import CategoryRadio from "~/components/CategoryRadio";

export default {
    name: 'search',
    components: {
        CategoryRadio
    },
    mounted(){
        const searchTerm = this.$route.query.q;
        this.filterUsersBySearch(searchTerm);
    },
    data(){
        return {
            categories: ['All', 'Designers', 'Developers', 'Product Managers'],
            query: this.$route.query.q || '',
            currentCategory: '',
            users: [],
            searchHandler: null,
        }
    },
    methods: {
        handleSearch(evt) {
            this.query = evt.target.value;
            this.$router.push({ path: this.$route.path, query: {
                q: evt.target.value
            } })
        },
        filterUsersByCategory() {
            // add a category field to the data
        },
        filterUsersBySearch(query) {
            const users = this.$page.Users.edges || [];
            if(!query) {
                return this.users = users;
            }

            if(!this.searchHandler) {
                const search = this.setupSearch(users, ['firstName', 'lastName', 'location', 'currentRole', 'currentCompany'], 'id')
                const filteredUsers = search.search(query);
                return this.users = filteredUsers;
            }
            const filteredUsers = this.searchHandler.search(query);
            return this.users = filteredUsers;
        },
        setupSearch(documents = [], indexes = [], uniqueField) {
            const search = new JsSearch.Search(['node', uniqueField]);
            // remove this strategy for more relevant results
            search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
            indexes.forEach(indexTerm => {
                search.addIndex(['node', indexTerm]);
            })
            search.addDocuments(documents);
            this.searchHandler = search;
            return search;
        }
    },
    watch: {
        '$route.query.q': function(val) {
            this.filterUsersBySearch(val)
        },
        'currentCategory': function (val) {
            const self = this
            this.$refs[`checkbox-${this.categories.indexOf(val)}`].checkedState = true
            this.categories.filter(x => x !== val).map(x => {
                self.$refs[`checkbox-${self.categories.indexOf(x)}`].checkedState = false
            })
            this.$forceUpdate()
        }
    }
}
</script>

<style>
.search-results{
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.05);
}

.search-navigator{
    top: calc(50% - 25px);
    right: -20px;
}

.results {
    max-height: calc(100vh - 30rem)
}
</style>