<template>
    <div class="flex flex-col flex-grow work">
        <div class="bg-white work-image p-10 w-full relative">
            <g-image :src="workImg" :class="['h-full w-full', {'opacity-25 mx-auto p-10 object-contain': !work.projectImageUrl }, {'object-cover': work.projectImageUrl}]"></g-image>
            <div class="absolute inset-5 opacity-0 transition-all duration-200 hover:opacity-75 bg-gray-800 flex justify-center items-center z-10 rounded">
                <p class="text-white text-4xl font-bold uppercase">{{work.projectTitle}}</p>
            </div>
        </div>
        <div class="my-16 pl-10 border-l-8 rounded-md border-gray-500 w-full py-4" v-if="work.projectDescription || work.projectLink">
            <p class="mb-8" v-if="work.projectDescription">
                {{work.projectDescription}}
            </p>
            <a :href="work.projectLink" target="__blank" class="text-blue-500" v-if="work.projectLink">
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
        mounted() {
        },
        props: {
            work: {
                type: Object,
                required: true
            }
        },
        computed: {
            workImg() {
                return this.work.projectImageUrl ? this.work.projectImageUrl : require("../assets/images/placeholder.svg")
            }
        }
    }
</script>

<style lang="scss">
    .work-image{
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    height: 300px;
    position: relative;

    &>img {
        height: 100% !important;
    }
}
</style>