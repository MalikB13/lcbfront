export const BASE_URL = 'http://127.0.0.1:8000'

export async function api (url, params = {}) {
  const response = await fetch(BASE_URL + url + '?sentence=zboub', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
  return response.json() // parses JSON response into native JavaScript objects
}
