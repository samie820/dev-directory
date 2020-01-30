<template>
    <div class="p-8 relative">
        <div class="card-header flex flex-row items-center relative">
            <div class="relative">
                <img src="" alt="" class="avatar">
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
            <a href="#" class="text-white capitalize text-sm font-light flex-grow text-center py-4">view profile</a>
        </div>
    </div>
</template>

<script>
    import VerifiedBadge from "./VerifiedBadge"

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
            userProfile(){
                return this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${this.user.name}&background=000000&color=fff&size=256&bold=true&rounded=true`
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

//   <div class="card w-full md:w-1/3 lg:w-1/4 mt-4 mx-2 bg-white flex flex-col rounded-sm justify-between">
//     <div class="flex w-full justify-between px-6 py-4">
//         <g-image class="avatar w-1/4" alt="User Avatar" :src="userProfile" />
//         <div class="user-attribute ml-2 w-3/4">
//             <h5>{{ user.name }}</h5>
//             <span>{{ user.location }} </span>
//         </div>
//     </div>
//     <div class="text-lg flex my-2 px-6 flex-col">
//         <h4>{{ user.currentRole }} </h4>
//         <h4>{{ user.currentCompany }} </h4>
//     </div>

//     <div class="px-6 my-2 text-xs text-gray-600">
//         <span>{{ user.bio }}</span>
//     </div>

//     <div class="flex w-full justify-end">
//         <button class="text-xs bg-black right-0 bottom-0 hover:bg-white text-white hover:text-black font-bold py-2 px-4">
//             <g-link :to="`/users/${user.id}`">View Profile</g-link>
//         </button>
//     </div>
//   </div>
// </template>


// <style lang='scss'>
//     .card {
//         height: 300px;
//     }
//     .avatar {
//         width: 56px;
//         height: 56px;
//     }
//     .user-attribute{
//         h5 {
//             font-size: 14px;
//             color: #828282;
//         }
//         span{
//             font-size: 10px;
//         }
//     }
// </style>