import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'
import { getCredentials } from '@/utils/secureStorage'

const api = axios.create({ baseURL: 'http://localhost:3000' })

api.interceptors.request.use(
  async (config) => {
    const credentials = await getCredentials()

    if (credentials.apiKey && credentials.apiSecret) {
      config.headers['Authorization'] = `token ${credentials.apiKey}:${credentials.apiSecret}`
    }
    return config
  },
  (error) => {
    // 요청 중 에러 발생 시 처리
    return Promise.reject(error)
  },
)

export default defineBoot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { axios, api }
