<template>
    <span class="relative">
        <svg fill="none" class="flex items-center justify-center h-auto w-auto mr-1 mt-1">
            <g filter="url(#prefix__filter0_d)">
                <path d="M4.5 4L8 8l7.5-7" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="prefix__filter0_d" x="0" y="0.5" width="20" height="16" filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
        </svg>
    </span>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    span {
        @apply flex flex-grow rounded-full bg-blue-500 justify-center items-center h-full relative;

        &>svg {
            height: auto;
            width: auto;
            max-height: 1rem;
            max-width: 1rem;
        }
    }
</style>