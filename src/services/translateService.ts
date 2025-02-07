import axios from 'axios'

export const translateText = async (text: string) => {
  try {
    const response = await axios.get('https://api.mymemory.translated.net/get', {
      params: {
        q: text,
        langpair: 'ru|en',
      },
    })
    return response.data.responseData.translatedText
  } catch (error) {
    return text
  }
}
