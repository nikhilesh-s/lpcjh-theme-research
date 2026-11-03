"use client";
import { useState } from "react";
import type { Swatch } from "@/art/tokens";
import { rgb } from "@/art/tokens";

export function PaletteStrip({ swatches, label }: { swatches: Swatch[]; label: string }) {
  const [open, setOpen] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (hex: string) => {
    try { await navigator.clipboard.writeText(hex); setCopied(hex); setTimeout(() => setCopied(null), 1400); } catch { /* clipboard unavailable */ }
  };
  return (
    <div className="pal" role="group" aria-label={label}>
      {swatches.map((s, i) => (
        <div
          key={s.hex}
          className="pal-sw"
          data-open={open === i}
          onMouseEnter={() => setOpen(i)}
          style={{ background: s.hex, color: s.on, flexGrow: open === i ? 5 : 1 }}
        >
          <button type="button" className="pal-name" aria-expanded={open === i} onClick={() => setOpen(i)} onFocus={() => setOpen(i)}>{s.name}</button>
          <div className="pal-detail" hidden={open !== i}>
            <span>{s.role}</span>
            <span className="pal-mono">{s.hex} · RGB {rgb(s.hex)}</span>
            <span className="pal-mono">palette-0 {s.step}</span>
            <button type="button" className="pal-copy" onClick={() => copy(s.hex)}>{copied === s.hex ? "Copied" : "Copy HEX"}</button>
          </div>
        </div>
      ))}
    </div>
  );
}
