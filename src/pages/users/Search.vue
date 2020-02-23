<template>
    <Layout classes="flex pb-10 min-h-full overflow-hidden">
        <div class="min-h-full grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            <div class="flex flex-col flex-grow relative lg:justify-center w-full items-start">
                <input type="text" placeholder="Begin your search here..." class="focus:outline-none border-0 text-3xl">

                <div class="options gap-6 grid-cols-4 lg:grid-cols-3 mt-10 lg:mt-20 grid w-full">
                    <category-radio v-for="(category, index) in categories"
                    :key="index" name="category" :value="category" @input="$data => currentCategory = $data"
                    :classes="index == 0 || index == 3 ? 'lg:col-span-2' : ''" :ref="`checkbox-${index}`"></category-radio>
                </div>
            </div>
            <div class="bg-gray-200 col-span-2 flex flex-grow flex-col rounded-md search-results p-10 lg:p-16 overflow-y-auto">

                <!-- SORT BETWEEN GRID AND LISTS -->
                <!-- <div class="w-1/4 md:w-1/6 lg:w-1/12 flex flex-row justify-between ml-auto mb-16">
                    <i class="fas fa-list text-2xl"></i>
                    <i class="fas fa-th text-2xl"></i>
                </div> -->
                <div class="results grid-cols-2 md:grid-cols-3 grid gap-10 row-gap-10">
                    <div class="search-result relative" v-for="item in [1,2,3,4,5,6,7,8,9]" :key="item">
                        <div class="bg-white p-6 text-black" style="box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);">
                            <h2 class="text-xl text-gray-500">Nelson</h2>
                            <h2 class="text-xl text-gray-500">Nelson-Atuonwu</h2>
                            <span class="text-sm">Lagos, Nigeria</span>
                            <h2 class="text-lg mt-6">Software Engineer</h2>
                            <h2 class="text-lg underline">Interswitch</h2>
                        </div>
                        <g-link to="/" class="absolute h-12 w-12 bg-black rounded-full flex justify-center items-center text-white top-0 search-navigator" style="box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);">
                            <i class="fas fa-chevron-right"></i>
                        </g-link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import CategoryRadio from "~/components/CategoryRadio"

export default {
    name: 'search',
    components: {
        CategoryRadio
    },
    data(){
        return {
            categories: ['All', 'Designers', 'Developers', 'Product Managers'],
            query: '',
            currentCategory: ''
        }
    },
    watch: {
        '$route.query.q': function (query) {

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