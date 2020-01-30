<template>
    <div class="p-8">
        <div class="card-header flex flex-row items-center relative">
            <div class="relative">
                <img src="" alt="" class="avatar">
                <span class="h-12 w-12 absolute">
                    <verified-badge></verified-badge>
                </span>
            </div>
            <div class="bio flex-col flex ml-4">
                <span class="text-gray-600 text-base">Nelson</span>
                <span class="text-gray-600 text-base">Nelson-Atuonwu</span>
                <span class="text-xs text-black location">Lagos, Nigeria</span>
            </div>
        </div>
    </div>
</template>

<script>
    import VerifiedBadge from "./VerifiedBadge"

    export default {
        name: "UserCard",
        components: {
            VerifiedBadge
        }
    }
</script>

<style lang="scss">
.avatar {
    width: 50px;
    height: 50px;
    background-image: url("../assets/images/Sample.jpg");
    background-position: center;
    background-size: cover;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 4px;
    border: solid 1px black;
}

.user-card{
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
    border-radius: 4px;
}

</style>