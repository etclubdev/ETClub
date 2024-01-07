import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "https://et-api-2023.onrender.com",
  baseURL: "https://et-club.vercel.app"
});
let AccessToken = ''
let RefreshToken = ''
// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    if (AccessToken && config.headers) {
      console.log('this.AccessToken', AccessToken)
      config.headers.authorization = AccessToken
      return config
    }
    return config
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    const { url } = response.config
    const data = response.data

    if (url === '/user/login' || url === '/user/register') {
      console.log('this.AccessToken', AccessToken)
      console.log('data.data.access_token', data.result.access_token)
      AccessToken = data.result.access_token
      RefreshToken = data.result.refresh_token
      setAccessTokenToLS(AccessToken)
      setRefreshTokenToLS(RefreshToken)
    } else if (url === '/user/logout') {
      AccessToken = ''
      RefreshToken = ''
      clearLS()
    }
    return response.data
  },
  function (error) {
    clearLS()
    AccessToken = ''
    RefreshToken = ''
    return Promise.reject(error);
  }
);
export const LocalStorageEventTarget = new EventTarget()
export const setAccessTokenToLS = (access_token) => {
  localStorage.setItem('access_token', access_token)
}
export const setRefreshTokenToLS = (refresh_token) => {
  localStorage.setItem('refresh_token', refresh_token)
}
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('profile')
  const clearLSEvent = new Event('clearLS')
  LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}
export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''
export const getRefreshTokenFromLS = () => localStorage.getItem('refresh_token') || ''
export default axiosClient;
