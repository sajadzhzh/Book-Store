"use client";

import { MouseEventHandler, ReactNode } from "react";

export default function Button({
  children,
  styles,
  type = "button",
  onClick,
}: {
  children: ReactNode;
  styles: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={styles} type={type} onClick={(e: any) => onClick?.(e)}>
      {children}
    </button>
  );
}
