import React from 'react';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import "./nav.css";

const Order = () => {
  return (
    <div>
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>PRE ORDER NOW</p>
          <h2 className={styles.sectionHeadText}>Get The OpenPower ASAP!!!</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-4 mb-2 text-secondary text-[17px] max-w-3xl leading-[30px]`}
        >
          Click the Button Below to go to the Pre Order Page
        </motion.p>

        {/* Button for Pre Order */}
        <motion.a
          href="https://forms.gle/t81S2ssG63wUciGq8"
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeIn("", "", 0.2, 1)}
          className={`button mb-4`}
        >
          PRE ORDER NOW
        </motion.a>
      </>
    </div>
  );
};

export default SectionWrapper(Order, "order");
