import React from "react";

function BlobBG() {
  return (
    <div>
      <svg
        className="absolute h-96 w-96 top-0 -left-10 blur-md"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="b" r="100%" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#00DBDE" />
            <stop offset="100%" stop-color="#FC00FF" />
          </radialGradient>
          <clipPath id="a">
            <path
              fill="currentColor"
              d="M905 620q-74 120-181 180.5t-234.5 93Q362 926 248 846T81 633q-53-133 2-264.5T253 165q115-72 252.5-89.5t227 86.5q89.5 104 168 221t4.5 237Z"
            />
          </clipPath>
        </defs>
        <g clip-path="url(#a)">
          <path
            fill="url(#b)"
            d="M905 620q-74 120-181 180.5t-234.5 93Q362 926 248 846T81 633q-53-133 2-264.5T253 165q115-72 252.5-89.5t227 86.5q89.5 104 168 221t4.5 237Z"
          />
        </g>
      </svg>
      <svg
        className="absolute bottom-0 -right-10 blur-md h-96 w-96"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="fill"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
            gradientTransform="rotate(45 0.5 0.5)"
          >
            <stop offset="0%" stop-color="#31c8f1"></stop>
            <stop offset="100%" stop-color="#6aff94"></stop>
          </linearGradient>
        </defs>
        <path
          d="M85.5,62Q74,74,62,78.5Q50,83,34.5,82Q19,81,19,65.5Q19,50,21.5,37Q24,24,37,17.5Q50,11,63.5,17Q77,23,87,36.5Q97,50,85.5,62Z"
          stroke="none"
          stroke-width="0"
          fill="url(#fill)"
        ></path>
      </svg>
    </div>
  );
}

export default BlobBG;
