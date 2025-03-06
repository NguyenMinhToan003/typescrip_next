import { Icons } from "@/components/element/icons"
import Posts from "@/components/test-ai/Posts"
import { Button } from "@/components/ui/button"

import axiosInstance from "@/utils/axios"
import { Input } from '@/components/ui/input'

import ButtonAddPost from "@/components/test-ai/Button-AddPost"

export default async function HomeAdmin() {
  const posts = await axiosInstance.get('/posts')
  return (
    <>
      <div className="flex justify-between items-center gap-3 mb-4">
        <div className="flex gap-3 w-1/2">
          <Input
            type="text"
            placeholder="Tìm kiếm "
          />
          <Button>Tìm kiếm</Button>
        </div>
        <ButtonAddPost/>
      </div>
      <Posts posts={posts?.data} />
    </>
  )
}