"use client";

import Image from "next/image";
import SpotifyIcon from "./icons/Spotify-icon";

interface DockProps {
  onIconClick?: (iconName: string) => void;
}

export default function Dock({ onIconClick }: DockProps) {
  const dockIcons = [
    {
      name: "finder",
      src: "/images/finderApp.png",
      alt: "Finder",
    },
    {
      name: "launchpad",
      src: "/images/launchpadApp.png",
      alt: "Launchpad",
    },
    {
      name: "safari",
      src: "/images/safariApp.png",
      alt: "Safari",
    },
    {
      name: "messages",
      src: "/images/messagesApp.png",
      alt: "Messages",
    },
    {
      name: "mail",
      src: "/images/mailApp.png",
      alt: "Mail",
    },
    {
      name: "maps",
      src: "/images/mapsApp.png",
      alt: "Maps",
    },
    {
      name: "photos",
      src: "/images/photosApp.png",
      alt: "Photos",
    },
    {
      name: "facetime",
      src: "/images/facetimeApp.png",
      alt: "FaceTime",
    },
    {
      name: "calendar",
      src: "/images/calendarApp.png",
      alt: "Calendar",
    },
    {
      name: "contacts",
      src: "/images/contactsApp.png",
      alt: "Contacts",
    },
    {
      name: "reminders",
      src: "/images/remindersApp.png",
      alt: "Reminders",
    },
    {
      name: "notes",
      src: "/images/notesApp.png",
      alt: "Notes",
    },
    {
      name: "tv",
      src: "/images/tvApp.png",
      alt: "TV",
    },
    {
      name: "music",
      src: "/images/musicApp.png",
      alt: "Music",
    },
    {
      name: "podcasts",
      src: "/images/podcastsApp.png",
      alt: "Podcasts",
    },
    {
      name: "app-store",
      src: "/images/app-storeApp.png",
      alt: "App Store",
    },
    {
      name: "system-preferences",
      src: "/images/settingsApp.png",
      alt: "System Preferences",
    },
  ];

  const handleIconClick = (iconName: string) => {
    if (onIconClick) {
      onIconClick(iconName);
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div
        className="backdrop-blur-[40px] rounded-[17px] border border-white/20 shadow-dock px-1 py-1"
        style={{
          backgroundColor: "#9d9d9d",
          backdropFilter: "blur(40px) saturate(1.8) brightness(1.1)",
        }}
      >
        <div className="flex items-center gap-1">
          {/* Regular Dock Icons */}
          {dockIcons.map((icon) => (
            <div key={icon.name} className="relative flex flex-col items-center">
              <div
                className="w-[49px] h-[49px] relative cursor-pointer dock-icon"
                onClick={() => handleIconClick(icon.name)}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={49}
                  height={49}
                  className="rounded-lg"
                />
              </div>
              
              {/* Functional indicator dot for Finder */}
              {icon.name === "finder" && (
                <div className="w-1 h-1 bg-black/80 rounded-full mt-1"></div>
              )}
            </div>
          ))}

          {/* Divider */}
          <div className="w-[1px] h-[45px] bg-white/20 mx-1"></div>

          {/* Spotify Icon */}
          <div className="relative flex flex-col items-center">
            <div
              className="w-[39px] h-[39px] relative cursor-pointer dock-icon"
              onClick={() => handleIconClick("spotify")}
            >
              <div className="w-full h-full bg-[#1ed760] rounded-full shadow-md flex items-center justify-center">
                <SpotifyIcon />
              </div>
            </div>
            
            {/* Functional indicator dot */}
            <div className="w-1 h-1 bg-black/80 rounded-full mt-1"></div>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-[45px] bg-white/20 mx-1"></div>

          {/* Folder Icon */}
          <div
            className="w-[49px] h-[49px] relative cursor-pointer dock-icon"
            onClick={() => handleIconClick("folder")}
          >
            <Image
              src="/images/folderIcon2.png"
              alt="Folder"
              width={49}
              height={49}
              className="rounded-lg"
            />
          </div>

          {/* Trash */}
          <div
            className="w-[49px] h-[49px] relative cursor-pointer dock-icon"
            onClick={() => handleIconClick("trash")}
          >
            <Image
              src="/images/bin-empty.png"
              alt="Trash"
              width={49}
              height={49}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Dock Indicator Dots */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-[2px]">
        <div className="w-[3px] h-[3px] bg-white/60 rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-white/60 rounded-full"></div>
      </div>
    </div>
  );
}
