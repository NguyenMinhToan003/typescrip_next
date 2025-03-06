// utils/axios.js

import axios from 'axios'

// Tạo instance axios với cấu hình mặc định
const axiosInstance = axios.create({
  // baseURL: 'http://localhost:4000/api/v1', // URL của API backend
  baseURL: 'http://localhost:3000', // url test ai co ban
  headers: {
    'Content-Type': 'application/json',
  },
})
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Xử lý lỗi toàn cục, ví dụ: 401, 500,...
    // if (error.response && error.response.status === 401) {
    //   // Ví dụ: Chuyển hướng đến trang đăng nhập nếu token hết hạn
    //   window.location.href = "/login";
    // }
    return Promise.reject(error)
  }
)

export default axiosInstance
