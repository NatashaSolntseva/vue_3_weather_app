import axios from 'axios'
import { WEATHER_API_KEY, WEATHER_API_BASE_URL } from './const'
import type { WeatherData } from './types'
import { translateText } from './translateService'

export const fetchWeatherFromWeatherAPI = async (
  lat: number,
  lon: number,
): Promise<WeatherData | null> => {
  try {
    const response = await axios.get(`${WEATHER_API_BASE_URL}/forecast.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: `${lat},${lon}`,
        days: 1,
        aqi: 'no',
        alerts: 'no',
      },
    })

    if (!response.data || !response.data.current) {
      throw new Error('Invalid response format')
    }
    const translatedLocation = await translateText(response.data.location.name)

    return {
      temp: Math.round(response.data.current.temp_c),
      minTemp: Math.round(response.data.forecast.forecastday[0].day.mintemp_c),
      maxTemp: Math.round(response.data.forecast.forecastday[0].day.maxtemp_c),
      description: response.data.current.condition.text,
      icon: `https:${response.data.current.condition.icon}`,
      location: translatedLocation,
    }
  } catch (error) {
    throw new Error('Failed to fetch weather data')
  }
}
