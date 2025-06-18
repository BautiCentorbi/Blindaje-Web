import React from "react";
import * as motion from "motion/react-client";

const MainButton = (props) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
      whileTap={{ scale: 0.97 }}
      aria-label={props.ariaLabel}
      className="shadow-xl shadow-dk_primary/20 w-full bg-dk_primary dark:text-black text-white px-6 py-3 text-sm md:text-lg rounded-xl font-semibold hover:bg-dk_primary/80 transition-colors"
    >
      {props.label}
    </motion.button>
  );
};

export default MainButton;
