"use client";

import Image from "next/image";

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
            <div
              key={icon.name}
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
          ))}

          {/* Divider */}
          <div className="w-[1px] h-[45px] bg-white/20 mx-1"></div>

          {/* Spotify Icon */}
          <div
            className="w-[39px] h-[39px] relative cursor-pointer dock-icon"
            onClick={() => handleIconClick("spotify")}
          >
            <div className="w-full h-full bg-[#1ed760] rounded-full shadow-md flex items-center justify-center">
              <svg
                width="27"
                height="18"
                viewBox="0 0 31 21"
                fill="none"
                className="text-black"
              >
                <path
                  d="M27.3229 8.12131C20.6439 4.13001 9.62667 3.76302 3.25072 5.7105C2.22686 6.02296 1.14412 5.44136 0.833849 4.4111C0.523576 3.38035 1.10107 2.29159 2.12567 1.97838C9.44481 -0.257403 21.612 0.174566 29.3011 4.76739C30.222 5.31737 30.5241 6.51419 29.9783 7.43937C29.432 8.36605 28.2416 8.67154 27.3229 8.12131ZM27.1042 14.0329C26.6356 14.798 25.6414 15.0381 24.882 14.5682C19.3137 11.1242 10.8227 10.1265 4.23498 12.1385C3.38062 12.3984 2.47825 11.9137 2.21895 11.0557C1.96137 10.196 2.44336 9.28974 3.296 9.02832C10.8217 6.73054 20.1772 7.84346 26.5727 11.7982C27.3321 12.2687 27.5711 13.2698 27.1042 14.0329ZM24.5688 19.7103C24.1964 20.3248 23.4014 20.5172 22.793 20.1428C17.9271 17.1503 11.8028 16.4746 4.59029 18.1323C3.89527 18.2926 3.20272 17.8544 3.04412 17.1551C2.88502 16.456 3.31876 15.7588 4.01552 15.5992C11.9082 13.7837 18.6788 14.565 24.1403 17.9232C24.7492 18.2974 24.9409 19.0978 24.5688 19.7103Z"
                  fill="black"
                />
              </svg>
            </div>
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
