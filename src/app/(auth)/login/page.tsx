'use client';
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ChevronRight,
  Ghost,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-[#140D2C] to-[#1D133A] p-4'>
      <div className='w-full max-w-md'>
        <div className='mb-8 flex items-center justify-center space-x-4'>
          <div className='w-20 h-20 rounded-full flex items-center justify-center'>
            <Image src={assets.registerImage} alt='ghost__icon' />
          </div>
          <div className=''>
            <h1 className='text-3xl font-bold text-white mb-2'>
              Login to your Account
            </h1>
            <p className='text-[#BDBDBD]'>
              Enter your credentials to continue with anonymous
            </p>
          </div>
        </div>

        <form className='space-y-5'>
          <div>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Mail className='text-[#CE93D8]' size={18} />
              </div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                className={`w-full pl-10 pr-4 py-3 rounded-lg bg-[#2D1B5E] text-white placeholder-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-red-500' : 'focus:ring-[#9C27B0]'
                }`}
              />
            </div>
          </div>

          <div>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Lock className='text-[#CE93D8]' size={18} />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                placeholder='Password'
                className={`w-full pl-10 pr-10 py-3 rounded-lg bg-[#2D1B5E] text-white placeholder-[#BDBDBD] focus:outline-none focus:ring-2 focus:ring-[#9C27B0]`}
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 pr-3 flex items-center'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className='text-[#BDBDBD]' size={18} />
                ) : (
                  <Eye className='text-[#BDBDBD]' size={18} />
                )}
              </button>
            </div>
          </div>

          <button
            type='submit'
            className='w-full py-3 px-4 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center'
          >
            Login to Account
            <ChevronRight className='ml-1' size={18} />
          </button>
        </form>

        <div className='mt-6 text-center'>
          <p className='text-[#BDBDBD]'>
            Don't have an account yet ?{' '}
            <Link href='/login' className='text-[#F48FB1] hover:underline'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
