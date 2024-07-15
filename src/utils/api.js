import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ai2-backend-np1o.onrender.com' //'http://localhost:3000'
})

export default api