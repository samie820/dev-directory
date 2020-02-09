<template>
    <div class="flex flex-col flex-grow work">
        <div class="bg-white work-image p-10 w-full relative">
            <g-image :src="work.imageUrl" class="object-cover h-full"></g-image>
        </div>
        <div class="my-16 pl-10 border-l-8 rounded-md border-gray-500 w-full py-5">
            <p class="mb-10">
                {{work.description}}
            </p>
            <a :href="work.link" target="_blank" class="text-blue-500">
                View Project
                <span class="mx-4">
                    <i class="fas fa-arrow-right"></i>
                </span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'WorkCard',
        props: {
            work: {
                type: Object,
                required: true
            }
        },
        computed: {

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