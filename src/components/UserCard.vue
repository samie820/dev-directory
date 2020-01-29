<template>
  <div class="card w-full md:w-1/3 lg:w-1/4 mt-4 mx-2 bg-white flex flex-col rounded-sm justify-between">
    <div class="flex w-full justify-between px-6 py-4">
        <g-image class="avatar w-1/4" alt="User Avatar" :src="userProfile" />
        <div class="user-attribute ml-2 w-3/4">
            <h5>{{ user.name }}</h5>
            <span>{{ user.location }} </span>
        </div>
    </div>
    <div class="text-lg flex my-2 px-6 flex-col">
        <h4>{{ user.currentRole }} </h4>
        <h4>{{ user.currentCompany }} </h4>
    </div>

    <div class="px-6 my-2 text-xs text-gray-600">
        <span>{{ user.bio }}</span>
    </div>

    <div class="flex w-full justify-end">
        <button class="text-xs bg-black right-0 bottom-0 hover:bg-white text-white hover:text-black font-bold py-2 px-4">
            <g-link :to="`/users/${user.id}`">View Profile</g-link>
        </button>
    </div>
  </div>
</template>

<script>
export default {
 props: {
     user: {
         type: Object,
         required: true
     }
 },
 computed: {
     userProfile(){
         return this.user.avatar ? this.user.avatar : `https://ui-avatars.com/api/?name=${this.user.name}&background=000000&color=fff&size=256&bold=true&rounded=true`
     }
 }
}
</script>

<style lang='scss'>
    .card {
        height: 300px; 
    }
    .avatar {
        width: 56px;
        height: 56px;
    }
    .user-attribute{
        h5 {
            font-size: 14px;
            color: #828282;
        }
        span{
            font-size: 10px;
        }
    }
</style>