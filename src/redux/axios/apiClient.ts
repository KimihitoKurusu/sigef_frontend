import axios from 'axios'

const apiClient = axios.create({
 baseURL: 'http://0.0.0.0:8000/api/',
})

async function authenticate() {
  try {
    const username = 'admin'
    const password = 'admin'
    const credentials = btoa(`${username}:${password}`)
    const response = await apiClient.post('token', {}, {
      headers: { 'Authorization': `Basic ${credentials}` }
    })
    const { token } = response.data
    sessionStorage.setItem('token', token) // Store the token
  } catch (error) {
    console.error('Authentication failed:', error)
  }
}

authenticate()

apiClient.interceptors.request.use((config) => {
 const token = sessionStorage.getItem('token') // || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5MzUzNTc4LCJpYXQiOjE3MTY3NjE1NzgsImp0aSI6ImIzOThhYzcwNDUyMzRkYjFiMGY2YjA5MDUxYjM4NDk5IiwidXNlcl9pZCI6MX0.8ysutgGWdvMqTttQYkZmwKqn3sjZ6EFvL8umbBDFwz0'
 if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
 }
 return config
}, (error) => {
 return Promise.reject(error)
})

apiClient.interceptors.response.use(null, async (error) => {
 if (error.response && error.response.status === 401) {
    const refresh = sessionStorage.getItem('refresh') // || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNjg0Nzk3OCwiaWF0IjoxNzE2NzYxNTc4LCJqdGkiOiI0N2QzZGZlNWY2YjU0OTc2YWExYzVkMDAyMDc5ZDA5ZCIsInVzZXJfaWQiOjF9.Ncdc1BXkcsDnmurBcykwzYA9oNTMhltrvPwXO3VAKfw"
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