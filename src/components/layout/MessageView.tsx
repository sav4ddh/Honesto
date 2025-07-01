'use client';
import {
  Star,
  MoreVertical,
  Eye,
  Share2,
  Trash2,
  Tag,
  Ghost,
} from 'lucide-react';
import { useState } from 'react';

export default function MessageView() {
  const [showMenu, setShowMenu] = useState(false);
  const [isStarred, setIsStarred] = useState(true);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className='flex flex-col h-full bg-gradient-to-b from-[#1D133A] to-[#140D2C] text-white'>
      {/* Message Header */}
      <div className='p-4 border-b border-[#2D1B5E] flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center'>
            <Ghost className='text-white' size={20} />
          </div>
          <h2 className='font-semibold'>Honesto</h2>
        </div>

        <div className='flex items-center gap-2'>
          <button
            className='p-2 rounded-full hover:bg-[#2D1B5E]'
            onClick={() => setIsStarred(!isStarred)}
          >
            <Star
              className={isStarred ? 'text-yellow-400 fill-yellow-400' : ''}
              size={20}
            />
          </button>

          <div className='relative'>
            <button
              className='p-2 rounded-full hover:bg-[#2D1B5E]'
              onClick={() => setShowMenu(!showMenu)}
            >
              <MoreVertical size={20} />
            </button>

            {showMenu && (
              <div className='absolute right-0 mt-2 w-48 bg-[#2D1B5E] rounded-md shadow-lg z-10 border border-[#3D2B6E]'>
                <div className='py-1'>
                  <button className='flex items-center px-4 py-2 text-sm w-full hover:bg-[#3D2B6E]'>
                    <Eye className='mr-2' size={16} /> Mark as read
                  </button>
                  <button className='flex items-center px-4 py-2 text-sm w-full hover:bg-[#3D2B6E]'>
                    <Share2 className='mr-2' size={16} /> Share
                  </button>
                  <button className='flex items-center px-4 py-2 text-sm w-full hover:bg-[#3D2B6E]'>
                    <Tag className='mr-2' size={16} /> Add label
                  </button>
                  <button className='flex items-center px-4 py-2 text-sm w-full text-red-400 hover:bg-[#3D2B6E]'>
                    <Trash2 className='mr-2' size={16} /> Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Message Content */}
      <div className='flex-1 overflow-y-auto p-8 bg-[#1D133A] bg-opacity-50 flex items-center justify-center'>
        <div className='max-w-2xl w-full'>
          <div className='p-6 rounded-lg bg-gradient-to-r from-[#E91E63]/15 to-[#9C27B0]/15'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 rounded-full bg-[#2D1B5E] flex items-center justify-center'>
                <Ghost size={16} />
              </div>
              <span className='text-xs text-[#BDBDBD]'>Anonymous</span>
            </div>
            <p className='text-lg mb-4'>
              Sometimes the quietest moments speak the loudest. You’re stronger
              than you think, even on the days you feel invisible. Keep going.
            </p>
            <span className='text-xs text-[#BDBDBD]'>2025 June 28</span>
          </div>
        </div>
      </div>
    </div>
  );
}
