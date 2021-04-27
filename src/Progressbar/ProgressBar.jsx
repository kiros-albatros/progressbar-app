import React from "react";

import "./ProgressBar.css";

// L = 2*Pi*R;

const ProgressBar = ({
  colorPrimary,
  colorSecondary,
  width,
  stroke,
  percent,
  offset,
  text,
  fontSize,
}) => {
  const center = width / 2;
  const radius = center - stroke;
  const circleLength = 2 * 3.14 * radius;
  const onePercentLength = circleLength / 100;
  const primaryLength = onePercentLength * percent;
  const secondaryLength = circleLength - primaryLength;

  return (
    <div className="progress-bar">
      <svg width={width} height={width} viewbox="0 0 100 100">
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="none"
          stroke-width={stroke}
          stroke={colorSecondary}
        />
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="none"
          stroke-width={stroke}
          stroke={colorPrimary}
          // stroke-linecap="round"
          stroke-dasharray={primaryLength + " " + secondaryLength}
          stroke-dashoffset={200 + offset}
        />
        {text && (
          <text
            x={radius + 10}
            y={radius + 15}
            font-family="Arial"
            font-size={fontSize}
            text-anchor="middle"
            fill="#444"
          >
            {percent}
          </text>
        )}
      </svg>
    </div>
  );
};

export default ProgressBar;
