import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.5.137:5151'
})

export const setToken = (token: string) => {
    api.defaults.headers.common = { Authorization: `Bearer ${token}` }
}

export default api
