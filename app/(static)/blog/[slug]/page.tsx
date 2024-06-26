import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import Image from 'next/image'
import SingleImg from "@/public/post1.jpg"

const SinglePost = () => {
  return (
    <article className='px-4 md:px-0 mb-16'>
        <div className=''>
            <Link href="/blog" className="text-zinc-800 hover:text-zinc-700 font-normal text-md"><IoIosArrowRoundBack className="inline-block text-2xl relative -top-[1px]" /> Retour au blog</Link>
            <h1 className='text-left mb-4 mt-3 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl'>How to make a tag system with react</h1>
            <div className='flex justify-between mb-6'>
                <p className='text-zinc-800 text-md font-normal capitalize'>auteur: <Link href="https://www.linkedin.com/in/idriss-boukdir-5120a6280/" target='_blank' className='lowercase animate-text-gradient bg-gradient-to-r from-[#2d256a] via-[#8678f9] to-[#9aacf5] bg-[200%_auto] bg-clip-text text-transparent'>@drissboukdir</Link></p>
                <p className='text-zinc-800 text-md font-normal'>Saturday, December 9, 2024</p>
            </div>
            <div className='mb-4'>
                <Image
                    src={SingleImg}
                    alt="POST"
                    quality={100}
                    height={500}
                    width={900}
                />
            </div>
            <div className='single-post'>
                <p className='text-zinc-900 text-md mt-7 mb-7'>The objective of this article is to help you to create a nice looking tag system with different colors and functions for each tag name in your react blog or site.</p>
                <h2 className='text-2xl text-zinc-900 font-bold'>Motivation</h2>
                <p className='text-zinc-900 text-md mt-7 mb-7'>The idea here is to create a component called “Tag.tsx”, or whatever you want, that will have one property, the name of the tag. With this property the component will know what are the attributes of this tag, e.g., the background color of the tag. Now, just follow these steps:</p>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
                <h2 className='text-2xl text-zinc-900 font-bold'>1. Create a react component</h2>
                <p className='text-zinc-900 text-md mt-7 mb-7'>The objective of this article is to help you to create a nice looking tag system with different colors and functions for each tag name in your react blog or site.</p>
                <h3 className='text-xl text-zinc-900 font-bold'>1. Create a react component</h3>
                <p className='text-zinc-900 text-md mt-7 mb-7'>The objective of this article is to help you to create a nice looking tag system with different colors and functions for each tag name in your react blog or site.</p>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
                <Link href="/" className='bg-amber-500 text-zinc-900 font-bold px-6 py-3 rounded'>Commancer maintenant</Link>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
                <h4 className='text-lg text-zinc-900 font-bold'>1. Create a react component</h4>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
                <p className='text-zinc-900 text-md mt-7 mb-7'>That is all, in this article you learned how to create different colors for each tag name using a map, but you can apply this concept for whatever functionality you want, e.g., relate a different link for each tag, so the user can click and be led to a page that shows just articles with this tag.</p>
            </div>

        </div>
    </article>
  )
}

export default SinglePost