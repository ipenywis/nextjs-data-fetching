"use client";

import Link from "next/link";

export function Post(props: any) {
  const { post } = props;

  return (
    <div
      className="flex flex-col m-5 shadow-md ring-4 ring-transparent p-4
                  transition-all duration-300 hover:ring-pink-500 
                  cursor-pointer hover:scale-105 rounded-md bg-zinc-900/80
                  before:bg-gradient-to-r before:from-transparent before:via-white/10 "
    >
      <h4 className="text-white font-semibold text-xl">
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </h4>
    </div>
  );
}
