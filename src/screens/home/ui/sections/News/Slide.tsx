import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import type { PostType } from "@/src/entities/news";
import { API_URL } from "@/src/shared/constants";
import { TagChip } from "@/src/entities/tags";

interface Props extends PostType {}

const Slide: FC<Props> = ({ id, artworkUrl, title, tags, createdAt }) => {
  return (
    <Link
      className="flex h-full flex-col justify-between bg-white dark:bg-white/5"
      href={`/news/${id}`}
    >
      <div className="max-h-[200px] min-h-[200px] w-full">
        <Image
          className="size-full object-cover p-2"
          src={`${API_URL}/images/${artworkUrl}`}
          alt={title}
          width={1256}
          height={600}
        />
      </div>
      <div className="flex h-full flex-col justify-between p-4 font-semibold">
        <div>
          <p className="mb-2 text-green">
            {new Date(createdAt).toLocaleDateString("ru", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h4 className="line-clamp-3 text-xl">{title}</h4>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          {tags?.slice(0, 3).map((tag) => <TagChip tag={tag} key={tag.id} />)}
        </div>
      </div>
    </Link>
  );
};

export default Slide;
