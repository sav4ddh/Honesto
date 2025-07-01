import AnonymousMessageBox from '@/components/layout/AnonymousMessageBox';
import MessageView from '@/components/layout/MessageView';
import { Ghost, MoreVertical, Search } from 'lucide-react';

export default function InboxPage() {
  return (
    <div
      className={`m-10 flex h-screen bg-gradient-to-br from-[#140D2C] to-[#1D133A] text-white items-center max-w-7xl justify-center md:mx-auto my-10`}
    >
      <div className='w-full md:w-96 h-screen border-r border-[#2D1B5E] bg-gradient-to-b from-[#140D2C] to-[#1D133A]'>
        <div className='p-4 border-b border-[#2D1B5E]'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-xl font-semibold'>Anonymous Messages</h1>
            <button className='p-2 rounded-full hover:bg-[#2D1B5E]'>
              <MoreVertical size={18} />
            </button>
          </div>

          <div className='relative'>
            <Search
              size={18}
              className='absolute left-3 top-3 text-[#BDBDBD]'
            />
            <input
              type='text'
              placeholder='Search Messages..'
              className='w-full pl-10 pr-4 py-2 rounded-lg bg-[#2D1B5E] text-white placeholder-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-[#9C27B0]'
            />
          </div>
        </div>

        <div className='overflow-y-auto h-[calc(100vh-110px)]'>
          <AnonymousMessageBox />
        </div>
      </div>

      <div className='flex-1 h-screen flex flex-col bg-gradient-to-b from-[#1D133A] to-[#140D2C]'>
        {true ? (
          <MessageView />
        ) : (
          <div className='flex-1 flex flex-col items-center justify-center text-[#BDBDBD]'>
            <div className='w-24 h-24 rounded-full bg-[#2D1B5E] flex items-center justify-center mb-4'>
              <Ghost size={36} />
            </div>
            <h3 className='text-xl font-medium mb-2'>Anonymous Messages</h3>
            <p className='max-w-md text-center px-4'>
              Select a anonymous chat to read alone!.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
