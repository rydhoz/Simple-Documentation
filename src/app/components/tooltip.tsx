"use client";
import { useState } from "react";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export default function Tooltip({ label, children }: TooltipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="flex items-center justify-center"
    >
      {children}
      {visible && (
        <span
          style={{ left: position.x + 12, top: position.y + 12 }}
          className="fixed px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded pointer-events-none whitespace-nowrap z-100"
        >
          {label}
        </span>
      )}
    </div>
  );
}