import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxWrapperProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  offset?: ["start end" | "end start" | "start start" | "end end", "start end" | "end start" | "start start" | "end end"];
}

const ParallaxWrapper = ({ children, className = "", speed = 0.3, offset = ["start end", "end start"] }: ParallaxWrapperProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxWrapper;
