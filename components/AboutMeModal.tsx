"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface WindowProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: "left" | "center" | "right";
  initialPosition: { x: number; y: number };
}

function DraggableWindow({
  isOpen,
  onClose,
  title,
  type,
  initialPosition,
}: WindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (!isOpen) {
        document.body.style.overflow = "unset";
      }
    };
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isOpen) return null;

  const getWindowContent = () => {
    switch (type) {
      case "left":
        return (
          <div className="aspect-square">
            <Image
              src="/ov/portrait-1.jpeg"
              alt="Portrait 1"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
        );
      case "center":
        return (
          <div className="p-[18px] pb-[22px] max-h-[520px] overflow-auto">
            <div className="space-y-3">
              <p className="text-[#0F172A] text-base leading-[19px] m-0">
                <br></br>
                Hi, I’m Mohammad Ovais — a curious learner and passionate
                problem solver. I enjoy exploring new ideas, understanding how
                things work, and continuously pushing myself to grow. Whether
                it’s technology, creative projects, or personal goals, I love
                taking on challenges and finding meaningful solutions.
              </p>
              <br></br>
              <p className="text-[#0F172A] text-base leading-[26px] m-0">
                Outside academics, I like working on projects that allow me to
                experiment and learn hands-on. I believe in combining
                consistency with curiosity, and I aspire to build a career where
                I can keep learning, create impact, and contribute to something
                bigger than myself.
              </p>
            </div>
          </div>
        );
      case "right":
        return (
          <div style={{ aspectRatio: "16/9" }}>
            <Image
              src="/ov/portrait-2.jpeg"
              alt="Portrait 2"
              width={420}
              height={236}
              className="w-full h-full object-cover"
            />
          </div>
        );
    }
  };

  const getWindowWidth = () => {
    switch (type) {
      case "left":
        return "320px";
      case "center":
        return "360px";
      case "right":
        return "420px";
    }
  };

  return (
    <div
      className="fixed bg-white rounded-2xl border border-[#E6E7EB] overflow-hidden animate-modal-open z-50"
      style={{
        left: position.x,
        top: position.y,
        width: getWindowWidth(),
        boxShadow: "0 10px 30px rgba(0,0,0,.12)",
        transform: isDragging ? "scale(1.02)" : "scale(1)",
        transition: isDragging ? "none" : "transform 0.2s ease",
      }}
      onMouseDown={handleMouseDown}
    >
      {/* Titlebar */}
      <div
        className="h-9 bg-[#F6F7F9] border-b border-[#E9EAEE] flex items-center justify-center relative cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="absolute left-3 flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity cursor-pointer"
          />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
        </div>
        <span className="text-[#6B7280] text-[13px] font-medium">{title}</span>
      </div>

      {/* Content */}
      <div className="bg-white" onMouseDown={(e) => e.stopPropagation()}>
        {getWindowContent()}
      </div>

      <style jsx>{`
        @keyframes modal-open {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-modal-open {
          animation: modal-open 200ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutMeModal({ isOpen, onClose }: AboutMeModalProps) {
  const [openWindows, setOpenWindows] = useState({
    left: false,
    center: false,
    right: false,
  });

  useEffect(() => {
    if (isOpen) {
      // Open all three windows with a small delay for staggered effect
      setTimeout(
        () => setOpenWindows((prev) => ({ ...prev, center: true })),
        100,
      );
      setTimeout(
        () => setOpenWindows((prev) => ({ ...prev, left: true })),
        200,
      );
      setTimeout(
        () => setOpenWindows((prev) => ({ ...prev, right: true })),
        300,
      );
    } else {
      setOpenWindows({ left: false, center: false, right: false });
    }
  }, [isOpen]);

  const closeWindow = (windowType: "left" | "center" | "right") => {
    setOpenWindows((prev) => ({ ...prev, [windowType]: false }));

    // Check if all windows are closed
    const updatedWindows = { ...openWindows, [windowType]: false };
    if (
      !updatedWindows.left &&
      !updatedWindows.center &&
      !updatedWindows.right
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (Object.values(openWindows).some((isOpen) => isOpen)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openWindows]);

  return (
    <>
      {/* Individual draggable windows */}
      <DraggableWindow
        isOpen={openWindows.left}
        onClose={() => closeWindow("left")}
        title="IMGloI41.heic"
        type="left"
        initialPosition={{
          x: 300,
          y: 150,
        }}
      />

      <DraggableWindow
        isOpen={openWindows.right}
        onClose={() => closeWindow("right")}
        title="IMGloI41.heic"
        type="right"
        initialPosition={{
          x: 900,
          y: 150,
        }}
      />

      <DraggableWindow
        isOpen={openWindows.center}
        onClose={() => closeWindow("center")}
        title="aboutme.txt"
        type="center"
        initialPosition={{
          x: 600,
          y: 200,
        }}
      />
    </>
  );
}
