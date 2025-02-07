import { computed } from 'vue'
import type { Ref } from 'vue'
import type { WeatherData } from '@/services/types'

export function useGradient(weatherData: Ref<WeatherData | null>) {
  const getGradientColors = (temp: number) => {
    if (temp <= -10) return ['#3A8DFF', 'rgba(80, 160, 255, 0.4)', 'rgba(120, 190, 255, 0.2)']
    if (temp < 0) return ['#64B5F6', 'rgba(100, 180, 250, 0.4)', 'rgba(150, 210, 255, 0.2)']
    if (temp < 15) return ['#96c8fa', 'rgba(200, 230, 250, 0.4)', 'rgba(230, 240, 250, 0.2)']
    if (temp < 20) return ['#fdd368', 'rgba(248, 183, 15, 0.4)', 'rgba(250, 186, 24, 0.2)']
    if (temp < 30) return ['#ff9632', 'rgba(255, 150, 50, 0.4)', 'rgba(255, 180, 80, 0.2)']
    return ['#f94545', 'rgba(255, 80, 80, 0.4)', 'rgba(255, 98, 98, 0.2)']
  }

  const gradient = computed(() => {
    if (!weatherData.value) {
      return 'linear-gradient(271deg, rgba(200,200,200,0.4), rgba(180,180,180,0.4))'
    }

    const [startColor, midColor, endColor] = getGradientColors(weatherData.value.temp)

    return `linear-gradient(272deg, ${startColor} 0%, ${midColor} 100%),
            linear-gradient(305deg, ${endColor} 0%, ${midColor} 100%)`
  })

  return { gradient }
}
