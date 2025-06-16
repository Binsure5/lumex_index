import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6 flex justify-center -translate-y-[200px]">
          <Image
            src="/LumexWeb/images/lumex_log_2.png"
            alt="LUMEX"
            width={300}
            height={75}
            priority
            className="w-[300px] h-auto"
          />
        </div>
        <div className="-translate-y-[200px]">
          <h2 className="text-2xl md:text-3xl mb-4">
            {subtitle}
          </h2>
          <p className="text-lg md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 