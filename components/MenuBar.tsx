"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
          href="https://drive.google.com/file/d/1MW3-6aZrFarw-A4xhR-OepXMP0flgWaE/view?usp=drive_link"
          target="_blank"
          rel="noopener"
          className="text-gray-700/85 text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Resume
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          {/* Control Center */}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            className="text-black cursor-pointer hover:text-blue-600 transition-colors"
          >
            <g opacity="0.9">
              <rect x="2" y="2" width="3" height="3" fill="currentColor" />
              <rect x="6" y="2" width="3" height="3" fill="currentColor" />
              <rect x="10" y="2" width="3" height="3" fill="currentColor" />
              <rect x="2" y="6" width="3" height="3" fill="currentColor" />
              <rect x="6" y="6" width="3" height="3" fill="currentColor" />
              <rect x="10" y="6" width="3" height="3" fill="currentColor" />
              <rect x="2" y="10" width="3" height="3" fill="currentColor" />
              <rect x="6" y="10" width="3" height="3" fill="currentColor" />
              <rect x="10" y="10" width="3" height="3" fill="currentColor" />
            </g>
          </svg>

          {/* Battery Icon */}
          <svg
            width="26"
            height="13"
            viewBox="0 0 26 13"
            fill="none"
            className="text-black"
          >
            <g clipPath="url(#battery-clip)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3.5C0 1.84315 1.34315 0.5 3 0.5H20C21.6569 0.5 23 1.84315 23 3.5V9.5C23 11.1569 21.6569 12.5 20 12.5H3C1.34315 12.5 0 11.1569 0 9.5V3.5ZM1 3.5C1 2.39543 1.89543 1.5 3 1.5H20C21.1046 1.5 22 2.39543 22 3.5V9.5C22 10.6046 21.1046 11.5 20 11.5H3C1.89543 11.5 1 10.6046 1 9.5V3.5ZM25.5 6.5C25.5 7.61042 24.8967 8.57994 24 9.09865V3.90135C24.8967 4.42006 25.5 5.38958 25.5 6.5Z"
                fill="currentColor"
                fillOpacity="0.5"
              />
              <rect
                x="2"
                y="2.5"
                width="14"
                height="8"
                rx="1"
                fill="currentColor"
                fillOpacity="0.9"
              />
            </g>
            <defs>
              <clipPath id="battery-clip">
                <rect
                  width="25.5"
                  height="12"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          {/* WiFi Icon */}
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            className="text-black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.9998 0.5C11.1827 0.5 14.0183 1.98703 15.8497 4.30426L14.3704 5.6603C12.9091 3.73978 10.5992 2.5 7.9998 2.5C5.40036 2.5 3.09049 3.73978 1.62923 5.6603L0.149902 4.30426C1.98133 1.98703 4.81691 0.5 7.9998 0.5ZM12.8877 7.01944C11.7998 5.49438 10.0159 4.5 7.9998 4.5C5.9837 4.5 4.19984 5.49438 3.11192 7.01944L4.60317 8.38642C5.30949 7.25373 6.56662 6.5 7.9998 6.5C9.43298 6.5 10.6901 7.25373 11.3964 8.38642L12.8877 7.01944ZM9.86886 9.7867C9.58157 9.03436 8.85309 8.5 7.9998 8.5C7.14652 8.5 6.41804 9.03436 6.13075 9.7867L7.9998 11.5L9.86886 9.7867Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>

          {/* Search Icon */}
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="text-black cursor-pointer hover:text-blue-600 transition-colors"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 5.5C10.5 6.61014 10.1382 7.63578 9.5261 8.46544L12.0303 10.9697C12.3232 11.2626 12.3232 11.7374 12.0303 12.0303C11.7641 12.2966 11.3474 12.3208 11.0538 12.1029L10.9697 12.0303L8.46544 9.5261C7.63578 10.1382 6.61014 10.5 5.5 10.5C2.73858 10.5 0.5 8.26142 0.5 5.5C0.5 2.73858 2.73858 0.5 5.5 0.5C8.26142 0.5 10.5 2.73858 10.5 5.5ZM5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>

          {/* Control Center 2 */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-black cursor-pointer hover:text-blue-600 transition-colors"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 0.5C1.34315 0.5 0 1.84315 0 3.5C0 5.15685 1.34315 6.5 3 6.5H11C12.6569 6.5 14 5.15685 14 3.5C14 1.84315 12.6569 0.5 11 0.5H3ZM3 1.5C1.89543 1.5 1 2.39543 1 3.5C1 4.60457 1.89543 5.5 3 5.5H11C12.1046 5.5 13 4.60457 13 3.5C13 2.39543 12.1046 1.5 11 1.5H3ZM3 7.5C1.34315 7.5 0 8.84315 0 10.5C0 12.1569 1.34315 13.5 3 13.5H11C12.6569 13.5 14 12.1569 14 10.5C14 8.84315 12.6569 7.5 11 7.5H3ZM11 12.5C12.1046 12.5 13 11.6046 13 10.5C13 9.39543 12.1046 8.5 11 8.5C9.89543 8.5 9 9.39543 9 10.5C9 11.6046 9.89543 12.5 11 12.5ZM3 5C3.82843 5 4.5 4.32843 4.5 3.5C4.5 2.67157 3.82843 2 3 2C2.17157 2 1.5 2.67157 1.5 3.5C1.5 4.32843 2.17157 5 3 5Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
          </svg>

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
