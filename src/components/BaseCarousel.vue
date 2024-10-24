<template>
    <div class="md:sticky md:top-[84px] space-y-3">
      <p class="text-base md:text-lg">บทความที่เกี่ยวข้อง</p>
        <Carousel
          :value="blogs"
          :numVisible="1"
          :numScroll="1"
          orientation="vertical"
          verticalViewPortHeight="330px"
          contentClass="flex items-center"
          circular
          :autoplayInterval="3000"
          class="hidden md:block"
        >
          <template #item="slotProps">
            <div class="border border-surface-200 rounded-md p-3 h-fit">
              <div class="mb-3">
                <div class="relative mx-auto aspect-video">
                  <img
                    :src="slotProps.data.image"
                    :alt="slotProps.data.name"
                    class="w-full h-full rounded-md object-cover object-center"
                  />
                </div>
              </div>
              <div class="mb-3 text-lg font-medium">
                {{ slotProps.data.name }}
              </div>
              <button
                class="flex gap-3 items-center p-2 w-fit bg-primary-300 rounded-md"
                @click="$router.push({ name: slotProps.data.route_name })"
              >
                <p>อ่านต่อ</p>
                <i class="pi pi-arrow-right"></i>
              </button>
            </div>
          </template>
        </Carousel>
        <Carousel
          :value="blogs"
          :numVisible="1"
          :numScroll="1"
          :responsiveOptions="responsiveOptions"
          circular
          :autoplayInterval="3000"
          class="md:hidden"
        >
          <template #item="slotProps">
            <div
              class="border border-surface-200 dark:border-surface-700 rounded-md m-2 p-3"
            >
              <div class="mb-3">
                <div class="relative mx-auto aspect-video">
                  <img
                    :src="slotProps.data.image"
                    :alt="slotProps.data.name"
                    class="w-full h-full rounded-md object-cover object-center"
                  />
                </div>
              </div>
              <div class="mb-3 text-lg font-medium">
                {{ slotProps.data.name }}
              </div>
              <button
                class="flex gap-3 items-center p-2 w-fit bg-primary-300 rounded-md"
                @click="$router.push({ name: slotProps.data.route_name })"
              >
                <p>อ่านต่อ</p>
                <i class="pi pi-arrow-right"></i>
              </button>
            </div>
          </template>
        </Carousel>
    </div>
</template>

<script setup>
import Card1 from "@/assets/imgs/breast-cancer.png";
import Card2 from "@/assets/imgs/prevent-cancer.jpg";
import Card3 from "@/assets/imgs/health-care.jpeg";
import Card4 from "@/assets/imgs/ai-predict.jpg";

import Carousel from "primevue/carousel";

import { ref } from "vue";

const blogs = ref([
  {
    image: Card1,
    name: "ความรู้โรคเกี่ยวกับโรคมะเร็งเต้านม",
    route_name: "whatcancer",
  },
  {
    image: Card2,
    name: "ดูแลตัวเองอย่างไรให้ห่างไกลโรคมะเร็งเต้านม",
    route_name: "preventcancer",
  },
  {
    image: Card3,
    name: "ดูแลตัวเองอย่างไรเมื่อเป็นโรคมะเร็ง",
    route_name: "havecancer",
  },
  {
    image: Card4,
    name: "ทำแบบประเมินความเสี่ยงโรคมะเร็งเต้านม",
    route_name: "predictcancer",
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "639px",
    numVisible: 1,
    numScroll: 1,
  },
]);
</script>

<style lang="scss" scoped>

</style>