import React from 'react';

const Footer = () => {
  return (
    <footer className="text-sx text-center md:bg-gray-400 md:h-auto mt-24 md:mt-0 md:p-2 md:bg-clip-padding md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-10 lg:bg-gray-400 lg:h-auto lg:mt-24 lg:p-2 lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-lg lg:bg-opacity-10">
      © 2024 RBX Robótica.{" "}
      <span className="underline underline-offset-2 text-primary">
        Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;