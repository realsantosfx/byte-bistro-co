import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  contain?: boolean;
}

const ParallaxImage = ({ src, alt, className = "", speed = 0.15, contain = false }: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the viewport the element is
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      // Only apply effect when element is in view
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // Center the effect around 0.5 (middle of viewport)
        const centeredProgress = (scrollProgress - 0.5) * 2;
        setOffset(centeredProgress * 50 * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden ${className}`}
    >
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full transition-transform duration-100 ease-out ${contain ? 'object-contain' : 'object-cover'}`}
        style={{ 
          transform: `translateY(${offset}px) scale(${contain ? 1 : 1.1})`,
        }}
      />
    </div>
  );
};

export default ParallaxImage;
