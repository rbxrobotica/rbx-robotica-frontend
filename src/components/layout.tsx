import React from 'react';
import Header from './layout/header';
import Aside from "./layout/aside";
import Social from "./layout/social";
import Footer from "@/components/layout/footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <div className="max-w-screen flex">
        <Social />
        <div>
          <Header />

          <main className="container mt-16">
            {children}
          </main>
        </div>
        <Aside title={title}/>
      </div>
      <Footer />
      <br className="flex md:hidden lg:hidden" />
    </div>

  );
};

export default Layout;