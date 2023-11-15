import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import Typewriter from 'typewriter-effect';

export const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Your other content goes here */}
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#openpower">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      {/* Typewriter Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[40px] font-black">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              'Hey There',
              'Welcome To The Powered Project',
              'Scroll Down To See More',
            ],
          }}

        />
      </div>
    </section>
  );
};

export default Home;
