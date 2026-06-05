import { useEffect, useRef, useState } from "react";

/**
 * Reveal — fades/slides children in once they scroll into view.
 * Respects prefers-reduced-motion (renders final state immediately).
 *
 * Usage: <Reveal><h2>…</h2></Reveal>
 *        <Reveal as="section" className="sec">…</Reveal>
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}