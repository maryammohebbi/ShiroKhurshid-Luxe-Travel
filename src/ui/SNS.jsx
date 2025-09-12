import React from 'react'
import { ImFacebook2 } from 'react-icons/im'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrYoutube } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FaGooglePlusG } from 'react-icons/fa'
import Link from 'next/link'

function SNS() {
  return (
    <div className="w-[60%] flex justify-between text-white text-xl mx-auto mt-auto p-3">
      <Link href={'#'}>
        <ImFacebook2 />
      </Link>
      <Link href={'#'}>
        <FaLinkedinIn />
      </Link>
      <Link href={'#'}>
        <GrYoutube />
      </Link>
      <Link href={'#'}>
        <BsInstagram />
      </Link>
      <Link href={'#'}>
        <FaGooglePlusG />
      </Link>
    </div>
  )
}

export default SNS
