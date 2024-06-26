import Link from "next/link";
import Image from "next/image";
import { LuClock4 } from "react-icons/lu";
import { getBlurData } from "@/libs/blur-data-generator";
import { GRAPHQL_URL, GET_RANDOM_POSTS } from "@/app/graphql/home_blogs";

export default async function AllBlogPosts() {
  function limitWords(text: string, limit: number): string {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  }

  const { data } = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_RANDOM_POSTS,
    }),
    next: { revalidate: 120 },
  }).then((res) => res.json());

  let blogPosts = data?.posts?.edges;

  const blurDataPromises = blogPosts?.map(async (post: any) => {
    if (post.node.featuredImage) {
      const imageUrl = post.node.featuredImage.node.sourceUrl;
      const { base64 } = await getBlurData(imageUrl);
      return base64;
    }
    return null;
  });

  await Promise.all(blurDataPromises).then((blurDataArray) => {
    blogPosts?.forEach((post: any, index: number) => {
      if (post.node.featuredImage) {
        post.node.featuredImage.node.blurDataURL = blurDataArray[index];
      }
    });
  });

  return (
    <>
      <h2 className="text-2xl text-zinc-900 md:text-3xl mb-2 font-bold capitalize">
        Latest Posts
      </h2>
      <div className="mt-7">
        {blogPosts?.map(
          (post: {
            node: any;
            title: any;
            featuredImage: any;
            categories: any;
          }) => (
            <Link href={`/blog/${post.node.slug}`}>
              <div className="py-4 border-b-[1px] border-slate-200 mt-2 hover:bg-transparent md:hover:bg-slate-200">
                <div className="lg:flex gap-4">
                  <div className="lg:w-5/12">
                    <div className="">
                      <Image
                        src={post.node.featuredImage.node.sourceUrl}
                        alt={post.node.title}
                        quality={100}
                        height={400}
                        width={800}
                        className="rounded-lg mb-3 md:mb-0"
                        placeholder="blur"
                        blurDataURL={
                          post.node.featuredImage.node.blurDataURL || undefined
                        }
                      />
                    </div>
                  </div>
                  <div className="lg:w-7/12">
                    <div className="">
                      <h3 className="text-2xl text-zinc-800 font-semibold mb-5">
                        {limitWords(post.node.title, 8)}
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
                          Contributing to Open Source projects can be a
                          game-changer in a software developer&#34;s career. The
                          experience helps you connect with other developers...
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
          )
        )}
      </div>
      <Link href="/blog">
        <button className="py-2 w-full bg-zinc-200 text-zinc-900 font-semibold rounded text-base mt-5">
          See all posts
        </button>
      </Link>
    </>
  );
}
