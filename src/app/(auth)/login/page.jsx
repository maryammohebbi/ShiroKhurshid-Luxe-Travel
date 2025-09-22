'use client'
import FormButton from '@/ui/FormButton'
import SNS from '@/ui/SNS'
import TextField from '@/ui/TextField'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

function Login() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex justify-between items-center h-[58px] p-5 font-bold">
        <span className="text-secondary">Shir O Khurshid</span>
        <button className="text-secondary flex items-center justify-center cursor-pointer">
          <RxHamburgerMenu className="w-6 h-6" />
        </button>
      </div>
      <Image
        src={'/dushanbe_cropped.png'}
        width={'393'}
        height={'311'}
        alt="dushanbe"
        className="mb-2"
      />
      <div className="mb-7">
        <h3 className="text-sm font-bold text-white px-5">Login</h3>
      </div>
      <form className="px-5 mb-1">
        <TextField title="Email" />
        <TextField title="Enter Password" type="password" />
        <FormButton title="Send" />
      </form>
      <Link href={'#'}>
        <p className="text-white text-right p-5 text-sm">Forgot Password</p>
      </Link>
      <SNS />
    </div>
  )
}

export default Login
