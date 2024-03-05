import axios from 'axios'

const apiClient = axios.create({
 baseURL: 'http://localhost:8000/api/',
})

apiClient.interceptors.request.use((config) => {
 const token = sessionStorage.getItem('token')
 if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
 }
 return config
}, (error) => {
 return Promise.reject(error)
})

apiClient.interceptors.response.use(null, async (error) => {
 if (error.response && error.response.status === 401) {
    const refresh = sessionStorage.getItem('refresh')
    if (refresh) {
      try {
        const response = await apiClient.post('/token/refresh/', { refresh })
        sessionStorage.setItem('token', response.data.token)
        sessionStorage.setItem('refresh', response.data.refresh)
        // Retry the original request with the new token
        const config = error.config
        config.headers['Authorization'] = `Bearer ${response.data.token}`
        return apiClient(config)
      } catch (refreshError) {
        // Handle refresh token failure
        console.error('Refresh token failed', refreshError)
      }
    }
 }
 return Promise.reject(error)
})

export default apiClient