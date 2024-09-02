import React from 'react';
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Social = () => {
  return (
    <div className="hidden md:flex md:flex-col md:ml-8 md:mr-2 md:justify-center md:items-center md:space-y-4 lg:flex lg:flex-col lg:ml-8 lg:mr-2 lg:justify-center lg:items-center lg:space-y-4">
      <span className="md:w-0.5 md:h-1/6 md:mb-52 md:fixed md:-bottom-11 md:bg-foreground lg:w-0.5 lg:h-1/6 lg:mb-52 lg:fixed lg:-bottom-11 lg:bg-foreground"></span>
      <div className="md:space-y-3 md:fixed md:bottom-14 md:z-20 lg:space-y-3 lg:fixed lg:bottom-14 lg:z-20">
        <InstagramLogoIcon className="cursor-pointer md:h-5 md:w-5 lg:h-5 lg:w-5 hover:text-primary" />
        <LinkedInLogoIcon className="cursor-pointer md:h-5 md:w-5 lg:h-5 lg:w-5 hover:text-primary" />
        <GitHubLogoIcon className="cursor-pointer md:h-5 md:w-5 lg:h-5 lg:w-5 hover:text-primary" />
      </div>
    </div>
  );
};

export default Social;



