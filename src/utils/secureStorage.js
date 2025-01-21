import { Preferences } from '@capacitor/preferences'

export async function saveCredentials(apiKey, apiSecret) {
  await Preferences.set({ key: 'apiKey', value: apiKey })
  await Preferences.set({ key: 'apiSecret', value: apiSecret })
}

export async function getCredentials() {
  const apiKey = await Preferences.get({ key: 'apiKey' })
  const apiSecret = await Preferences.get({ key: 'apiSecret' })
  return { apiKey: apiKey.value, apiSecret: apiSecret.value }
}
