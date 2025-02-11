'use server'

import { signIn } from '@/auth'

export const authenticate = async (email: string, password: string) => {
  try {
    const result = await signIn('credentials', { email, password, redirect: false })
    return result
  } catch (error: any) {
    console.error('Authentication error:', error)  // Log lỗi chi tiết hơn
    return {
      error: true,
      message: error?.message || 'Unknown error occurred', // Cung cấp thông điệp lỗi rõ ràng hơn
      statusCode: error?.statusCode || 'UNKNOWN_ERROR',  // Mặc định nếu không có mã lỗi
      data: error.data || null
    }
  }
}
