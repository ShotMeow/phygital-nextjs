import type { FC } from "react";
import Link from "next/link";

import { headerNavigationData } from "../constants/headerNavigationData";
import { getIcon } from "../utils/getIcon";

const MobileNavbar: FC = () => {
  return (
    <div className="fixed inset-x-0 bottom-6 z-20 lg:hidden">
      <div className="container">
        <nav className="relative rounded-full border border-white/5 bg-white/5 p-4 text-xs backdrop-blur-lg before:absolute before:left-0 before:top-0 before:-z-10 before:size-full before:rounded-full before:bg-gradient-to-r before:from-yellow/5 before:via-black before:to-lilac/5 sm:gap-8">
          <ul className="flex items-center justify-between gap-6 overflow-x-auto px-4">
            {headerNavigationData.map((navItem) => (
              <li key={navItem.url}>
                <Link
                  className="flex flex-col items-center gap-2"
                  href={navItem.url}
                >
                  {getIcon(navItem.title)}
                  <span>{navItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
