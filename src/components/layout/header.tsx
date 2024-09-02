import React from 'react';
import { NavigationMenuBar } from "@/components/system/Navigation/navbar";

// Definição das props para BackgroundPattern
interface BackgroundPatternProps {
  position: string;
  bottom?: string;
  right?: string;
  left?: string;
}

// Componente BackgroundPattern
const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  position,
  bottom,
  right,
  left,
}) => (
  <div
    className={`z-[-1] md:flex absolute ${position} ${bottom || ""} ${right || ""
      } ${left || ""} place-md:items-center`}
  >
    <div className="absolute h-[300px] w-full -translate-x-1/2 rounded-full bg-gradient-radial from-white to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:via-[#00FFFF] dark:opacity-10 sm:w-[480px] lg:h-[360px]" />
    <div className="absolute -z-20 h-[180px] w-full translate-x-1/3 bg-gradient-conic from-sky-200 via-blue-200 blur-2xl dark:from-sky-900 dark:via-[#0e7272] dark:opacity-40 sm:w-[240px]" />
  </div>
);

const Header = () => {
  return (
    <header>
      <NavigationMenuBar />
      <BackgroundPattern position="top-40 top-40" left="left-40 left-40" />
      <BackgroundPattern
        position="bottom-48 bottom-52"
        right="right-80 right-80"
      />
      <BackgroundPattern
        position="top-120 top-120"
        right="right-80 right-80"
      />
    </header>
  );
};

export default Header;