'use client';
import {
  AtSign,
  Copy,
  Delete,
  Eye,
  EyeOff,
  Ghost,
  MessagesSquare,
  Trash2,
} from 'lucide-react';
import { assets } from '@/assets/assets';
import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ProfilePage() {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className='min-h-screen bg-gradient-to-br from-[#140D2C] to-[#1D133A] text-white p-4 md:p-8'>
      <div className='max-w-xl mx-auto mt-5'>
        <h1 className='text-2xl flex items-center font-bold mb-6'>
          <Ghost className='mr-1' />
          Profile Settings
        </h1>

        <div className='bg-[#2D1B5E]/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-[#1D133A]'>
          <div className='flex items-start'>
            <Image
              src={assets.profileImage}
              alt='profile__image'
              className='w-32 h-32 mr-2 rounded-full object-cover border-2 border-[#1D133A] p-1'
            />

            <div className='mt-3 flex flex-col'>
              <div className='flex items-center justify-between mb-1'>
                <h2 className='flex items-center font-bold tracking-wide text-xl'>
                  <AtSign strokeWidth={3} size={18} className='mr-1' />
                  Anandhu.K
                </h2>

                <Badge
                  onClick={() => setIsPublic(!isPublic)}
                  className={`cursor-pointer ${
                    !isPublic ? 'bg-[#E91E63]/20' : 'bg-[#9C27B0]/20'
                  }`}
                >
                  {isPublic ? <Eye size={18} /> : <EyeOff size={18} />}
                  {isPublic ? ' Public' : ' Private'}
                </Badge>
              </div>
              <p className='text-gray-300 mb-2'>
                Send me a message anonymously 👀 Got something to say? Now’s
                your chance.
              </p>

              <Badge variant={'default'}>1.2k Messages</Badge>
            </div>
          </div>

          <h3 className='mt-5 mb-2 text-xl font-semibold'>Share Profile</h3>
          <div className='flex'>
            <div className='w-1/3 p-1 h-fit border-3 border-gray-600 rounded-md shadow-sm'>
              <Image
                src={assets.qrCodeImage}
                className='rounded-md'
                alt='qr__code__img'
              />
            </div>
            <div className='w-2/3 ml-5'>
              <Button className='w-full cursor-pointer'>Share QR Code</Button>
              <div className='my-3 flex items-end justify-between'>
                <hr className='h-2 w-1/2' />
                <p className='w-full ml-4 text-gray-400'>Copy profile link</p>
                <hr className='h-2 w-1/2' />
              </div>
              <div className='w-full flex'>
                <Input
                  className='mr-2 tracking-wide'
                  value={'honesto.com/anandhu.k'}
                  readOnly
                />
                <Button className='cursor-pointer'>
                  <Copy />
                </Button>
              </div>

              <div className='flex w-full justify-between mt-3'>
                <Button className='cursor-pointer w-1/2 mr-1'>
                  View Messages <MessagesSquare />
                </Button>
                <Button className='cursor-pointer w-1/2 ml-1'>
                  Delete Profile <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
