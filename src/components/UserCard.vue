<template>
  <div class="card w-full md:w-1/3 lg:w-1/4 my-4 mx-2 bg-white flex flex-col rounded-sm">
    <div class="flex w-full justify-between px-8 py-4">
        <g-image class="avatar w-1/4" alt="User Avatar" :src="userProfile" />
        <div class="user-attribute ml-2 w-3/4">
            <h5>{{ user.name }}</h5>
            <span>{{ user.location }} </span>
        </div>
    </div>
    <div class="text-lg flex my-2 px-8 flex-col">
        <h4>{{ user.currentRole }} </h4>
        <h4>{{ user.currentCompany }} </h4>
    </div>

    <div class="px-8 my-2 text-xs text-gray-600">
        <span>{{ user.bio }}</span>
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