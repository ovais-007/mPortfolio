"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface DesktopIconProps {
  id: string;
  position: { x: number; y: number };
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent, id: string) => void;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
  type?: "folder" | "file" | "note" | "custom";
  title?: string;
  subtitle?: string;
  icon?: string;
  width?: number;
  height?: number;
}

export default function DesktopIcon({
  id,
  position,
  isDragging,
  onMouseDown,
  onClick,
  children,
  className = "",
  type = "folder",
  title,
  subtitle,
  icon,
  width = 59,
  height = 59,
}: DesktopIconProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  const renderIcon = () => {
    if (children) return children;

    if (type === "note") {
      return (
        <div className="bg-[#fef49c] border border-[#cfc67c] rounded-[5px] p-4 shadow-lg w-[309px] h-[205px] sticky-note">
          <h3 className="font-bold text-[13px] text-black mb-2">To do:</h3>
          <div className="text-[13px] text-black -space-y-1 font-medium">
            <p>Land my dream job at *</p>
            <p>Drink water</p>
            <p className="line-through">
              Stay consistent with DSA + Web Dev practice
            </p>
            <p>Finish grad school without losing my mind</p>
            <p className="line-through">Survive Theory of Computation exam</p>
            <p>World domination</p>
            <p>Travel somewhere new every year</p>
          </div>
        </div>
      );
    }

    return (
      <div
        className="flex flex-col items-center"
        style={{ width: `${width}px` }}
      >
        <div
          className={`relative mb-1 folder-icon`}
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          {icon && (
            <Image
              src={icon}
              alt={title || "Icon"}
              width={width}
              height={height}
              className="rounded-lg"
            />
          )}
        </div>
        {title && (
          <span className="text-black text-[13px] font-medium text-center leading-tight">
            {title}
            {subtitle && (
              <>
                <br />
                {subtitle}
              </>
            )}
          </span>
        )}
      </div>
    );
  };

  return (
    <div
      className={`absolute cursor-grab ${isDragging ? "z-50" : "z-10"} ${className}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        transition: isDragging ? "none" : "transform 0.2s ease-in-out",
      }}
      onMouseDown={(e) => onMouseDown(e, id)}
      onClick={handleClick}
    >
      {renderIcon()}
    </div>
  );
}
