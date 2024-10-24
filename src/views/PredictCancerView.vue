<template>
  <div class="grid grid-cols-7 h-fit min-h-screen pt-14">
    <div class="col-span-7 md:col-span-5 space-y-7">
      <Transition
        enter-active-class="animate__animated animate__fadeInLeft animate__faster"
        leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
        mode="out-in"
      >
        <div
          class="p-5 flex justify-center items-center h-full"
          v-if="isSuccess"
        >
          <div
            v-if="result === 1"
            class="flex flex-col justify-center items-center gap-4"
          >
            <p class="text-3xl">ยินดีด้วย</p>
            <NotCancerIcon class="max-h-[60vh] w-[60vw] text-primary-500" />
            <p class="text-xl text-center">
              คุณไม่มีความเสี่ยงที่จะเป็นโรคมะเร็งเต้านม
            </p>
            <button
              class="bg-primary-400 hover:bg-primary-500 p-3 rounded-lg text-white flex gap-2 items-center"
              @click="scrollToTop"
            >
              <p>ทำแบบประเมินใหม่</p>
              <i class="pi pi-arrow-right"></i>
            </button>
          </div>
          <div
            v-else-if="result === 2"
            class="flex flex-col justify-center items-center gap-4"
          >
            <div class="flex gap-2 items-center text-3xl">
              <i
                class="pi pi-exclamation-circle text-red-500 animate-pulse"
              ></i>
              <p>โปรดระวัง</p>
            </div>
            <HaveCancerIcon class="max-h-[60vh] w-[60vw] text-red-500" />
            <p class="text-xl text-center">
              คุณมีความเสี่ยงที่จะเป็นโรคมะเร็งเต้านมสูง
              โปรดพบแพทย์เพื่อตรวจสอบให้ความแน่ใจ
            </p>
            <button
              class="bg-red-400 hover:bg-red-500 p-3 rounded-lg text-white flex gap-2 items-center"
              @click="scrollToTop"
            >
              <p>ทำแบบประเมินใหม่</p>
              <i class="pi pi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div v-else class="space-y-7 text-surface-700">
          <h1
            class="text-center text-3xl sm:text-4xl font-bold text-primary-500 px-5 pt-5"
          >
            แบบประเมินความเสี่ยงโรคมะเร็งเต้านม
          </h1>
          <div class="sticky top-[56px] bg-white px-5 py-2 z-[5] max-md:hidden">
            <ProgressBar :value="haveDataPercentage" />
          </div>
          <form class="space-y-7 px-5" @submit.prevent="predictApi">
            <div class="space-y-3">
              <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                1) คุณอายุเท่าไหร่?
              </h2>
              <InputNumber
                v-model="formInput.age"
                showButtons
                inputId="age"
                buttonLayout="horizontal"
                :step="1"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="100"
              />
            </div>
            <div class="space-y-3">
              <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                2) คุณมีค่าดัชนีมวลการ (BMI) เท่าไหร่?
              </h2>
              <InputNumber
                v-model="formInput.bmi"
                showButtons
                inputId="bmi"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="100"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  3) คุณมีค่ากลูโคส (Glucose) เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * Glucose คือ น้ำตาลโมเลกุลเดียว ที่ร่างกายสามารถนำไปใช้งาน
                  หรือเผาผลาญเพื่อให้เกิดเป็นพลังงานในร่างกาย
                </h3>
              </div>
              <InputNumber
                v-model="formInput.glucose"
                showButtons
                inputId="glucose"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="500"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  4) คุณมีค่าอินซูลิน (Insulin) เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * Insulin คือ
                  ฮอร์โมนที่สร้างจากตับอ่อนทำหน้าที่เผาผลาญคาร์โบไฮเดรตและไขมันเปลี่ยนน้ำตาลในร่างกายไปเป็นไขมัน
                </h3>
              </div>
              <InputNumber
                v-model="formInput.insulin"
                showButtons
                inputId="insulin"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="100"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  5) คุณมีค่าโฮม่า (HOMA) เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * HOMA คือ
                  เป็นการวัดการดื้ออินซูลินโดยดูระดับฮอร์โมนอินซูลิน(fasting
                  insulin)และน้ำตาลในเลือดขณะอดอาหาร(Fbs)
                </h3>
              </div>
              <InputNumber
                v-model="formInput.homa"
                showButtons
                inputId="homa"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="50"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  6) คุณมีค่าเล็ปติน (Leptin) เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * Leptin คือ ฮอร์โมนที่ช่วยในการควบคุมความหิว
                  ผลิตมาจากเซลล์ไขมัน (White adiposyte)
                  และผลิตได้บ้างเล็กน้อยในเซลล์ชนิดอื่น ๆ
                </h3>
              </div>
              <InputNumber
                v-model="formInput.leptin"
                showButtons
                inputId="leptin"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="100"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  7) คุณมีค่าอะดิโพเนกติน (Adiponectin) เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * Adiponectin คือ สารที่ช่วยเผาผลาญพลังงาน การต้านการอักเสบ
                  รวมถึงการเจริญเติบโตของเซลล์ และ การต้านการแข็งตัวของเลือด
                </h3>
              </div>
              <InputNumber
                v-model="formInput.adiponectin"
                showButtons
                inputId="adiponection"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="50"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  8) คุณมีค่ารีซิสติน (Resistin) เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * Resistin คือ
                  เป็นฮอร์โมนจากเนื้อเยื่อไขมันที่ใช้ควบคุมการอักเสบและกระบวนการภูมิต้านทาน
                </h3>
              </div>
              <InputNumber
                v-model="formInput.resistin"
                showButtons
                inputId="resistin"
                buttonLayout="horizontal"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="100"
                :minFractionDigits="2"
              />
            </div>
            <div class="space-y-3">
              <div class="space-y-1">
                <h2 class="text-lg sm:text-xl font-semibold text-primary-500">
                  9) คุณมีค่า MCP-1 (Monocyte Chemoattractant Protein-1)
                  เท่าไหร่?
                </h2>
                <h3 class="text-sm sm:text-base font-medium text-surface-700">
                  * Monocyte chemoattractant protein-1 (MCP-1) คือ
                  โปรตีนที่อยู่ในส่วนภูมิคุ้มกันของร่างกาย
                  เมื่อร่างกายเกิดติดเชื้อหรืออักเสบจะทำหน้าช่วยซ่อมเเซมในส่วนนั้น
                </h3>
              </div>
              <InputNumber
                v-model="formInput.mcp"
                showButtons
                buttonLayout="horizontal"
                inputId="mcp"
                :step="0.25"
                decrementButtonClass="p-button-danger"
                incrementButtonClass="p-button-success"
                incrementButtonIcon="pi pi-plus text-white"
                decrementButtonIcon="pi pi-minus text-white"
                :min="0"
                :max="5000"
                :minFractionDigits="2"
              />
            </div>
            <div class="flex gap-2 justify-center p-4 sm:text-lg">
              <button
                class="bg-gray-400 hover:bg-gray-500 p-3 min-w-28 rounded-lg text-white"
                type="button"
                @click="clearData"
              >
                ล้างค่า
              </button>
              <button
                class="bg-primary-500 hover:bg-primary-600 p-3 min-w-28 rounded-lg text-white disabled:opacity-40 disabled:hover:bg-primary-500 disabled:cursor-not-allowed"
                type="submit"
                :disabled="disableBtn"
              >
                ทำนายผล
              </button>
            </div>
          </form>
        </div>
      </Transition>
    </div>
    <div class="h-full p-5 w-full col-span-7 md:col-span-2 max-md:hidden">
      <Transition
        enter-active-class="animate__animated animate__fadeInRight animate__faster"
        leave-active-class="animate__animated animate__fadeOutRight animate__faster"
        mode="out-in"
      >
        <BaseCarousel v-if="isSuccess" />
        <div v-else class="space-y-3 text-lg sticky top-[84px]">
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 1) ตอบ
              {{
                !formInput.age || formInput.age === null ? "" : formInput.age
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.age !== null && formInput.age !== 0,
                'pi pi-times text-red-500':
                  formInput.age === null || formInput.age === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 2) ตอบ
              {{
                !formInput.bmi || formInput.bmi === null ? "" : formInput.bmi
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.bmi !== null && formInput.bmi !== 0,
                'pi pi-times text-red-500':
                  formInput.bmi === null || formInput.bmi === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 3) ตอบ
              {{
                !formInput.glucose || formInput.glucose === null
                  ? ""
                  : formInput.glucose
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.glucose !== null && formInput.glucose !== 0,
                'pi pi-times text-red-500':
                  formInput.glucose === null || formInput.glucose === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 4) ตอบ
              {{
                !formInput.insulin || formInput.insulin === null
                  ? ""
                  : formInput.insulin
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.insulin !== null && formInput.insulin !== 0,
                'pi pi-times text-red-500':
                  formInput.insulin === null || formInput.insulin === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 5) ตอบ
              {{
                !formInput.homa || formInput.homa === null ? "" : formInput.homa
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.homa !== null && formInput.homa !== 0,
                'pi pi-times text-red-500':
                  formInput.homa === null || formInput.homa === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 6) ตอบ
              {{
                !formInput.leptin || formInput.leptin === null
                  ? ""
                  : formInput.leptin
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.leptin !== null && formInput.leptin !== 0,
                'pi pi-times text-red-500':
                  formInput.leptin === null || formInput.leptin === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 7) ตอบ
              {{
                !formInput.adiponectin || formInput.adiponectin === null
                  ? ""
                  : formInput.adiponectin
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.adiponectin !== null && formInput.adiponectin !== 0,
                'pi pi-times text-red-500':
                  formInput.adiponectin === null || formInput.adiponectin === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 8) ตอบ
              {{
                !formInput.resistin || formInput.resistin === null
                  ? ""
                  : formInput.resistin
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.resistin !== null && formInput.resistin !== 0,
                'pi pi-times text-red-500':
                  formInput.resistin === null || formInput.resistin === 0,
              }"
            ></i>
          </div>
          <div class="flex gap-2 justify-between items-center">
            <p>
              ข้อที่ 9) ตอบ
              {{
                !formInput.mcp || formInput.mcp === null ? "" : formInput.mcp
              }}
            </p>
            <i
              :class="{
                'pi pi-check text-green-500':
                  formInput.mcp !== null && formInput.mcp !== 0,
                'pi pi-times text-red-500':
                  formInput.mcp === null || formInput.mcp === 0,
              }"
            ></i>
          </div>
        </div>
      </Transition>
    </div>
    <div
      class="sticky w-full bottom-0 bg-white p-5 z-[5] col-span-12 md:hidden"
      v-if="!isSuccess"
    >
      <ProgressBar :value="haveDataPercentage" />
    </div>
  </div>
  <BaseCarousel class="md:hidden p-5" v-if="isSuccess" />
  <LoadingView v-model="isLoading"/>
  <Toast />
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import axios from "axios";

import NotCancerIcon from "@/components/icons/NotCancerIcon.vue";
import HaveCancerIcon from "@/components/icons/HaveCancerIcon.vue";

import BaseCarousel from "@/components/BaseCarousel.vue";
import LoadingView from "@/components/LoadingView.vue"
import InputNumber from "primevue/inputnumber";
import ProgressBar from "primevue/progressbar";
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const formInput = reactive({
  age: 0,
  bmi: 0,
  glucose: 0,
  insulin: 0,
  homa: 0,
  leptin: 0,
  adiponectin: 0,
  resistin: 0,
  mcp: 0,
});
const result = ref(0);
const isLoading = ref(false);
const isSuccess = ref(false);

const disableBtn = computed(() => {
  return formInput.age === null ||
    formInput.bmi === null ||
    formInput.glucose === null ||
    formInput.insulin === null ||
    formInput.homa === null ||
    formInput.leptin === null ||
    formInput.adiponectin === null ||
    formInput.resistin === null ||
    formInput.mcp === null ||
    (!formInput.age &&
      !formInput.bmi &&
      !formInput.glucose &&
      !formInput.insulin &&
      !formInput.homa &&
      !formInput.leptin &&
      !formInput.adiponectin &&
      !formInput.resistin &&
      !formInput.mcp)
    ? true
    : false;
});

const haveDataPercentage = computed(() => {
  const totalFields = Object.keys(formInput).length;
  const haveDataFields = Object.values(formInput).filter(
    (value) => value !== 0 && value !== null
  ).length;

  const percentage = (haveDataFields / totalFields) * 100;
  return parseFloat(percentage.toFixed(2));
});

function scrollToTop() {
  window.scrollTo(0, 0);
  isSuccess.value = false;
}

async function predictApi() {
  try {
    isLoading.value = true;
    window.scrollTo(0, 0);
    const res = await axios.post("https://scotty.pythonanywhere.com/predict", formInput);
    setTimeout(() => {
      result.value = res.data.result;
      isSuccess.value = true;
      isLoading.value = false;
      toast.add({ severity: 'success', summary: 'ประมวลผลสำเร็จ', detail: 'สามารถดูผลลัพธ์ของคุณได้', life: 3000 });
      clearData();
    }, 2000);
  } catch (error) {
    isLoading.value = false;
    toast.add({ severity: 'error', summary: 'ประมวลผลไม่สำเร็จ', detail: 'โปรดลองใหม่อีกครั้ง', life: 3000 });
    console.log(error);
  }
}

function clearData() {
  formInput.age = 0;
  formInput.bmi = 0;
  formInput.glucose = 0;
  formInput.insulin = 0;
  formInput.homa = 0;
  formInput.leptin = 0;
  formInput.adiponectin = 0;
  formInput.resistin = 0;
  formInput.mcp = 0;
}
</script>

<style scoped></style>
