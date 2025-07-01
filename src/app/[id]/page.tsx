import { assets } from '@/assets/assets';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SendHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function SendMessage() {
  return (
    <div className='max-w-2xl mx-auto p-5 space-y-8 flex items-center justify-center min-h-[85vh]'>
      <Card className='bg-[#29115a] border-none shadow-2xl rounded-none'>
        <CardContent className='p-6 space-y-4'>
          <div className='bg-[#1d0f3f] flex items-start p-5 rounded-xl text-lg font-medium text-white shadow-inner'>
            <div className='flex items-center mr-2 justify-between p-2 bg-primary rounded-full w-12 h-12 border-2 border-white'>
              <Image
                src={assets.logoImage}
                className=''
                alt='logo__image'
                width={30}
                height={30}
              />
            </div>
            <div className=''>
              <h3 className='text-white font-semibold'>@sav4dhh</h3>
              <p className='text-sm italic text-gray-400'>
                @sav4ddhh. wants to hear from you anonymously
              </p>
            </div>
          </div>
          <textarea
            className='w-full bg-[#1d0f3f] text-white rounded-xl px-4 py-3 text-md focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none'
            rows={8}
            placeholder='Type your anonymous message here...'
          ></textarea>
          <Button className='w-full bg-violet-600 hover:bg-violet-700 flex items-center cursor-pointer justify-center transition-all duration-300 text-white font-semibold py-2 rounded-xs'>
            <p className=''>Send Anonymously</p>
            <SendHorizontal strokeWidth={3} className='w-4 h-4 ml-2' />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
