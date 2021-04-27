import React from "react";

import "./ProgressBar.css";

// L = 2*Pi*R;

const ProgressBar = (props) => {
  const center = props.width / 2;
  const radius = center - props.stroke;
  const circleLength = 2 * 3.14 * radius;
  const onePercentLength = circleLength / 100;
  const primaryLength = onePercentLength * props.percent;
  const secondaryLength = circleLength - primaryLength;

  return (
    <div className="progress-bar">
      <svg width={props.width} height={props.width} viewbox="0 0 100 100">
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="none"
          stroke-width={props.stroke}
          stroke={props.colorSecondary}
        />
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="none"
          stroke-width={props.stroke}
          stroke={props.colorPrimary}
          // stroke-linecap="round"
          stroke-dasharray={primaryLength + " " + secondaryLength}
          stroke-dashoffset={200 + props.offset}
        />
        <text
          x={radius}
          y={radius}
          font-family="Arial"
          font-size="70"
          text-anchor="middle"
          fill="#444"
        >
          {props.percent}
        </text>
      </svg>
    </div>
  );
};

export default ProgressBar;
