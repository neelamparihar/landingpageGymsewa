import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const TypewriterEffect = ({ words, className, cursorClassName }) => {
  // Split text inside of words into array of characters

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const childVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
  if (!Array.isArray(words) || words.length === 0) {
    console.error("The 'words' prop must be a non-empty array");
    return null;
  }
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));
  return (
    <div
      className={`text-4xl sm:text-5xl lg:text-5xl font-bold text-center ${className}`}
    >
      {" "}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="inline"
      >
        {" "}
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {" "}
            {word.text.map((char, index) => (
              <motion.span
                key={`char-${index}`}
                variants={childVariants}
                className="text-black opacity-0 hidden"
              >
                {" "}
                {char}{" "}
              </motion.span>
            ))}{" "}
            &nbsp;{" "}
          </div>
        ))}{" "}
      </motion.div>{" "}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-none ${cursorClassName}`}
      ></motion.span>{" "}
    </div>
  );
};

export default TypewriterEffect;
