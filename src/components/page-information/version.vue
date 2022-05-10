<template>
  <div class="h-fit flex flex-row items-center">
    <div class="text-xl leading-6 font-light text-black-900 dark:text-grey-700">
      Version
    </div>
    <div
      class="ml-2 py-1 px-3 rounded-full bg-ghost-200 dark:bg-black text-xl leading-6 font-normal text-black-900 dark:text-grey-700"
    >
      {{ $config.version }}
    </div>
  </div>
</template>
