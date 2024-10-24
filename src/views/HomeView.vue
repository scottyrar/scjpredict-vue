<template>
  <div>
    <div
      class="bg-[url('@/assets/imgs/ai-predict2.jpeg')] h-screen w-screen bg-cover bg-top"
    >
      <div
        class="h-full w-full bg-black/40 text-white flex flex-col justify-center gap-14 p-8 sm:p-10"
      >
        <h1 class="text-4xl sm:text-[40px] font-semibold">
          "ยิ่งรู้เร็วยิ่งปลอดภัย มะเร็งเต้านมภัยเงียบของผู้หญิงง"
        </h1>
        <h2 class="text-base sm:text-xl font-medium">
          การตรวจเช็คความเสี่ยงของมะเร็งเต้านมเป็นสิ่งสำคัญ
          <br
            class="max-sm:hidden"
          />เราจึงจัดทำเเบบทดสอบเพื่อประเมินผู้ที่มีความเสี่ยงในโรคมะเร็งเต้านมสามารถรู้ตัวได้ไว
        </h2>
        <button
          class="flex gap-3 justify-center items-center p-3 w-full sm:w-72 bg-primary-400 hover:bg-primary-500 rounded-full text-base sm:text-xl"
          @click="$router.push({ name: 'predictcancer' })"
        >
          <p>เริ่มทำแบบประเมิน</p>
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-10 p-10">
      <div class="aspect-video place-self-center max-lg:col-span-2">
        <img
          :src="Content1"
          class="h-full w-full object-cover object-center rounded-xl"
        />
      </div>
      <div class="flex flex-col gap-5 justify-center max-lg:col-span-2">
        <div class="space-y-5">
          <div class="space-y-3">
            <h2 class="text-xl sm:text-2xl font-semibold text-primary-500">
              มะเร็งเต้านม คืออะไร
            </h2>
            <p class="text-surface-700 text-lg sm:text-xl">
              มะเร็งเต้านม คือ มะเร็งที่เกิดจากความผิดปกติของเซลล์ในเต้านม
              โดยเฉพาะเซลล์ท่อน้ำนม
              โดยเซลล์จะเริ่มแบ่งตัวผิดปกติแล้วลุกลามไปยังเนื้อเยื่อข้างเคียง
              จากนั้นหากปล่อยไว้ อาจแพร่กระจายไปยังเซลล์อื่น ๆ ในร่างกายได้
              ผ่านทางเดินน้ำเหลือง
            </p>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl sm:text-2xl font-semibold text-primary-500">
              มะเร็งเต้านมเกิดจากอะไร
            </h2>
            <p>
              มะเร็งเต้านม เกิดจากความผิดปกติของเซลล์ท่อน้ำนม ซึ่งพบได้มากที่สุด
              ประมาณ 80% ส่วนมะเร็งที่เกิดจากความผิดปกติของเซลล์ต่อมน้ำนม
              จะพบได้น้อยกว่า โดยพบประมาณ 10% นอกจากนี้
              มะเร็งชนิดนี้อาจเกิดขึ้นจากการแพร่กระจายของมะเร็งมาจากอวัยวะส่วนอื่น
              ๆ ได้ด้วยเช่นกัน
            </p>
          </div>
        </div>
        <button
          class="flex gap-3 items-center p-3 w-fit bg-primary-300 hover:bg-primary-400 text-surface-700 rounded-lg"
          @click="$router.push({ name: 'whatcancer' })"
        >
          <p>อ่านต่อ</p>
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="bg-surface-50 p-10 space-y-10">
      <h2
        class="text-xl sm:text-2xl font-semibold text-primary-500 text-center"
      >
        12 ปัจจัยที่สัมพันธ์กับโอกาสในการเกิดมะเร็งเต้านม
      </h2>
      <div class="grid grid-cols-3 gap-5">
        <div class="space-y-5 max-lg:col-span-3">
          <p>
            <span class="font-medium">1. เพศ:</span>
            เพศหญิงมีโอกาสเป็นมะเร็งเต้านมมากกว่าผู้ชายถึง 100 เท่า
          </p>
          <p>
            <span class="font-medium">2. เชื้อชาติ:</span>
            ผู้หญิงในชาติตะวันตก จะมีความเสี่ยงสูงกว่าผู้หญิงเอเชีย
          </p>
          <p>
            <span class="font-medium">3. ฮอร์โมนเพศ:</span>
            ประจำเดือนมาตั้งแต่ตอนอายุน้อย ๆ หรือวัยหมดประจำเดือนมาถึงช้า
            ทำให้ร่างกายผู้หญิงมีโอกาสสัมผัสกับฮอร์โมนเอสโตรเจนและโปรเจสเตอโรนนานขึ้น
            จึงมีโอกาสเป็นมะเร็งเต้านมมากยิ่งขึ้น
          </p>
          <p>
            <span class="font-medium">4. การมีบุตร และการให้นมบุตร:</span>
            การศึกษาพบว่า ผู้หญิงที่มีการคลอดบุตร เลี้ยงบุตรด้วยนมของตัวเอง
            จะช่วยป้องกันโอกาสเกิดมะเร็งเต้านมได้ ในขณะเดียวกัน
            กลุ่มที่ไม่มีบุตร เป็นหมัน กินยาคุมกำเนิด
            หรือไม่ได้เลี้ยงบุตรด้วยน้ำนมตัวเองนั้น
            จะมีความโอกาสเสี่ยงมากยิ่งขึ้น
          </p>
        </div>
        <div class="space-y-5 max-lg:col-span-3">
          <p>
            <span class="font-medium">5. อายุ:</span> เมื่อมีอายุมากขึ้น
            โอกาสเกิดความผิดปกติของยีนในเซลล์ก็จะเพิ่มขึ้น
            อาจส่งผลต่อการเกิดมะเร็งได้ จากการศึกษาพบว่า ผู้หญิงอายุน้อยกว่า 45
            ปี มีโอกาสเป็นมะเร็งเต้านมประมาณ 1 ใน 8 ในขณะที่ผู้หญิงอายุ 55
            ปีขึ้นไป มีโอกาสพบมะเร็งเต้านมประมาณ 2 ใน 3
          </p>
          <p>
            <span class="font-medium">6. ความอ้วน:</span>
            โรคอ้วนเพิ่มความเสี่ยงต่อการเกิดโรคมะเร็งเต้านมมากขึ้น
          </p>
          <p>
            <span class="font-medium">7. หน้าอกแน่น (Dense Breasts):</span>
            การมีหน้าอกแน่น หมายถึงการมีเนื้อเยื่อและต่อมน้ำนมมากกว่าคนอื่น ๆ
            จึงมีความเสี่ยงที่จะเป็นมะเร็งเต้านมมากกว่า นอกจากนี้
            โครงสร้างเนื้อเยื่อที่หนาแน่น
            ก็ทำให้แพทย์มองเห็นมะเร็งด้วยแมมโมแกรมได้ยากขึ้นด้วย
          </p>
          <p>
            <span class="font-medium"
              >8. มีประวัติของโรคและการรักษาเกี่ยวกับเต้านม:</span
            >
            หากเคยมีอาการผิดปกติเกี่ยวกับเต้านม
            หรือเคยได้รับการฉายรังสีในบริเวณดังกล่าว
            จะเพิ่มความเสี่ยงของมะเร็งได้
          </p>
        </div>
        <div class="space-y-5 max-lg:col-span-3">
          <p>
            <span class="font-medium">9. พันธุกรรม:</span>
            มีประวัติโรคมะเร็งเต้านมทางครอบครัว
            โดยเฉพาะหากญาติที่เป็นมะเร็งชนิดนี้เป็นญาติสายตรง
            จะยิ่งเสี่ยงมากขึ้น เช่น แม่ น้องสาว หรือพี่สาว
          </p>
          <p>
            <span class="font-medium">10. เครื่องดื่มแอลกอฮอล์:</span>
            ผู้หญิงกลุ่มที่ดื่มแอลกฮอล์เป็นประจำ
            จะมีความเสี่ยงเป็นมะเร็งเต้านมสูงกว่าผู้หญิงที่ไม่ดื่ม
          </p>
          <p>
            <span class="font-medium">11. เป็นมะเร็งเต้านมข้างหนึ่งแล้ว:</span>
            หากได้รับการวินิจฉัยว่าเป็นมะเร็งเต้านมข้างหนึ่ง จะมีความเสี่ยงถึง 3
            – 4 เท่า ที่จะเกิดมะเร็งขึ้นที่เต้านมอีกข้างหนึ่ง
          </p>
          <p>
            <span class="font-medium">12. ควันบุหรี่:</span> การสูบบุหรี่
            หรือได้รับควันบุหรี่ (ควันบุหรี่มือสอง)
            มีส่วนเชื่อมโยงกับความเสี่ยงที่จะเป็นโรคมะเร็งเต้านม
          </p>
        </div>
      </div>
    </div>
    <div class="lg:grid grid-cols-2">
      <img
        :src="Content2"
        class="h-full w-full object-cover object-left aspect-video"
      />
      <div class="space-y-5 p-10 place-self-center">
        <h1 class="text-xl sm:text-2xl font-bold text-primary-500">
          ดูแลตัวเองอย่างไรให้ห่างไกลโรคมะเร็งเต้านม ?
        </h1>
        <p>
          มะเร็งเต้านมเป็นสาเหตุที่ทำให้ผู้หญิงไทยเสียชีวิตเป็นอันดับต้น ๆ
          และยังคงมีแนวโน้มเพิ่มสูงขึ้นอย่างต่อเนื่อง
          การดูแลตัวเองเพื่อลดความเสี่ยงและป้องกันมะเร็งเต้านมจึงเป็นเรื่องที่ไม่ควรละเลย
        </p>
        <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
          6 วิธีลดความเสี่ยงและป้องกันมะเร็งเต้านมอย่างเห็นผลสามารถทำได้ดังนี้
        </h2>
        <div class="space-y-2">
          <p>1. ตรวจเช็กมะเร็งเต้านมทุกปี</p>
          <p>2. คุมน้ำหนักไม่ให้เกินเกณฑ์</p>
          <p>3. เลือกกินอาหารที่ดีมีประโยชน์</p>
          <p>4. ออกกำลังกายเป็นประจำ</p>
          <p>5. ห่างสารพิษเข้าร่างกาย</p>
          <p>6. เสริมวิตามินลดเสี่ยง</p>
        </div>
        <button
          class="flex gap-3 items-center p-3 w-fit bg-primary-300 hover:bg-primary-400 text-surface-700 rounded-lg"
          @click="$router.push({ name: 'preventcancer' })"
        >
          <p>อ่านต่อ</p>
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="space-y-5 p-10 max-lg:col-span-2 place-self-center">
        <h1 class="text-xl sm:text-2xl font-bold text-primary-500">
          การดูแลตัวเองเมื่อเป็นโรคมะเร็ง ?
        </h1>
        <p>
          เมื่อป่วยเป็นมะเร็งผู้ป่วยมักวิตกกังวลและสงสัยว่าต้องดูแลตัวเองอย่างไร
          ซึ่งการใช้ชีวิตนั้นไม่ได้ยุ่งยากซับซ้อนหรือต่างไปจากเดิมมากนัก
          แต่สิ่งสำคัญคือความเข้าใจ ความตั้งใจ ความใส่ใจ และไม่ต้องกังวลใจ
          เพื่อให้ผลการรักษาเป็นไปอย่างมีประสิทธิภาพและใช้ชีวิตได้อย่างมีความสุข
        </p>
        <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
          6 วิธีการดูแลตัวเองดังต่อไปนี้ คือสิ่งที่ควรรู้เมื่อเป็นมะเร็ง
        </h2>
        <div class="space-y-2">
          <p>1. ทานอาหารใหม่ สด สะอาด</p>
          <p>2. รักษาน้ำหนักให้ดี</p>
          <p>3. ระวังอย่าปล่อยให้ท้องผูก</p>
          <p>4. ออกกำลังกายหรือทำงานเท่าที่ไหว</p>
          <p>5. พักผ่อนให้เพียงพอและถูกต้อง</p>
          <p>6. ดูแลจิตใจให้ดี</p>
        </div>
        <button
          class="flex gap-3 items-center p-3 w-fit bg-primary-300 hover:bg-primary-400 text-surface-700 rounded-lg"
          @click="$router.push({ name: 'havecancer' })"
        >
          <p>อ่านต่อ</p>
          <i class="pi pi-arrow-right"></i>
        </button>
      </div>
      <img
        :src="Content3"
        class="h-full w-full object-cover object-center aspect-video max-lg:order-first max-lg:col-span-2"
      />
    </div>
  </div>
</template>

<script setup>
import Content1 from "@/assets/imgs/breast-cancer.png";
import Content2 from "@/assets/imgs/prevent-cancer.jpg";
import Content3 from "@/assets/imgs/health-care.jpeg";
</script>

<style scoped></style>
