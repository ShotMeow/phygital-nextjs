"use client";
import type { FC } from "react";
import { useRouter } from "next/navigation";

import Button from "@/src/shared/ui/Button";

import Slider from "./Slider";
import Subtitle from "@/src/shared/ui/Subtitle";

const News: FC = () => {
  const router = useRouter();

  return (
    <section className="container overflow-x-hidden">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Subtitle>Новости</Subtitle>
        <Button onClick={() => router.push("/news")} variant="more">
          Посмотреть все
        </Button>
      </div>
      <Slider />
    </section>
  );
};

export default News;
