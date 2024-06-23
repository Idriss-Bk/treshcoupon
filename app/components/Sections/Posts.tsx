import React from "react";
import Image from "next/image";
import PostFeat from "@/public/post1.jpg";
import { LuClock4 } from "react-icons/lu";
import Link from "next/link";

const Posts = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl text-zinc-900 md:text-3xl mb-2 font-bold capitalize">
        Latest Posts
      </h2>
      <div className="">
        <Link href="/blog">
          <div className="border-b-2 border-slate-200 rounded-lg p-4 mt-7 hover:bg-transparent md:hover:bg-slate-200">
            <div className="lg:flex gap-4">
              <div className="lg:w-5/12">
                <div className="">
                  <Image
                    src={PostFeat}
                    alt="POST"
                    quality={100}
                    height={500}
                    width={800}
                    className="rounded-lg mb-3 md:mb-0"
                  />
                </div>
              </div>
              <div className="lg:w-7/12">
                <div className="">
                  <h3 className="text-2xl text-zinc-800 font-semibold mb-5">
                    How to buy a macbook pro in 2024?
                  </h3>
                  <div className="flex justify-start gap-2 mb-5">
                    <p className="border px-2 border-sky-400 rounded text-zinc-700 text-sm">
                      AliExpress
                    </p>
                    <p className="border px-2 border-yellow-500 rounded text-zinc-700 text-sm">
                      Amazon
                    </p>
                  </div>
                  <div className="blog-exp mb-3.5">
                    <p className="text-zinc-800 text-base font-normal">
                      Contributing to Open Source projects can be a game-changer
                      in a software developer&#34;s career. The experience helps you
                      connect with other developers...
                    </p>
                  </div>
                  <p className="text-zinc-900 text-sm font-bold">
                    <LuClock4 className="inline-block text-base relative -top-[1.3px] mr-0.5" />{" "}
                    06/18/2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <Link href="/blog">
        <button className="py-2 w-full bg-zinc-200 text-zinc-900 font-semibold rounded text-base mt-5">
          See all posts
        </button>
      </Link>
    </div>
  );
};

export default Posts;
