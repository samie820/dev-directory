<template>
    <header class="header container px-8">
        <nav class="flex items-center justify-between flex-wrap py-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <g-image alt="Tech Directory Icon" src="~/assets/images/Logo.svg" />
            </div>
            <div class="flex lg:hidden flex-row items-center justify-center">
                <button class="mr-8 focus:outline-none">
                    <g-image alt="Search Icon" src="~/assets/images/Search.svg" />
                </button>
                
                <button
                    class="flex items-center px-3 py-2 border rounded text-back-200 border-black hover:text-gray-400 hover:border-gray-400">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div class="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto ml-0 lg:ml-10">
                <div class="text-sm lg:flex-grow">
                    <g-link href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-black transition-color duration-200 ease-in text-gray-500 mr-8">
                        Designers
                    </g-link>
                    <g-link href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-black transition-color duration-200 ease-in text-gray-500 mr-8">
                        Developers
                    </g-link>
                    <g-link href="#responsive-header"
                        class="block mt-4 lg:inline-block lg:mt-0 hover:text-black transition-color duration-200 ease-in text-gray-500">
                        Product Managers
                    </g-link>
                </div>
                <div class="text-sm flex items-center">
                    <button>
                        <g-image class="h-17 w-17 mt-4 block lg:mt-0" alt="Search Icon"
                            src="~/assets/images/Search.svg" />
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>