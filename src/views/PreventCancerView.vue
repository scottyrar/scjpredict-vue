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
          ดูแลตัวเองอย่างไรให้ห่างไกลโรคมะเร็งเต้านม ?
        </h1>
        <p>
          มะเร็งเต้านมเป็นสาเหตุที่ทำให้ผู้หญิงไทยเสียชีวิตเป็นอันดับต้น ๆ
          และยังคงมีแนวโน้มเพิ่มสูงขึ้นอย่างต่อเนื่อง
          การดูแลตัวเองเพื่อลดความเสี่ยงและป้องกันมะเร็งเต้านมจึงเป็นเรื่องที่ไม่ควรละเลย
        </p>
        <h2 class="text-xl sm:text-2xl font-semibold text-primary-500">
          6 วิธีลดความเสี่ยงและป้องกันมะเร็งเต้านมอย่างเห็นผลสามารถทำได้ดังนี้
        </h2>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content1"
              class="h-full w-full object-cover object-top rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            1) ตรวจเช็กมะเร็งเต้านมทุกปี
          </h3>
          <p>
            การตรวจเต้านมด้วยตัวเอง ทุกเดือนเป็นเรื่องที่ควรใส่ใจ
            เพราะหากคลำเจอก้อนได้เร็วย่อมรักษาได้เร็ว นอกจากนี้ หลังอายุ 35
            ปีขึ้นไปควรตรวจเต้านมกับแพทย์ที่มีความชำนาญเฉพาะทางและตรวจแมมโมแกรม
            เพื่อเช็กความผิดปกติของเนื้อเยื่อเต้านม ทุก 2 – 3 ปี และหลังอายุ 40
            ปีควรตรวจเป็นประจำทุกปี
            แต่ในกรณีที่มีคนในครอบครัวป่วยเป็นมะเร็งเต้านมควรต้องตรวจแมมโมแกรมทุกปีตั้งแต่อายุ
            35 ปี เพราะหากพบเจอความผิดปกติจะได้รับมือให้ทันท่วงที
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content2"
              class="h-full w-full object-cover object-top rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            2) คุมน้ำหนักไม่ให้เกินเกณฑ์
          </h3>
          <p>
            น้ำหนักตัวมีความสัมพันธ์กับมะเร็งเต้านม
            จากข้อมูลขององค์การอนามัยโลกระบุว่า 1 ใน 5 หรือ 1 ใน 3
            ของผู้ป่วยมะเร็งเต้านมมีความสัมพันธ์กับน้ำหนักตัวที่เพิ่มสูงขึ้น
            และข้อมูลจากสมาคมการวิจัยเพื่อการป้องกันโรคมะเร็งประเทศสหรัฐอเมริกา
            (American Institute for Cancer Research – AICR)
            ระบุว่าผู้หญิงวัยหมดประจำเดือน
            เซลล์ไขมันยังคงผลิตและมีการหลั่งฮอร์โมนเข้าไปในกระแสเลือดอยู่ตลอดเวลา
            จึงกระตุ้นให้เกิดมะเร็งเต้านมได้
            ผู้หญิงวัยนี้จึงควรคุมน้ำหนักให้อยู่ในเกณฑ์ที่กำหนด
            เน้นกินโปรตีนที่ดีและลดปริมาณคาร์โบไฮเดรต
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
            3) เลือกกินอาหารที่ดีมีประโยชน์
          </h3>
          <p>
            อาหารจากพืชธรรมชาติ ธัญพืชไม่ขัดสี อาทิ ถั่วเหลือง เมล็ดแฟลกซ์ ฯลฯ
            รวมถึงเนื้อปลาช่วยป้องกันมะเร็งเต้านมได้
            โดยสัดส่วนการรับประทานอาหารที่แนะนำคือ กินผักผลไม้ 2 ใน 3
            จากอาหารมื้อหลัก และกินเนื้อสัตว์เพียง 1 ใน 3 จากอาหารมื้อหลัก
            เพื่อให้อยู่ในระดับการกินอาหารที่พอดี
            นอกจากนี้การดื่มชาเขียวหรือชาดำ
            มีสารแอนตี้ออกซิแดนท์ที่ช่วยป้องกันการเกิดเซลล์ร้ายในร่างกายได้
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
            4) ออกกำลังกายเป็นประจำ
          </h3>
          <p>
            การออกกำลังกายดีต่อสุขภาพและช่วยลดความเสี่ยงในการเกิดโรคมะเร็งลงได้
            เมื่อผู้หญิงอยู่ในวัยหมดประจำเดือน
            การออกกำลังกายเป็นประจำช่วยลดความเสี่ยงมะเร็งเต้านมได้
            โดยไม่ต้องออกกำลังกายแบบหักโหม แต่ออกกำลังกายให้สม่ำเสมอ
            เน้นให้อัตราการเต้นของหัวใจเร็วขึ้น แค่เดินเร็วก็เพียงพอแล้ว
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
            5) ห่างสารพิษเข้าร่างกาย
          </h3>
          <p>
            ไม่ว่าจะเป็นสารพิษจากผักผลไม้ที่ผ่านยาฆ่าแมลงหรือสารพิษจากบุหรี่และเครื่องดื่มแอลกอฮอล์คุณผู้หญิงควรหลีกเลี่ยงทั้งหมดเพราะเพิ่มความเสี่ยงในการเป็นมะเร็งเต้านมได้ควรใส่ใจดูแลตัวเองเลือกรับสิ่งที่ดีต่อร่างกายปรับพฤติกรรมให้ห่างจากสารพิษในร่างกาย
          </p>
        </div>
        <div class="space-y-3">
          <div class="aspect-video">
            <img
              :src="Content6"
              class="h-full w-full object-cover object-top rounded-xl"
            />
          </div>
          <h3 class="text-lg sm:text-xl font-medium text-primary-500">
            6) เสริมวิตามินลดเสี่ยง
          </h3>
          <p>
            อาหารเสริมที่ดีต่อสุขภาพเต้านมของผู้หญิงมีชื่อว่า Calcium D –
            Glucarate จากแคลเซียมและกรดกลูคาริกที่ร่างกายผลิตได้น้อย
            มักพบในพืชกระกูลกะหล่ำ เป็นต้น นอกจากลดความเสี่ยงมะเร็งเต้านม
            ยังช่วยให้ตับขับฮอร์โมนเอสโตรเจนส่วนเกินได้อย่างมีประสิทธิภาพ
            โดยปริมาณที่รับประทานควรเป็นไปตามคำแนะนำของแพทย์เท่านั้น
            นอกจากนี้วิตามินดี วิตามินซี วิตามินรวมสามารถรับประทานเสริมได้
            แต่ควรอยู่ภายใต้คำแนะนำของแพทย์เช่นกัน
          </p>
        </div>
        <div class="flex gap-2">
          <p>แหล่งที่มา :</p>
          <a
            href="https://www.wattanosothcancerhospital.com/all-about-cancer/6-lifestyles-to-reduce-the-risk-of-breast-cancer"
            target="_blank"
            class="text-primary-500"
            >Wattanosoth Cancer Hospital</a
          >
        </div>
      </div>
    </div>
    <div class="h-full p-5 w-full col-span-7 md:col-span-2">
      <BaseCarousel />
    </div>
  </div>
</template>

<script setup>
import Background from "@/assets/imgs/prevent-cancer.jpg";
import Content1 from "@/assets/imgs/self-breast.webp";
import Content2 from "@/assets/imgs/weight-gain.png";
import Content3 from "@/assets/imgs/eat-food.jpeg";
import Content4 from "@/assets/imgs/exercise.jpeg";
import Content5 from "@/assets/imgs/quit-smoking.jpeg";
import Content6 from "@/assets/imgs/vitamin.jpg";

import BaseCarousel from "@/components/BaseCarousel.vue";
</script>

<style scoped></style>
