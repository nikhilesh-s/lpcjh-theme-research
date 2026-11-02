"use client";
import { useRef, type ReactNode } from "react";
import { Scaled } from "./Scaled";

export function PagePreview({ title, children, pdf, png, className = "" }: { title: string; children: ReactNode; pdf: string; png?: string; className?: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  return (
    <figure className={`pv ${className}`}>
      <button type="button" className="pv-open" onClick={() => dlg.current?.showModal()} aria-label={`View ${title} full size`}>
        <span aria-hidden="true"><Scaled>{children}</Scaled></span>
      </button>
      <figcaption>
        <span className="pv-title">{title}</span>
        <span className="pv-links">
          <a href={pdf} download>PDF</a>
          {png && <a href={png} download>PNG</a>}
        </span>
      </figcaption>
      <dialog ref={dlg} className="pv-dialog" aria-label={title} onClick={(e) => { if (e.target === dlg.current) dlg.current?.close(); }}>
        <div className="pv-bar">
          <span>{title}</span>
          <span className="pv-links">
            <a href={pdf} download>PDF</a>
            {png && <a href={png} download>PNG</a>}
            <button type="button" onClick={() => dlg.current?.close()}>Close</button>
          </span>
        </div>
        <div className="pv-big" aria-hidden="true"><Scaled>{children}</Scaled></div>
      </dialog>
    </figure>
  );
}
