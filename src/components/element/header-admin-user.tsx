import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Icons } from "./icons";

export default function HeaderAdminUser() {
  return (
   <div className="flex justify-between items-center gap-3">
      <div className="flex gap-3 w-1/2">
        <Input
          type="text"
          placeholder="Tìm kiếm người dùng"
        />
        <Button>Tìm kiếm</Button>
      </div>
      <Button><Icons.plus/>Thêm</Button>
   </div>
  ); 
}