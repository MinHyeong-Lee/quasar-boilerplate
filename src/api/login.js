import { api } from 'boot/axios'
// import { defineStore } from 'pinia'

export async function loadData() {
  const token = ''
  let data = await api
    .post(
      '/api/method/common_doc.common_doc.doctype.document_manual.document_manual.get_manual_url',
      {
        doctype: 'General Expense Approval',
      },
      {
        headers: {
          Authorization: token,
        },
      },
    )
    .then((response) => {
      return response.data
    })
  return data
}

export async function login({ username, password }) {
  let data = await api
    .post('/api/method/external_approval_system.api.login', {
      username: username,
      password: password,
    })
    .then((response) => {
      return response.data
    })
  return data
}

export async function logout() {
  let data = await api.post('/api/method/logut').then((response) => {
    return response.data
  })
  return data
}
