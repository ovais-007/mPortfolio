"use client";

import { useEffect } from "react";

interface SpotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpotifyModal({ isOpen, onClose }: SpotifyModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Background overlay */}
      <div 
        className="fixed inset-0 bg-black/2 z-40"
        onClick={onClose}
      />
      
      {/* Spotify Player Modal */}
      <div className="fixed bottom-20 right-28 z-50">

          {/* Spotify Embed */}
          <iframe 
            style={{ 
              borderRadius: "12px",
              border: "none",
              background: "transparent"
            }}
            src="https://open.spotify.com/embed/playlist/3pqYSqrJs5rpZL0Egz74i3?utm_source=generator&theme=0"
            width="320"
            height="200"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>

    </>
  );
}
