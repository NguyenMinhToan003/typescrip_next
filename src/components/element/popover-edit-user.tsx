import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function PopoverEditUser() {
  return (
    <Popover>
    <PopoverTrigger>
      <Button
        className='px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded'
        type='button'
      >
        <svg
          className=' w-4 h-4'
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='12' cy='12' r='1' />
          <circle cx='12' cy='5' r='1' />
          <circle cx='12' cy='19' r='1' />
        </svg>
      </Button>
    </PopoverTrigger>
    <PopoverContent className='w-40'>
      <button className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        <svg
          className=' w-4 h-4'
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5' />
          <polyline points='14 2 14 8 20 8' />
          <path d='M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z' />
        </svg>
        <span className='text-sm font-medium'>Sửa</span>
      </button>
      <button className='w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500'>
        <svg
          className=' w-4 h-4'
          fill='none'
          height='24'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          width='24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z' />
          <line x1='18' x2='12' y1='9' y2='15' />
          <line x1='12' x2='18' y1='9' y2='15' />
        </svg>
        <span className='text-sm font-medium'>Xóa</span>
      </button>
    </PopoverContent>
  </Popover>
  )
}