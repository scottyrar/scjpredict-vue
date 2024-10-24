<template>
  <Transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
    mode="out-in"
  >
    <div
      v-if="model"
      class="fixed top-0 left-0 w-screen flex justify-center items-center h-screen bg-black/70 z-40"
    >
      <div class="flex flex-col items-center gap-5 p-10">
        <GroupLogoIcon :isLoading="true" class="text-primary-500"/>
        <div class="flex sm:text-2xl gap-2 text-white font-medium">
          <p>กำลังประมวลผลโปรดรอซักครู่</p>
          <p class="loading1 self-end">.</p>
          <p class="loading2 self-end">.</p>
          <p class="loading3 self-end">.</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import GroupLogoIcon from '@/components/icons/GroupLogoIcon.vue';

const model = defineModel()
</script>

<style lang="scss" scoped>
.loading-animation {
  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
}
.loading1 {
  animation: bounce 1s infinite 0.25s alternate;
}

.loading2 {
  animation: bounce 1s infinite 0.5s alternate;
}

.loading3 {
  animation: bounce 1s infinite 0.75s alternate;
}
</style>
