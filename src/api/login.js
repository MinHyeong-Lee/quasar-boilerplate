import { api } from 'boot/axios'
import { saveCredentials } from '@/utils/secureStorage'

export async function login({ username, password }) {
  let data = await api
    .post('/api/method/external_approval_system.api.login', {
      username: username,
      password: password,
    })
    .then(async (response) => {
      let userData = response.data.message
      await saveCredentials(userData.api_key, userData.api_secret)
      delete userData.api_key
      delete userData.api_secret
      return userData
    })
  return data
}

export async function logout() {
  let data = await api.post('/api/method/logout').then((response) => {
    return response.data
  })
  return data
}
