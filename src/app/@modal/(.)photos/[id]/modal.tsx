"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="h-screen w-screen bg-background/85 text-foreground"
      onClose={onDismiss}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
