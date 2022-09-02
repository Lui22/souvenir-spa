const host = 'https://jurapro.bhuser.ru/api-souvenir/'

export default async (method, path, body = {}) => {
  let req
  if (method === 'GET') {
    req = await fetch(host + path, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
  } else {
    req = await fetch(host + path, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body
    })
  }

  return await req.json()
}
