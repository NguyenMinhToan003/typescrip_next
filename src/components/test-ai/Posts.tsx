'use client';

import { useState } from "react";
import { ChartC } from "./Chart";
import axiosInstance from "@/utils/axios";
import { iIsOpenAIAnalysis } from "@/types/test-ai";
import Post from "./Post";
import Comments from "./Comments";

const Posts = ({ posts }: { posts: any }) => {
  const [isOpenAIAnalysis, setIsOpenAIAnalysis] = useState<iIsOpenAIAnalysis | null>(null);
  const [chosenPostId, setChosenPostId] = useState<string>();

  const handleAnalysis = async (post: any) => {
    setChosenPostId(post._id);
    const responseAnalysis = await axiosInstance.get(`/evaluate-post?postId=${post._id}`);
    const data = responseAnalysis.data;
    setIsOpenAIAnalysis({
      open: true,
      post,
      analysis: {
        chartData: data.chartData,
        averageScore: data.averageScore,
        totalComments: data.totalComments,
        message: data.message,
      },
    });
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-4 h-screen">
        <div className="col-span-3 overflow-y-auto"> 
          {posts.map((item: any) => (
            <div key={item._id}>
              <Post post={item} handleAnalysis={handleAnalysis} chosenPostId={chosenPostId} />
            </div>
          ))}
        </div>
        <div className="col-span-2 sticky top-4 flex flex-col gap-4">
          <ChartC data={isOpenAIAnalysis} />
          <Comments isOpenAIAnalysis={isOpenAIAnalysis} />
        </div>
      </div>
    </>
  );
};

export default Posts;
