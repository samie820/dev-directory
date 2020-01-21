<template>
    <header class="header">
        <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <g-image alt="Tech Directory Icon" src="~/assets/images/Subtract.svg" />
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-back-200 border-black hover:text-gray-400 hover:border-gray-400">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            <g-link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                Designers
            </g-link>
            <g-link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
                Developers
            </g-link>
            <g-link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500">
                Product Managers
            </g-link>
            </div>
            <div class="text-sm flex items-center">
            <g-image class="h-17 w-17 mt-4 block lg:mt-0" alt="Search Icon" src="~/assets/images/Search.svg" />
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