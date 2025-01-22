import { Icons } from '@/components/element/icons';
import PopoverEditUser from '@/components/element/popover-edit-user';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function UserPage({ children }: { children: React.ReactNode }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Avatar</TableHead>
          <TableHead scope="col">TênTên</TableHead>
          <TableHead scope="col">Email</TableHead>
          <TableHead scope="col">Vai trò</TableHead>
          <TableHead scope="col">Kiểu tài khoản</TableHead>
          <TableHead scope="col">Trạng thái</TableHead>
          <TableHead scope="col"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Avatar className="w-7 h-7">
              <AvatarImage
                src="https://yt3.ggpht.com/mKlZ7TlYPI2iivAuS5T1a2xfjPU_0kfSSmQG7b35Kg2F5XmEG35WLFYjz_-CPGHo1X_hkEMHSQ=s88-c-k-c0x00ffffff-no-rj"
                alt="User Avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </TableCell>
          <TableCell>WeWork</TableCell>
          <TableCell>A@gmail.com</TableCell>
          <TableCell>
            <Icons.user />
          </TableCell>
          <TableCell>
            <Icons.typeLocal />
          </TableCell>
          <TableCell>
            <span className="text-green-500">Active</span>
          </TableCell>
          <TableCell>
            <PopoverEditUser />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
