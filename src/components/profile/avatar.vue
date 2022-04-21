<template>
  <div class="flex flex-row sm:flex-col items-center">
    <div class="avatar flex w-35 sm:w-42 h-35 sm:h-42 border-2 border-white dark:border-grey-700 rounded-full bg-no-repeat bg-cover">
    </div>
    <ProfileBio class="flex lg:hidden ml-5 sm:ml-0 sm:mt-5" />
  </div>
</template>

<style lang="scss" scoped>
  .avatar {
    background-image: url('~/assets/images/avatar.jpeg');
  }
</style>
