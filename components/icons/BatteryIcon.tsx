export default function BatteryIcon(){
    return <svg
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
}