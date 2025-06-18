import React from "react";
import * as motion from "motion/react-client";

const SecondaryButton = (props) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
      whileTap={{ scale: 0.97 }}
      aria-label={props.ariaLabel}
      className="shadow-lg shadow-dark/10 w-full px-6 py-3 text-sm md:text-lg rounded-xl dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors"
    >
      {props.label}
      {props.children}
    </motion.button>
  );
};

export default SecondaryButton;
