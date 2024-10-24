<template>
    <div class="grid grid-cols-2">
        <LogoIcon :class="{'h-32 w-32 sm:h-64 sm:w-64 logo-spin': props.isLoading,'h-4 w-4': !props.isLoading}"/>
        <LogoIcon class="self-end" :class="{'h-24 w-24 sm:h-48 sm:w-48 logo-spin': props.isLoading,'h-3 w-3': !props.isLoading}"/>
        <LogoIcon class="col-span-2 justify-self-center" :class="{'h-16 w-16 sm:h-32 sm:w-32 logo-spin': props.isLoading,'h-2 w-2': !props.isLoading}"/>
    </div>
</template>

<script setup>
import LogoIcon from './LogoIcon.vue';

const props = defineProps({
    isLoading: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
.logo-spin {
    animation: spin 2s linear infinite;
}
</style>