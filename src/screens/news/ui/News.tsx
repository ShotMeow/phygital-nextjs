"use client";
import type { FC } from "react";
import { useGetNews } from "@/src/entities/news";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const News: FC = () => {
  const { data: news } = useGetNews();
  return (
    <main className="container my-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {news?.map((post, index) => (
          <Link
            className={classNames({
              "sm:col-span-2 lg:col-span-4": index === 0,
            })}
            href={`/news/${post.id}`}
            key={post.id}
          >
            <article
              className={classNames(
                {
                  "flex-col lg:flex-row": index === 0,
                  "flex-col": index !== 0,
                },
                "flex h-full justify-between bg-zinc-900 relative",
              )}
              key={post.id}
            >
              <Image
                className={classNames(
                  {
                    "h-[400px]": index === 0,
                  },
                  "h-[200px] w-full object-cover p-2",
                )}
                src={post.artworkUrl}
                alt={post.title}
                width={1256}
                height={600}
              />
              {index === 0 && (
                <div className="absolute left-6 top-6 flex items-center gap-1 rounded-full bg-pink-200 px-3 py-2 text-sm font-semibold uppercase text-black">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 6 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.03125 4.5L4.09375 0.59375L3.9375 3.40625L5.96875 4.34375L2.84375 7.9375L1.59375 8.71875L2.21875 5.75L1.75 5.59375L0.03125 4.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Новое</span>
                </div>
              )}
              <div
                className={classNames(
                  {
                    "py-10": index === 0,
                  },
                  "flex h-full flex-col justify-between p-4 font-semibold",
                )}
              >
                <div>
                  <p className="mb-2 text-green">
                    {new Date(post.createdAt).toLocaleDateString("ru", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <h2
                    className={classNames(
                      {
                        "text-3xl": index === 0,
                        "text-xl": index !== 0,
                      },
                      "line-clamp-3",
                    )}
                  >
                    {post.title}
                  </h2>
                  {index === 0 && (
                    <p className="mt-5 line-clamp-5 text-lg font-medium text-zinc-500">
                      {post.description}
                    </p>
                  )}
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="mr-2 mt-2 rounded-full bg-white/5 px-4 py-2 uppercase text-zinc-400"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default News;
