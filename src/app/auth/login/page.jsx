import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"

function Login() {
  return (
    <div>
        <div className='flex justify-between h-[58px] p-2 font-bold'>
            <span className='text-[#BB9039]'>Shir O Khurshid</span>
            <button className='text-[#BB9039] flex items-center justify-center'><RxHamburgerMenu/></button>
        </div>
    </div>
  )
}

export default Login