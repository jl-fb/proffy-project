import BASEURL from './api'

const URL = `${BASEURL}/connections`

const getTotal = () => {
  return fetch(URL).then(async resp => {
    console.log(resp)
    if (resp.ok) {
      const data = await resp.json()
      return data
    }
    throw new Error('Não foi possível resgatar o total de connections :(')
  })
}

const setConnection = (user_id: number) => {
  return fetch(`${URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id })
  })
    .then(async resp => {
      console.log(resp)
      if (resp.ok) {
        return resp.status
      }
      throw new Error(`Não foi possível acessar connections :( ${resp.statusText}`)
    })
}

export default { getTotal, setConnection }