import axios from 'axios'
import { UNSPLASH_ACCESS_KEY, UNSPLASH_URL } from './const'

export const fetchLocationImage = async (location: string): Promise<string> => {
  try {
    const response = await axios.get(UNSPLASH_URL, {
      params: {
        query: location,
        per_page: 10,
        orientation: 'landscape',
        client_id: UNSPLASH_ACCESS_KEY,
      },
    })

    const images = response.data.results
    if (!images || images.length === 0) {
      throw new Error('No images found')
    }

    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex].urls.regular
  } catch (error) {
    throw new Error('Failed to fetch background image')
  }
}
