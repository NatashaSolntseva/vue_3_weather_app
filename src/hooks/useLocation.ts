import { ref } from 'vue'

export function useLocation() {
  const coordinates = ref<{ lat: number; lon: number } | null>(null)
  const isError = ref(false)
  const errorMessage = ref<string | null>(null)
  const isLoading = ref(true)

  const getLocation = () => {
    isLoading.value = true
    isError.value = false
    errorMessage.value = null

    navigator.geolocation.getCurrentPosition(
      (position) => {
        coordinates.value = { lat: position.coords.latitude, lon: position.coords.longitude }
        isLoading.value = false
      },
      () => {
        errorMessage.value = 'Location access denied. Please enable location services and retry.'
        isError.value = true
        isLoading.value = false
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    )
  }

  return { coordinates, getLocation, isError, errorMessage, isLoading }
}
