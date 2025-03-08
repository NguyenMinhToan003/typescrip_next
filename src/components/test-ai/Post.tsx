'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Button } from '../ui/button'
import axiosInstance from '@/utils/axios'
import { Input } from '../ui/input'
import { toast } from 'sonner'


const Post = ({ post,handleAnalysis,chosenPostId }: { post: any,handleAnalysis:(post:any)=>void,chosenPostId:string }) => { 
  const [comment, setComment] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handlSendMessage = async (postId: string, comment: string) => {
    setIsLoading(true)
    if(comment === '' || isLoading) return setIsLoading(false)
    const responseSendMessage = await axiosInstance.post(`/comment-analys`, { postId, comment })
    if (responseSendMessage.data?.error) {
      toast.error(responseSendMessage.data?.message)
    }
    else {
      toast('Gửi bình luận thành công', {
      description: 'Xem đánh giá của AI',
      action: {
        label: 'AI Đánh giá',
        onClick: () => handleAnalysis(post),
      },
    })
    }
    setComment('')
    setIsLoading(false)
  }
  return <>
          <Card key={post._id} className={`p-4 cursor-pointer ${chosenPostId === post._id ? 'bg-gray-200, mb-4  shadow-md' : ' mb-4  shadow-md'}`}>
            <CardHeader>{post?.title}</CardHeader>
            <CardContent>
              {post?.content}
            </CardContent>
            <CardFooter className='flex justify-between gap-2'>
              <Input  onChange={(e)=>setComment(e.target.value)} value={comment}/> 
        <Button 
          onClick={(e) => handlSendMessage(post._id, comment)}
                    disabled={isLoading}>{
                      isLoading ? 'Đang gửi' : 'Gửi'
              }</Button>
        <Button className='bg-gradient-to-tr from-red-500 to-black-500'
          onClick={() => handleAnalysis(post)}>AI Đánh giá</Button>
            </CardFooter>
          </Card>
        </>
}
export default Post;