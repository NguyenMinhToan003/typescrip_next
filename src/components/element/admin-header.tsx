import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { auth } from '@/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const AdminDashboard = async () => {
  const session = await auth();
  
  return (
    <div className="h-12 w-full bg-gray-100 text-gray-800 p-4 flex justify-end items-center">
      <div className="flex gap-4">
        <p className="leading-7">Hello {session?.user.name}</p>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-7 h-7">
              <AvatarImage
                src="https://yt3.ggpht.com/mKlZ7TlYPI2iivAuS5T1a2xfjPU_0kfSSmQG7b35Kg2F5XmEG35WLFYjz_-CPGHo1X_hkEMHSQ=s88-c-k-c0x00ffffff-no-rj"
                alt="User Avatar"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem className='text-red-500'>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default AdminDashboard;