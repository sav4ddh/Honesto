'use client';
import Image from 'next/image';
import { useState } from 'react';

import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [userID, setUserID] = useState<string>('honesto.com/');

  return (
    <div className='max-w-4/5 mx-auto mt-12 md:mt-0 space-y-8'>
      <div className='flex items-center justify-between flex-col-reverse md:flex-row'>
        <div className=''>
          <h1 className='text-5xl md:text-7xl font-bold'>
            Send anonymous messages
          </h1>
          <p className='my-4 text-gray-400 md:text-lg max-w-xl'>
            Sometimes people want to say things they wouldn’t say out loud. you
            can hear the real thoughts — organized and in your control.
          </p>

          <div className='relative mb-2 flex items-center max-w-md'>
            <Input
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              className='bg-white py-6 text-black'
              placeholder='honesto.com/anonymous-id'
            />
            <Button className='absolute py-6 bg-accent cursor-pointer hover:bg-[#e2ff29ab] text-black right-0 rounded-none rounded-r-md'>
              Verify User
            </Button>
          </div>

          <div className='max-w-md flex items-end justify-between'>
            <hr className='h-2 w-1/2 md:w-full mr-2' />
            <span className='w-full text-accent cursor-pointer underline'>
              or, create your profile.
            </span>
          </div>
        </div>

        <Image
          src={assets.heroImage}
          alt='hero__image'
          width={500}
          height={500}
          className='hidden md:block md:w-1/2 h-auto'
        />
      </div>
    </div>
  );
}
