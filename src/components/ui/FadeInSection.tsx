import { useEffect, useRef, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection = ({ children, className = "", delay = 0 }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
