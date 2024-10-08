import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 sm:pl-14 py-3 border border-black'>

    <Image src={assets.logo} width={120}/>
      </div>

    <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
    <div className='w-[50%] sm:w-[80%] absolute right-0'>
    <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium py-2 px-3 bg-white shadow-[-5px_5px_0px_#000000]'>
        <Image src={assets.add_icon} width={28}/>
        <p>Add Bogs</p>
    </Link>

    <Link href='/admin/blogList' className='flex items-center border border-black gap-3 font-medium py-2 mt-5 px-3 bg-white shadow-[-5px_5px_0px_#000000]'>
        <Image src={assets.blog_icon} width={28}/>
        <p>Blog Lists</p>
    </Link>

    <Link  href='/admin/subscriptions' className='flex items-center border border-black gap-3 font-medium py-2  mt-5 px-3 bg-white shadow-[-5px_5px_0px_#000000]'>
        <Image src={assets.email_icon} width={28}/>
        <p>Subscriptions</p>
    </Link>
    </div>
   
    </div>

    </div>
  )
}

export default Sidebar
