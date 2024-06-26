import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Message from "@/src/shared/ui/icons/Message";
import Instagram from "@/src/shared/ui/icons/Instagram";
import Telegram from "@/src/shared/ui/icons/Telegram";
import Youtube from "@/src/shared/ui/icons/Youtube";
import Vkontakte from "@/src/shared/ui/icons/Vkontakte";
import Tiktok from "@/src/shared/ui/icons/Tiktok";
import Title from "@/src/shared/ui/Title";

const About: FC = () => {
  return (
    <section className="container grid items-center gap-10 md:grid-cols-2">
      <Image
        src="/images/poster.png"
        alt="На фоне в виде логотипа изображены два баскетболиста"
        width={620}
        height={770}
        priority
      />
      <div className="space-y-8">
        <Title>Добро пожаловать на Baks.gg Ваш портал в мир турниров!</Title>
        <p className="lg:text-lg">
          Откройте для себя захватывающий мир киберспорта на Baks.gg, где
          страсть к играм сочетается с передовыми технологиями, создавая
          уникальные возможности для игроков всех уровней. На нашем сайте вы
          найдете все необходимое для участия в онлайн-турнирах по различным
          играм: от популярных шутеров и стратегий до спортивных симуляторов и
          многого другого.
          <br />
          <br />
          Присоединяйтесь к нашему сообществу, чтобы испытать свои силы в
          соревнованиях, улучшить свои навыки и стать частью глобального
          киберспортивного движения. Baks.gg – это ваш путь к вершинам
          киберспорта!
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-8 text-black xl:justify-start">
          <li>
            <Link aria-label="Ссылка на сообщество" href="#">
              <Message width={60} height={60} />
            </Link>
          </li>
          <li>
            <Link aria-label="Ссылка на Instagram" href="#">
              <Instagram width={60} height={60} />
            </Link>
          </li>
          <li>
            <Link aria-label="Ссылка на Telegram" href="#">
              <Telegram width={60} height={60} />
            </Link>
          </li>
          <li>
            <Link aria-label="Ссылка на Youtube" href="#">
              <Youtube width={60} height={60} />
            </Link>
          </li>
          <li>
            <Link aria-label="Ссылка на Vkontakte" href="#">
              <Vkontakte width={60} height={60} />
            </Link>
          </li>
          <li>
            <Link aria-label="Ссылка на Tiktok" href="#">
              <Tiktok width={60} height={60} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
