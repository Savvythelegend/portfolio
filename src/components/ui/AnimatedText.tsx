
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  as?: React.ElementType;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  as: Component = 'h1',
  delay = 0,
}) => {
  const textRef = useRef<HTMLElement>(null);
  const isInView = useInView(textRef, { once });

  useEffect(() => {
    if (!textRef.current) return;
    
    const node = textRef.current;
    const spans = node.querySelectorAll('span');
    
    spans.forEach((span, index) => {
      if (isInView) {
        setTimeout(() => {
          span.classList.add('translate-y-0', 'opacity-100');
        }, delay + index * 40);
      } else {
        span.classList.remove('translate-y-0', 'opacity-100');
      }
    });
  }, [isInView, delay]);

  return (
    <Component
      ref={textRef}
      className={cn("relative overflow-hidden", className)}
    >
      {text.split(' ').map((word, i) => (
        <React.Fragment key={`${word}-${i}`}>
          {word.split('').map((char, j) => (
            <span
              className="inline-block translate-y-[100%] opacity-0 transition-transform duration-500 ease-out"
              key={`${char}-${j}`}
              style={{
                transitionDelay: `${j * 40}ms`,
              }}
            >
              {char}
            </span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </React.Fragment>
      ))}
    </Component>
  );
};

// Simple InView hook implementation
function useInView(
  ref: React.RefObject<Element>,
  options: { once?: boolean; threshold?: number; rootMargin?: string } = {}
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && options.once) {
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options.once, options.threshold, options.rootMargin]);

  return isIntersecting;
}

export default AnimatedText;
