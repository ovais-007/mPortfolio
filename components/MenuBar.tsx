"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ControlIcon from "./icons/ControlIcon";
import BatteryIcon from "./icons/BatteryIcon";
import WifiIcon from "./icons/WifiIcon";
import SearchIcon from "./icons/SearchIcon";

export default function MenuBar() {
  const [time, setTime] = useState("3:10 AM");
  const [date, setDate] = useState("Saturday, Aug 23");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      const dateStr = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
      setTime(timeStr);
      setDate(dateStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-white/50 backdrop-blur-[13px] border-b border-black/5 flex items-center justify-between px-4 z-50 menu-bar">
      <div className="flex items-center gap-4">
        <div className="w-4 h-4">
          <Image
            src="/images/Apple_Logo_0.svg"
            alt="Apple"
            width={14}
            height={14}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
        <span className="text-black font-bold text-sm">
          Ovais&apos;s Portfolio
        </span>
        <a
          href="mailto:ovais.00700@gmail.com"
          className="text-gray-700/85 text-sm font-medium  hover:text-blue-600 transition-colors"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1SA4wZuQqhdRaBoupnDdJe18KwxEcny81/view?usp=drive_link"
          target="_blank"
          rel="noopener"
          className="text-gray-700/85 text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Resume
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">

          {/* Battery Icon */}
            <BatteryIcon/>

          {/* WiFi Icon */}
          <WifiIcon/>

          {/* Search Icon */}
         <SearchIcon/>

          {/* Control Center 2 */}
          <ControlIcon/>

          {/* Siri */}
          <div className="w-4 h-4">
            <Image
              src="/images/SiriIcon.png"
              alt="Siri"
              width={14}
              height={14}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-black text-sm font-medium">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
