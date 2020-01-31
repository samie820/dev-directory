<template>
    <div class="p-8 relative">
        <div class="card-header flex flex-row items-center relative">
            <div class="relative">
                <g-image :src="userProfile" alt="" class="avatar" />
                <span class="h-6 w-6 absolute verified">
                    <verified-badge v-if="user.isVerified"></verified-badge>
                </span>
            </div>
            <div class="bio flex-col flex ml-4">
                <span class="text-gray-600 text-base">{{userFirstName}}</span>
                <span class="text-gray-600 text-base">{{userMiddleName + " " + userLastName}}</span>
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
            <g-link class="text-white capitalize text-sm font-light flex-grow text-center py-4" :to="{ path: `/users/${slug}`, params: { slug: 'slug' } }">View Profile</g-link>
        </div>
    </div>
</template>

<script>
    import VerifiedBadge from "./VerifiedBadge"
    import { slugify } from '@/utils/generateSlug'
    export default {
        name: "UserCard",
        components: {
            VerifiedBadge
        },
         props: {
            user: {
                type: Object,
                required: true
            }
        },
        computed: {
            slug(){
                return slugify(this.user.name)
            },
            userProfile(){
                return this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${this.user.name}&background=000000&color=fff&size=256&bold=true`
            },
            userFirstName(){
                return this.user.name.split(" ")[0]
            },
            userMiddleName(){
                if (this.user.name.split(" ").length > 2) {
                    return this.user.name.split(" ")[1]
                }
                return ""
            },
            userLastName(){
                if (this.user.name.split(" ").length >= 2) {
                    return this.user.name.split(" ")[this.user.name.split(" ").length - 1]
                }
                return ""
            }
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

.verified{
    right: 0px;
    top: 35px;
}

</style>