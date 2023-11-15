import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import {fadeIn, textVariant} from '../utils/motion';
import { features } from '../constants';
import "./specs.css";
import { styles } from "../styles";


const FeatureCard = ({ index, title, icon, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [delayedHover, setDelayedHover] = useState(false);

  useEffect(() => {
    let delayTimer;
    if (isHovered) {
      delayTimer = setTimeout(() => {
        setDelayedHover(true);
      }, 500); // Delay time in milliseconds before allowing new hover
    } else {
      setDelayedHover(false);
    }

    return () => clearTimeout(delayTimer);
  }, [isHovered]);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="feature-card xs:w-[250px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
      variants={fadeIn("right","spring",0.5*index, 0.75)}
        whileHover={{ scale: 1.05 }}
        className="w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          style={{
            backgroundImage: `url(${icon})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col position-relative"
        >
          <h3 className="text-[20px] font-bold text-white text-center">
            {title}
          </h3>
        </div>
      </motion.div>

      {delayedHover && ( // Show the popup after the delay
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="popup-overlay"
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="popup"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '600px',
          height: '500px',
          borderRadius: '10px',
          position: 'relative', // Add position relative for pseudo-element positioning
        }}
      >
        <div
          className="popup-content"
          style={{
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative', // Add position relative for pseudo-element positioning
          }}
        >
          <h2 className="text-2xl font-bold italic text-white mb-2" style={{ zIndex: 1 }}>
            {title}
          </h2>
          <p className="text-lg font-semibold text-white" style={{ zIndex: 1 }}>
            {content}
          </p>
          <button className="close-button" onClick={handleMouseLeave} style={{ zIndex: 1 }}>
            Close
          </button>
        </div>
        {/* Add the following pseudo-element for the glow effect */}
        <style>
          {`
            .popup::after {
              content: '';
              position: absolute;
              top: -5px;
              left: -5px;
              right: -5px;
              bottom: -5px;
              border-radius: 15px;
              box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.7);
              animation: glow-animation 2s infinite alternate; /* Animate the glow */
            }
    
            @keyframes glow-animation {
              0% {
                box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.7);
              }
              100% {
                box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0);
              }
            }
          `}
        </style>
      </motion.div>
    </motion.div>
    
     
      )}
    </div>


  );
};

export const OpenPower = () => {
  return (
    <>
<motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Welcome To The OpenPower</h2>
</motion.div>

<motion.p variants={fadeIn("","",0.1,1)}
className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
>

OpenPower is not just a power bank; it's a versatile, high-capacity portable power solution with a focus on safety, convenience, and customization, all built on a fully open-source foundation.
</motion.p>
    
    <div className="mt-20 flex flex-wrap gap-10">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} index={index} {...feature} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(OpenPower, "openpower");