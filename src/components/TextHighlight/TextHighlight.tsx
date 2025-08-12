"use client";

import { useHighlight } from "@/hooks";

export const TextHighlight: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const highLightRef = useHighlight();

  return <span ref={highLightRef}>{children}</span>;
};
