import React from 'react';


interface AsideProps {
  title: string;
}

const Aside: React.FC<AsideProps> = ({ title }) => {

  return (
    <div className="md:flex md:flex-col md:mr-8 md:justify-center md:items-center md:space-y-4 lg:flex lg:flex-col lg:mr-8 lg:justify-center lg:items-center lg:space-y-4">
      <p className="vertical-text text-xl tracking-[.9rem]">{title}</p>
    </div>
  );
};

export default Aside;



