<template>
  <div class="font-anuphan">
    <HeaderNav />
    <div>
      <RouterView />
    </div>
    <div
      class="flex flex-col items-center bg-surface-700 py-10 p-5 gap-5 text-white"
    >
      <p class="cursor-pointer" @click="toggle = !toggle">©2024 SCJ Co., Ltd</p>
      <div class="text-primary-400 flex max-sm:flex-col items-center gap-5">
        <RouterLink to="/what-is-cancer">ความรู้โรคมะเร็งเต้านม</RouterLink>
        <RouterLink to="/prevent-cancer">ลดความเสี่ยงมะเร็งเต้านม</RouterLink>
        <RouterLink to="/have-cancer">ดูแลตัวเองเมื่อเป็นมะเร็ง</RouterLink>
        <RouterLink to="/predict-cancer">แบบประเมิน</RouterLink>
      </div>
      <div class="flex items-center gap-5">
        <a href="https://www.facebook.com/it.cpc.rmutto" target="_blank">
          <i
            class="pi pi-facebook p-2 border rounded-full hover:text-surface-300 hover:border-surface-300"
          ></i>
        </a>
        <a href="https://cpc.rmutto.ac.th" target="_blank">
          <i
            class="pi pi-server p-2 border rounded-full cursor-pointer hover:text-surface-300 hover:border-surface-300"
          ></i>
        </a>
        <a href="https://maps.app.goo.gl/E7UNHFbGVU2bufz36" target="_blank">
          <i
            class="pi pi-map-marker p-2 border rounded-full cursor-pointer hover:text-surface-300 hover:border-surface-300"
          ></i>
        </a>
      </div>
      <p class="text-center text-surface-100 p-5">
        <span class="font-medium">Note:</span>
        เว็บไซต์นี้เป็นส่วนหนึ่งในโครงงานรายวิชา Data Science and Big Data
        Analytics (วิทยาการข้อมูลและการวิเคราะห์ข้อมูลมหัต) รหัสวิชา 0406320-2
        ของ<br class="max-[1055px]:hidden" />มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก
        วิทยาเขต จักรพงษภูวนารถ สาขา เทคโนโลยีสารสนเทศ
        ทางคณะผู้จัดทำไม่มีความประสงค์ที่จะใช้ในเชิงพาณิชย์
      </p>
    </div>
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import { ref, watch } from "vue";

const toggle = ref(false);
</script>

<style></style>
