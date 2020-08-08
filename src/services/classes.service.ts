import BASEURL from './api'
import { CadastroClassProps } from '../models/model'

const URL = `${BASEURL}/classes`

const create = (classes: CadastroClassProps) => {
  console.log("CHEGOU AQUI", classes)
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(classes),
  })
    .then(async (resp) => {
      console.log(resp)
      if (resp.ok) {
        const data = await resp
        return data
      }
      throw new Error(`Erro ao cadastrar aula ${resp.statusText}`,)
    })
}

const search = (subject: string, week_day: string, time: string) => {
  const newRequest = new Request(encodeURI(`${URL}?week_day=${week_day}&subject=${subject}&time=${time}`))

  return fetch(newRequest)
    .then(async (resp) => {
      console.log(resp)
      if (resp.ok) {
        const data = await resp.json()
        console.log("data", data)
        return data
      }
      throw new Error(`Erro ao cadastrar aula ${resp.statusText}`,)
    })
}

export default { create, search }