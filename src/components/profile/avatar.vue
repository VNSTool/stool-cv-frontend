<template>
  <div class="flex flex-row sm:flex-col items-center">
    <div
      class="overflow-hidden min-w-35 sm:min-w-42 flex border-2 border-white dark:border-grey-700 rounded-full bg-no-repeat bg-cover"
    >
      <NuxtPicture
        src="https://static.stool.vn/images/curriculum-vitae/avatar.jpeg"
        class="w-35 sm:w-42 h-35 sm:h-42"
        fit="cover"
      />
    </div>
    <ProfileBio class="flex lg:hidden ml-5 sm:ml-0 sm:mt-5" />
  </div>
</template>
