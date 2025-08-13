import React from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number; // seconds between letters
  delay?: number; // delay before starting the animation
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 0.04,
  delay = 0,
  className,
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: speed,
        delayChildren: delay,
      },
    },
  } as const;

  const child = {
    hidden: { opacity: 0, y: 4 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.12, ease: "easeOut" } },
  } as const;

  return (
    <span className={className}>
      {/* Screen readers get the full text at once */}
      <span className="sr-only">{text}</span>
      {/* Visual typewriter animation */}
      <motion.span
        aria-hidden="true"
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline-block break-normal hyphens-none"
      >
        {letters.map((char, i) => (
          <motion.span key={i} variants={child} className="inline">
            {char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
};

export default TypewriterText;
