import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

import { camelizeKeys, decamelizeKeys } from 'humps'

let localURL = 'http://localhost:3001'
let herokuURL = 'http://pyxam-api.herokuapp.com'

let baseURL = process.env.REACT_APP_API_HOST === 'heroku' ? herokuURL : localURL

const api = axios.create({ baseURL: baseURL })

// Axios middleware to convert all api responses to camelCase
api.interceptors.response.use((response: AxiosResponse) => {
    if (
        response.data &&
        response.headers['content-type'] === 'application/json'
    ) {
        response.data = camelizeKeys(response.data)
    }
    return response
})

// Axios middleware to convert all api requests to snake_case
api.interceptors.request.use((config: AxiosRequestConfig) => {
    const newConfig = { ...config }
    newConfig.url = `${config.url}`
    if (newConfig.headers['Content-Type'] === 'multipart/form-data')
        return newConfig
    if (config.params) {
        newConfig.params = decamelizeKeys(config.params)
    }
    if (config.data) {
        newConfig.data = decamelizeKeys(config.data)
    }
    return newConfig
})
export default api
