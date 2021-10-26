import axios from 'axios'

const api = axios.create({
    baseURL: __DEV__ ? 'http://192.168.5.137:5151' : 'http://10.0.0.103:5151'
})

export const setToken = (token: string) => {
    api.defaults.headers.common = { Authorization: `Bearer ${token}` }
}

export default api
