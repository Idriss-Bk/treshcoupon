import Link from 'next/link'
import React from 'react'
import { BiLogoTiktok } from 'react-icons/bi'
import { BsSnapchat } from 'react-icons/bs'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'

const SocialBars = () => {
  return (
    <div>
        <h3 className='animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-md text-transparent font-semibold mb-2 uppercase'>Voulez-vous pirater ?</h3>
        <div className="">
            <div className='grid grid-cols-3 gap-1'>
                <Link href="/pirater-facebook">
                    <div className='bg-zinc-950 rounded h-[80px] flex justify-center items-center flex-col'>
                        <FaFacebookF className="text-zinc-100 text-3xl mb-1.5" />
                        <p className='text-sm text-zinc-300 font-semibold'>Facebook</p>
                    </div>
                </Link>
                <Link href="/pirater-snapchat">
                    <div className='bg-zinc-950 rounded h-[80px] flex justify-center items-center flex-col'>
                        <BsSnapchat className="text-zinc-100 text-3xl mb-1.5" />
                        <p className='text-sm text-zinc-300 font-semibold'>Snapchat</p>
                    </div>
                </Link>
                <div className='bg-zinc-950 rounded h-[80px] flex justify-center items-center flex-col'>
                    <FaInstagram className="text-zinc-100 text-3xl mb-1.5" />
                    <p className='text-sm text-zinc-300 font-semibold'>Instagram</p>
                </div>
                <div className='bg-zinc-950 rounded h-[80px] flex justify-center items-center flex-col'>
                    <FaWhatsapp className="text-zinc-100 text-3xl mb-1.5" />
                    <p className='text-sm text-zinc-300 font-semibold'>WhatsApp</p>
                </div>
                <div className='bg-zinc-950 rounded h-[80px] flex justify-center items-center flex-col'>
                    <GrLocation className="text-zinc-100 text-3xl mb-1.5" />
                    <p className='text-sm text-zinc-300 font-semibold'>Localisation</p>
                </div>
                <div className='bg-zinc-950 rounded h-[80px] flex justify-center items-center flex-col'>
                    <BiLogoTiktok className="text-zinc-100 text-3xl mb-1.5" />
                    <p className='text-sm text-zinc-300 font-semibold'>TikTok</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialBars