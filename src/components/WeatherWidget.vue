<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import dayjs from 'dayjs'

import { useLocation } from '@/hooks/useLocation'
import { useWeather } from '@/hooks/useWeather'
import { useGradient } from '@/hooks/useGradient'

import LoadingSpinner from '@/components/LoadingSpinner.vue'
import RetryButton from '@/components/RetryButton.vue'

const currentDate = ref(dayjs().format('dddd, D MMMM'))

const {
  coordinates,
  getLocation,
  isLoading: isLocationLoading,
  isError: isLocationError,
  errorMessage: locationError,
} = useLocation()

const {
  weatherData,
  backgroundImage,
  getWeather,
  isLoading: isWeatherLoading,
  isError: isWeatherError,
  errorMessage: weatherError,
} = useWeather()

onMounted(getLocation)

watch(coordinates, (newCoords) => {
  if (newCoords) {
    getWeather(newCoords.lat, newCoords.lon)
  }
})

const { gradient } = useGradient(weatherData)
</script>

<template>
  <div class="w-[243px] rounded-2xl shadow-[0_8px_16px_rgba(0,0,0,0.25)] overflow-hidden">
    <div
      v-if="isLocationLoading || isWeatherLoading"
      class="flex items-center justify-center h-[320px]"
    >
      <LoadingSpinner />
    </div>
    <div v-else-if="isLocationError || isWeatherError" class="p-4 text-red-500 text-center">
      <p>{{ locationError || weatherError }}</p>
      <RetryButton @click="getLocation" />
    </div>

    <div v-else>
      <div
        class="relative h-[240px] w-full p-[24px]"
        :style="{
          backgroundImage: `${gradient}, url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-transparent to-black/20"></div>

        <div class="text-white">
          <p class="text-[40px] font-semibold tracking-[-0.02em] leading-none">
            {{ weatherData?.temp }}°
          </p>
          <p class="text-[15px] uppercase font-bold tracking-[0.07em]">
            {{ weatherData?.location }}
          </p>
        </div>
      </div>
      <div class="p-4 bg-white">
        <p class="font-bold text-[15px] text-[#191919] opacity-70">{{ currentDate }}</p>

        <div class="flex justify-between items-center">
          <div class="flex flex-col justify-center">
            <p class="font-bold text-[12px] text-[#6b6b6b] opacity-40 capitalize">
              {{ weatherData?.description }}
            </p>
            <span class="font-bold text-[12px] text-[#6b6b6b] opacity-40"
              >{{ weatherData?.minTemp }}° / {{ weatherData?.maxTemp }}°</span
            >
          </div>
          <img :src="weatherData?.icon" alt="weather icon" class="w-[40px] h-[40px]" />
        </div>
      </div>
    </div>
  </div>
</template>
