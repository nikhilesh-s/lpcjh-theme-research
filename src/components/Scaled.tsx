"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Scales a fixed-size page (default Letter at 96 dpi) to the width of its parent. */
export function Scaled({ children, w = 816, h = 1056 }: { children: ReactNode; w?: number; h?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.4);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setS(e.contentRect.width / w));
    ro.observe(el);
    return () => ro.disconnect();
  }, [w]);
  return (
    <div ref={ref} style={{ width: "100%", aspectRatio: `${w} / ${h}`, position: "relative", overflow: "hidden" }}>
      <div style={{ width: w, height: h, transform: `scale(${s})`, transformOrigin: "0 0", position: "absolute", left: 0, top: 0 }}>{children}</div>
    </div>
  );
}
