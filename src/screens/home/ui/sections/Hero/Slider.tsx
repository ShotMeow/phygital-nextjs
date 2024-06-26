import { type FC, useState } from "react";
import { Spin } from "@gravity-ui/uikit";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useGetNews } from "@/src/entities/news";

import Slide from "./Slide";
import Pagination from "./Pagination";

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Инициализируем начальный индекс
  const {
    data: news,
    isLoading,
    isSuccess,
  } = useGetNews({
    take: 5,
  });

  return (
    <>
      <Swiper
        className="container h-[300px] !overflow-visible md:h-[600px]"
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        spaceBetween={60}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
      >
        {isSuccess &&
          news.data?.map((post) => (
            <SwiperSlide key={post.id}>
              <Slide {...post} />
            </SwiperSlide>
          ))}
        {isLoading && (
          <SwiperSlide className="!flex items-center justify-center">
            <Spin size="xl" />
          </SwiperSlide>
        )}
      </Swiper>
      <div className="mt-6 h-1">
        {news && <Pagination news={news.data} activeIndex={activeIndex} />}
      </div>
    </>
  );
};

export default Slider;
