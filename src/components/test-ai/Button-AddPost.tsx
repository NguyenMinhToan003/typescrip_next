'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Icons } from "../element/icons";
import { AlertDialogFooter, AlertDialogHeader } from "../ui/alert-dialog";
import { Input } from "../ui/input";
import { useState } from "react";
import axiosInstance from "@/utils/axios";
import { toast } from "sonner";

const ButtonAddPost = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false); // Thêm state để điều khiển dialog

  const handlAddPost = async () => {
    if (!title || !content) {
      toast.error("Vui lòng nhập tiêu đề và nội dung!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/post', { title, content });
      if (response.data?.error) {
        toast.error(response.data?.message);
      } else {
        toast.success('Thêm bài viết thành công');
        setOpen(false);
      }
    } catch (error) {
      toast.error('Đã có lỗi xảy ra khi thêm bài viết!');
      console.error(error);
    } finally {
      setIsLoading(false);
      setTitle(''); 
      setContent('');
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button>
          <Icons.plus /> Thêm bài viết
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Thêm 1 bài viết mới</AlertDialogTitle>
          <AlertDialogDescription>
            Nhập thông tin bài viết bên dưới. Các trường này là bắt buộc.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-3">
          <Input
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isLoading}
          />
          <Input
            placeholder="Nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={handlAddPost} disabled={isLoading}>
              {isLoading ? "Đang thêm..." : "Continue"}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ButtonAddPost;