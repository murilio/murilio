import axios from 'axios'

export default async function getIP () {
  const { data } = await axios.get('https://api.country.is/')
  return data.ip
}
