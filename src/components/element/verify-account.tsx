'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import axiosInstance from "@/utils/axios";

const VerifyAccount = ({ id }: { id: string }) => {
  const [otp, setOtp] = useState<string>('')
  const handleSubmit = async () => {
    if (otp === '') {
      toast.error('Vui lòng nhập mã OTP')
      return
    }
    
    try {
      const response = await axiosInstance.post<IBackendRes<any>>('/auth/check-code-verify', { id, code_verify: otp })
      toast.success(response.data.message)
    }
    catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  const handleResentCode = async () => {
    try {
      const response = await axiosInstance.post<IBackendRes<any>>('/auth/resent-code-verify', { id })
      toast.success(response.data.message)
    }
    catch (error: any) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col items-center gap-6 p-6 bg-background shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-center">Xác nhận tài khoản</h2>
        <p className="text-center text-gray-600">Kiểm tra mã OTP tới địa chỉ email của bạn.</p>
        <p className="text-center text-sm text-gray-500">OTP sẽ hết hạn sau 5 phút.</p>
        <Input autoFocus value={otp} onChange={(e) => setOtp(e.target.value)} />
        
        <Button onClick={()=>handleSubmit()} className="w-full py-2 text-white bg-primary rounded-md hover:bg-primary/90">
          Gửi
        </Button>
        <p className="text-center text-gray-600 text-sm">Không nhận được mã? <span onClick={()=>handleResentCode()} className="text-primary cursor-pointer">Gửi lại</span></p>
       
      </div>
    </div>
  );
};

export default VerifyAccount;
