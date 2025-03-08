"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { iIsOpenAIAnalysis } from "@/types/test-ai";
import axiosInstance from "@/utils/axios";
import { useEffect, useState } from "react";

// Định nghĩa interface cho dữ liệu bình luận
interface Comment {
  _id: string;
  text: string;
  label: "POSITIVE" | "NEUTRAL" | "NEGATIVE" | null;
  score: number;
  date: string;
}

// Props chỉ nhận postId là string


const Comments = ({ isOpenAIAnalysis }: iIsOpenAIAnalysis) => {
  const [comments, setComments] = useState<Comment[]>([]);

  // Hàm fetch bình luận từ API
  const fetchComments = async () => {
    try {
      const response = await axiosInstance.get(`/post?postId=${isOpenAIAnalysis.post._id}`); // Sửa endpoint thành /post theo API của bạn
      setComments(response.data.comments); // API /post trả về object với trường comments
    } catch (error) {
      console.error("Failed to fetch comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [isOpenAIAnalysis]);

  return (
    <Card className="mt-4 max-h-[400px] overflow-y-auto shadow-xl">
      <CardHeader>
        <CardTitle>Bình luận ({comments.length})</CardTitle>
      </CardHeader>
      <CardContent>
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-center">Chưa có bình luận nào.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => {
              
              return (
                <li
                  key={comment._id}
                  className={`flex flex-col p-3 border rounded-lg shadow-sm bg-white transition-colors`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`flex-1 font-medium `}>
                      {comment.text}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {
                      comment.label==='POSITIVE' ? 'Tích cực' : comment.label==='NEUTRAL' ? 'Trung lập' : 'Tiêu cực'
                    } ({comment.score.toFixed(2)*100}%)
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default Comments;