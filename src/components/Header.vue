<template>
    <header class="header w-full sm:container mx-auto px-8">
        <nav class="flex items-center justify-between flex-wrap py-6">
            <g-link :to="{ path: `/` }" class="flex items-center flex-shrink-0 text-white mr-6">
                <g-image alt="Tech Directory Icon" src="~/assets/images/Logo.svg" />
            </g-link>
            <div class="flex lg:hidden flex-row items-center justify-center">
                <g-link class="mr-8 focus:outline-none" :to="{ path: `/users/search` }">
                    <g-image alt="Search Icon" src="~/assets/images/Search.svg" />
                </g-link>
                
                <button
                    class="flex items-center px-3 py-2 border rounded text-back-200 border-black hover:text-gray-400 hover:border-gray-400" @click="e => isShown = !isShown">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div :class="['w-full transform origin-top flex-grow lg:flex lg:items-center lg:w-auto ml-0 lg:ml-10 mt-6 lg:mt-0 transition-all duration-200 ease-linear', {'scale-y-100 h-auto': isShown}, {'scale-y-0 h-0': !isShown}]">
                <div class="text-sm lg:flex-grow">
                    <g-link :to="{path: '/users/search', query: {category: 'designers'}}"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-black transition-color duration-200 ease-in text-gray-500 mr-8">
                        Designers
                    </g-link>
                    <g-link :to="{path: '/users/search', query: {category: 'developers'}}"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-black transition-color duration-200 ease-in text-gray-500 mr-8">
                        Developers
                    </g-link>
                    <g-link :to="{path: '/users/search', query: {category: 'product managers'}}"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-black transition-color duration-200 ease-in text-gray-500">
                        Product Managers
                    </g-link>
                </div>
                <div class="text-sm items-center hidden lg:flex">
                    <g-link :to="{ path: '/users/search' }">
                        <g-image class="h-17 w-17 mt-4 block lg:mt-0" alt="Search Icon"
                            src="~/assets/images/Search.svg" />
                    </g-link>
                    <a href="https://github.com/samie820/dev-directory" target="__blank" class="ml-6">
                        <i class="fab fa-github text-lg" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        mounted(){
            const self = this
            if (window.innerWidth < 769) {
                this.isShown = false
            } else {
                this.isShown = true
            }

            window.onresize = e => {
                self.pageWidth = e.target.innerWidth
            }
        },
        data:() => ({
            pageWidth: 0,
            isShown: false
        }),
        watch: {
            pageWidth(val){
                if (val < 769){
                    this.isShown = false
                } else {
                    this.isShown = true
                }
            }
        }
    }
</script>