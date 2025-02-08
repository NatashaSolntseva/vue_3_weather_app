import { ref } from 'vue'
import { fetchWeatherFromWeatherAPI } from '@/services/weatherService'
import type { WeatherData } from '@/services/types'

export function useWeather() {
  const weatherData = ref<WeatherData | null>(null)
  const isLoading = ref(false)
  const isError = ref(false)
  const errorMessage = ref<string | null>(null)

  const getWeather = async (lat: number, lon: number) => {
    isLoading.value = true
    isError.value = false
    errorMessage.value = null

    try {
      weatherData.value = await fetchWeatherFromWeatherAPI(lat, lon)
    } catch (error: any) {
      isError.value = true
      errorMessage.value = error.message || 'Failed to load weather data.'
    } finally {
      isLoading.value = false
    }
  }

  return { weatherData, getWeather, isLoading, isError, errorMessage }
}
