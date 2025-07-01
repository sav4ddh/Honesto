'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className='bg-[#29115a] px-10 md:px-40 py-6 flex items-center justify-between'>
      <Link href={'/'} className='flex items-center'>
        <Image
          src={assets.logoImage}
          alt='logo__image'
          width={35}
          height={35}
        />
        <h1 className='text-2xl ml-1 font-bold'>Honesto</h1>
      </Link>

      <Button
        onClick={() => router.push('/login')}
        className='bg-violet-600 text-base cursor-pointer px-6 py-3 rounded-md'
      >
        Sign In
      </Button>
    </header>
  );
}
