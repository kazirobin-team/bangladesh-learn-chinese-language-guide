"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

type Props = {
  children: ReactNode;
  onClose: () => void;
  wide?: boolean;
  dark?: boolean;
  label: string;
};

export function ModalShell({ children, onClose, wide, dark, label }: Props) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div
        aria-label={label}
        aria-modal="true"
        className={`modal-card ${wide ? "modal-wide" : ""} ${dark ? "modal-dark" : ""}`}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button aria-label="Close dialog" className="modal-close" onClick={onClose}><X /></button>
        {children}
      </div>
    </div>
  );
}
