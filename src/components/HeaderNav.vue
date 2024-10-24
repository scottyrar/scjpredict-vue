<template>
  <div class="fixed top-0 w-full z-40 font-medium">
    <div
      class="sticky flex justify-between items-center gap-3 px-4 py-2 sm:py-4 text-surface-900 bg-white shadow-lg z-30 transition-all duration-300"
      :class="{
        'sm:bg-opacity-0 sm:shadow-none sm:text-white':
          !shouldShowNav && route.name === 'home',
      }"
    >
      <div class="flex gap-1 items-center">
        <GroupLogoIcon class="text-primary-400" />
        <RouterLink to="/">SCJ Predict</RouterLink>
      </div>
      <div
        class="hidden sm:flex gap-[10px] md:gap-3 lg:gap-6 text-xs md:text-sm lg:text-base items-center"
      >
        <RouterLink
          to="/what-is-cancer"
          :class="{ 'text-primary-400': route.name === 'whatcancer' }"
          >ความรู้โรคมะเร็งเต้านม</RouterLink
        >
        <RouterLink
          to="/prevent-cancer"
          :class="{ 'text-primary-400': route.name === 'preventcancer' }"
          >ลดความเสี่ยงมะเร็งเต้านม</RouterLink
        >
        <RouterLink
          to="/have-cancer"
          :class="{ 'text-primary-400': route.name === 'havecancer' }"
          >ดูแลตัวเองเมื่อเป็นมะเร็ง</RouterLink
        >
        <RouterLink
          to="/predict-cancer"
          :class="{ 'text-primary-400': route.name === 'predictcancer' }"
          >แบบประเมิน</RouterLink
        >
      </div>
      <button
        @click="toggleMenu = !toggleMenu"
        class="w-10 h-10 rounded-md border border-surface-100 sm:hidden"
      >
        <Transition
          enter-active-class="animate__animated animate__rotateIn animate__faster"
        >
          <i v-if="toggleMenu" class="pi pi-times"></i>
          <i v-else class="pi pi-bars"></i>
        </Transition>
      </button>
    </div>
    <Transition
      enter-active-class="animate__animated animate__slideInDown animate__faster"
      leave-active-class="animate__animated animate__slideOutUp animate__faster"
      mode="out-in"
    >
      <div
        v-if="toggleMenu"
        class="z-20 h-fit bg-white border-t-0 border border-surface-100 flex flex-col rounded-b-xl pb-3 md:hidden"
      >
        <RouterLink
          to="/what-is-cancer"
          :class="{
            'text-primary-400 bg-primary-50': route.name === 'whatcancer',
          }"
        >
          <div class="flex gap-4 items-center">
            <div
              class="h-12 w-2 rounded-r-xl"
              :class="{ 'bg-primary-400': route.name === 'whatcancer' }"
            ></div>
            <p>ความรู้โรคมะเร็งเต้านม</p>
          </div>
        </RouterLink>
        <RouterLink
          to="/prevent-cancer"
          :class="{
            'text-primary-400 bg-primary-50': route.name === 'preventcancer',
          }"
        >
          <div class="flex gap-4 items-center">
            <div
              class="h-12 w-2 rounded-r-xl"
              :class="{ 'bg-primary-400': route.name === 'preventcancer' }"
            ></div>
            <p>ลดความเสี่ยงมะเร็งเต้านม</p>
          </div>
        </RouterLink>
        <RouterLink
          to="/have-cancer"
          :class="{
            'text-primary-400 bg-primary-50': route.name === 'havecancer',
          }"
        >
          <div class="flex gap-4 items-center">
            <div
              class="h-12 w-2 rounded-r-xl"
              :class="{ 'bg-primary-400': route.name === 'havecancer' }"
            ></div>
            <p>ดูแลตัวเองเมื่อเป็นมะเร็ง</p>
          </div>
        </RouterLink>
        <RouterLink
          to="/predict-cancer"
          :class="{
            'text-primary-400 bg-primary-50': route.name === 'predictcancer',
          }"
        >
          <div class="flex gap-4 items-center">
            <div
              class="h-12 w-2 rounded-r-xl"
              :class="{ 'bg-primary-400': route.name === 'predictcancer' }"
            ></div>
            <p>แบบประเมิน</p>
          </div>
        </RouterLink>
      </div>
    </Transition>
  </div>
  <Transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
    mode="out-in"
  >
    <div
      class="fixed inset-0 z-10 bg-black/25 font-medium"
      @click="toggleMenu = false"
      v-show="toggleMenu"
    ></div>
  </Transition>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import GroupLogoIcon from "@/components/icons/GroupLogoIcon.vue";

const route = useRoute();
const router = useRouter();
const toggleMenu = ref(false);

const shouldShowNav = ref(false);

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  shouldShowNav.value = scrollTop > 0;
};

router.afterEach(() => {
  toggleMenu.value = false;
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped></style>
