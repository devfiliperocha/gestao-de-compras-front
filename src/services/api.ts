import axios from 'axios'

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || process.env.API_URL
})
