import { ref } from 'vue'
import { fetchLocationImage } from '@/services/backgroundImgService'
import DEFAULT_BACKGROUND from '@/assets/images/earth.webp'

export function useBackgroundImage() {
  const backgroundImage = ref<string | null>(null)
  const isLoading = ref(false)
  const isError = ref(false)
  const errorMessage = ref<string | null>(null)

  const getBackgroundImage = async (location: string) => {
    isLoading.value = true
    isError.value = false
    errorMessage.value = null

    try {
      const imageUrl = await fetchLocationImage(location)
      backgroundImage.value = imageUrl || DEFAULT_BACKGROUND
    } catch (error: any) {
      isError.value = true
      errorMessage.value = error.message || 'Failed to load background image.'
      backgroundImage.value = DEFAULT_BACKGROUND
    } finally {
      isLoading.value = false
    }
  }

  return { backgroundImage, getBackgroundImage, isLoading, isError, errorMessage }
}
