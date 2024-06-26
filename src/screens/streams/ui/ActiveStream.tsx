import { type FC, useState } from "react";
import classNames from "classnames";
import { TwitchPlayer } from "react-twitch-embed";
import Image from "next/image";

import type { StreamType } from "@/src/entities/streams";
import { API_URL } from "@/src/shared/constants";
import DarkGradientToTop from "@/src/shared/ui/DarkGradientToTop";

interface Props extends StreamType {}

const ActiveStream: FC<Props> = ({
  channel,
  title,
  description,
  posterUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative">
      <div className="h-[240px] md:h-[400px] xl:h-[600px]">
        <DarkGradientToTop />
        {isPlaying ? (
          <TwitchPlayer
            onPause={handleClick}
            channel={channel}
            width="100%"
            height="100%"
          />
        ) : (
          <Image
            className="relative -z-20 size-full object-cover"
            width={1920}
            height={1080}
            src={`${API_URL}/images/${posterUrl}`}
            alt={title}
          />
        )}
      </div>
      <button
        aria-label="Включить стрим"
        onClick={handleClick}
        className={classNames(
          {
            "opacity-0": isPlaying,
          },
          "absolute z-10 left-1/2 top-1/2 flex size-24 lg:size-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur-md transition-all duration-500",
        )}
      >
        {!isPlaying ? (
          <svg
            width="36"
            height="46"
            viewBox="0 0 36 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.15736 1.05283C1.87086 0.6633 2.74011 0.694436 3.42391 1.13402L34.535 21.134C35.1711 21.5429 35.5556 22.2472 35.5556 23.0033C35.5556 23.7594 35.1711 24.4637 34.535 24.8726L3.42391 44.8726C2.74011 45.3122 1.87086 45.3433 1.15736 44.9538C0.443863 44.5642 0 43.8162 0 43.0033V3.00331C0 2.1904 0.443863 1.44237 1.15736 1.05283Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="46"
            height="56"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H6C5.44772 21 5 20.5523 5 20V4Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20V4Z"
              fill="white"
            />
          </svg>
        )}
      </button>
      <div
        className={classNames(
          {
            "opacity-0": isPlaying,
          },
          "absolute inset-x-4 bottom-4 lg:inset-x-14 lg:bottom-14 transition-all duration-500 text-white",
        )}
      >
        <h3 className="line-clamp-1 font-semibold sm:text-3xl">{title}</h3>
        <p className="line-clamp-2 sm:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ActiveStream;
