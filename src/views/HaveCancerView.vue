<template>
  <div class="grid grid-cols-7 h-fit min-h-screen pt-14">
    <div class="col-span-7 md:col-span-5 space-y-7 pb-7">
      <div class="aspect-video">
        <img
          :src="Background"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div class="px-5 space-y-7 text-surface-700">
        <h1 class="text-center text-3xl sm:text-4xl font-bold text-primary-500">
          การดูแลตัวเองเมื่อเป็นโรคมะเร็ง ?
        </h1>
        <p>
          เมื่อป่วยเป็นมะเร็งผู้ป่วยมักวิตกกังวลและสงสัยว่าต้องดูแลตัวเองอย่างไร
          ซึ่งการใช้ชีวิตนั้นไม่ได้ยุ่งยากซับซ้อนหรือต่างไปจากเดิมมากนัก
          แต่สิ่งสำคัญคือความเข้าใจ ความตั้งใจ ความใส่ใจ และไม่ต้องกังวลใจ
          เพื่อให้ผลการรักษาเป็นไปอย่างมีประสิทธิภาพและใช้ชีวิตได้อย่างมีความสุข
        </p>
        <h2 class="text-xl sm:text-2xl font-semibold text-primary-500">
          6 วิธีการดูแลตัวเองดังต่อไปนี้ คือสิ่งที่ควรรู้เมื่อเป็นมะเร็ง
        </h2>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content1"
              class="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            1) ทานอาหารใหม่ สด สะอาด
          </h3>
          <p>
            เลี่ยงของดิบ ของหมักดอง สามารถรับประทานอาหารที่มีน้ำตาลได้
            แต่รักษาระดับให้พอดี และควรทานโปรตีนคุณภาพดีอย่างไข่ขาว เนื้อไก่
            เนื้อปลา หรือจะเลี่ยงมารับประทานเต้าหู้แทนได้เช่นกัน
            นอกจากนี้สามารถรับประทานอาหารทะเลได้ด้วย
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content2"
              class="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            2) รักษาน้ำหนักให้ดี
          </h3>
          <p>
            อย่าปล่อยให้น้ำหนักลด
            โดยเฉพาะตอนที่รักษาโรคมะเร็งด้วยเคมีบำบัดหรือการฉายรังสี
            เพราะหากน้ำหนักลดจะส่งผลให้ประสิทธิภาพในการรักษาลดลง
            การรักษาน้ำหนักให้อยู่ในเกณฑ์ที่เหมาะสมจึงมีความสำคัญมาก
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content3"
              class="h-full w-full object-cover object-top rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            3) ระวังอย่าปล่อยให้ท้องผูก
          </h3>
          <p>
            เพราะหากท้องผูกจะส่งผลให้ผู้ป่วยมะเร็งกินไม่ได้ น้ำหนักลด คลื่นไส้
            อาเจียน ท้องอืด ส่งผลกระทบต่อประสิทธิภาพการรักษาค่อนข้างมาก
            ดังนั้นผู้ป่วยมะเร็งจึงควรรับประทานผักผลไม้ ดื่มน้ำให้มาก
            เพื่อป้องกันท้องผูก แต่หากดูแลตนเองแล้วยังท้องผูก
            สามารถรับประทานยาระบายช่วยได้
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content4"
              class="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            4) ออกกำลังกายหรือทำงานเท่าที่ไหว
          </h3>
          <p>
            หลายคนที่ป่วยเป็นมะเร็งคิดว่าจะต้องนอนพักผ่อนเพียงอย่างเดียว
            ทั้งที่ความจริงแล้วนอกจากการพักผ่อน มีผลการศึกษาระบุว่า
            ผู้ป่วยมะเร็งที่ทำงานระหว่างการรักษามะเร็งมีผลการรักษาที่ดีกว่าผู้ป่วยมะเร็งที่นอนพักรักษาตัวเพียงอย่างเดียว
            ดังนั้นหากสามารถทำงาน เคลื่อนไหวร่างกาย
            ออกกำลังกายได้หลังทำการรักษาก็ควรทำ
            เพราะนอกจากช่วยผ่อนคลายกล้ามเนื้อ ลดอาการปวดตึงข้อ
            ยังช่วยให้ร่างกายและจิตใจแข็งแรง
            เว้นแต่ในกรณีที่มีการรักษาด้วยการทำเคมีบำบัดบางชนิดที่อาจทำให้เหนื่อยและจำเป็นต้องนอนพักนานเป็นสัปดาห์
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content5"
              class="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            5) พักผ่อนให้เพียงพอและถูกต้อง
          </h3>
          <p>
            นั่นคือไม่ได้นอนหลับทั้งวัน แต่เป็นการนอนตามนาฬิกาชีวิต (Biological
            Clock) ซึ่งเวลาในการนอนของแต่ละคนจะไม่เท่ากัน ควรนอนก่อน 5
            ทุ่มจะดีที่สุด และควรนอนให้ได้ 8 – 9 ชั่วโมง
            สังเกตได้จากเมื่อตื่นนอนต้องไม่มีอาการอ่อนเพลียและไม่ควรมีอาการอ่อนเพลียระหว่างวัน
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content6"
              class="h-full w-full object-cover object-center rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            6) ดูแลจิตใจให้ดี
          </h3>
          <p>
            นอกจากคิดดีทำดีแล้ว การระวังเรื่องความเครียดคือสิ่งสำคัญ
            เพราะความเครียดทำให้มะเร็งลุกลามได้
            เมื่อฮอร์โมนความเครียดหลั่งจะทำให้มะเร็งโตขึ้น มะเร็งดื้อยามากขึ้น
            มะเร็งกระจายตัวมากขึ้น ดังนั้นเมื่อความเครียดไม่ได้ช่วยอะไรให้ดีขึ้น
            ผู้ป่วยมะเร็งควรทำใจให้สบายและมีความสุขในทุกวัน
            ซึ่งเป็นเรื่องเดียวที่ต้องทำด้วยตัวคุณเอง
          </p>
        </div>
        <div class="flex gap-2">
          <p>แหล่งที่มา : </p>
          <a href="https://www.wattanosothcancerhospital.com/all-about-cancer/dont-be-afraid-of-cancer" target="_blank" class="text-primary-500">Wattanosoth Cancer Hospital</a>
        </div>
      </div>
    </div>
    <div class="h-full p-5 w-full col-span-7 md:col-span-2">
      <BaseCarousel />
    </div>
  </div>
</template>

<script setup>
import Background from "@/assets/imgs/health-care.jpeg";
import Content1 from "@/assets/imgs/eat-food.jpeg";
import Content2 from "@/assets/imgs/exercise.jpeg";
import Content3 from "@/assets/imgs/stomach-ache.jpeg";
import Content4 from "@/assets/imgs/working-hard.webp";
import Content5 from "@/assets/imgs/sleeping.png";
import Content6 from "@/assets/imgs/meditate.jpeg";

import BaseCarousel from "@/components/BaseCarousel.vue";
</script>

<style scoped></style>
