"use client";

import { useEffect, useRef, useState, useCallback, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    const el = ref.current;
    if (!el || isVisible) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 100) {
      setIsVisible(true);
    }
  }, [isVisible]);

  useEffect(() => {
    // Check immediately on mount
    checkVisibility();

    // Also check on scroll
    window.addEventListener("scroll", checkVisibility, { passive: true });
    // And after a brief delay for SSR hydration
    const timer = setTimeout(checkVisibility, 100);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      clearTimeout(timer);
    };
  }, [checkVisibility]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
