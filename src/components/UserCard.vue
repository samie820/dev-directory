<template>
    <div class="p-8 relative">
        <div class="card-header flex flex-row items-center relative">
            <div class="relative">
                <avatar-image :image-url="userProfile" :is-verified="user.isVerified"></avatar-image>
            </div>
            <div class="bio flex-col flex ml-4">
                <span class="text-gray-600 text-base">{{user.firsName}}</span>
                <span class="text-gray-600 text-base">{{user.lastName}}</span>
                <span class="text-xs text-black location">{{user.location}}</span>
            </div>
        </div>
        <div class="card-content flex flex-col my-4">
            <div class="text-lg flex flex-col">
                <h4>{{user.currentRole}}</h4>
                <a class="underline" href="#">{{user.currentCompany}}</a>
             </div>
             <p class="text-gray-500 text-base mt-3 mb-6">{{user.bio}}</p>
        </div>
        <div class="card-footer absolute w-1/3 bg-black bottom-0 right-0 rounded-br flex">
            <g-link class="text-white capitalize text-sm font-light flex-grow text-center py-4" :to="{ path: `/users/${user.username}`, params: { slug: 'slug' } }">View Profile</g-link>
        </div>
    </div>
</template>

<script>
    import AvatarImage from "./AvatarImage"
    import { slugify } from '@/utils/generateSlug'
    export default {
        name: "UserCard",
        components: {
            AvatarImage
        },
         props: {
            user: {
                type: Object,
                required: true
            }
        },
        computed: {
            userProfile(){
                return this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${this.user.firstName}&background=000000&color=fff&size=256&bold=true`
            }
        }
    }
</script>

<style lang="scss">

.user-card{
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
    background-color: white;
    border-radius: 4px;
}
</style>