import { Ghost } from 'lucide-react';

export default function AnonymousMessageBox({}) {
  return (
    <div className='p-4 border-b border-[#2D1B5E] cursor-pointer hover:bg-[#2D1B5E]/50 transition-colors'>
      <div className='flex items-start gap-3'>
        <div className='relative'>
          <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center'>
            <Ghost size={20} />
          </div>
        </div>

        <div className='flex-1 min-w-0'>
          <div className='flex justify-between items-baseline'>
            <h3 className='font-medium truncate'>Anonymous</h3>
            <span className='text-xs text-[#BDBDBD]'>07:24 AM</span>
          </div>
          <p className=' text-sm text-[#BDBDBD] truncate'>
            What do you think about the new policy?
          </p>
        </div>
      </div>
    </div>
  );
}
