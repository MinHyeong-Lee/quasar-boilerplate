import { api } from 'boot/axios'

export async function loadData() {
  let data = await api
    .post(
      '/api/method/common_doc.common_doc.doctype.document_manual.document_manual.get_manual_url',
      {
        doctype: 'General Expense Approval',
      },
    )
    .then((response) => {
      return response.data
    })
  return data
}
