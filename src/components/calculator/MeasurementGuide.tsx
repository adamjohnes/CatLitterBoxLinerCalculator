import { useId } from "react";

interface MeasurementGuideProps {
  compact?: boolean;
}

interface ArrowMarkerProps {
  id: string;
  color: string;
}

interface DoubleArrowProps {
  d: string;
  color: string;
  markerId: string;
  haloMarkerId: string;
}

interface ArrowLabelProps {
  x: number;
  y: number;
  width: number;
  text: string;
  color: string;
  fill: string;
  shadowId: string;
}

const colors = {
  amber: "#b45309",
  blue: "#1d4ed8",
  emerald: "#047857",
  teal: "#0f766e",
};

function ArrowMarker({ id, color }: ArrowMarkerProps) {
  return (
    <marker
      id={id}
      markerWidth="28"
      markerHeight="28"
      refX="14"
      refY="14"
      orient="auto-start-reverse"
      markerUnits="userSpaceOnUse"
    >
      <path
        d="M 3 3 L 25 14 L 3 25 Z"
        fill={color}
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </marker>
  );
}

function DoubleArrow({
  d,
  color,
  markerId,
  haloMarkerId,
}: DoubleArrowProps) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke="white"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerStart={`url(#${haloMarkerId})`}
        markerEnd={`url(#${haloMarkerId})`}
        opacity="0.9"
      />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerStart={`url(#${markerId})`}
        markerEnd={`url(#${markerId})`}
      />
    </g>
  );
}

function ArrowLabel({
  x,
  y,
  width,
  text,
  color,
  fill,
  shadowId,
}: ArrowLabelProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        width={width}
        height="58"
        rx="29"
        fill={fill}
        stroke={color}
        strokeWidth="3"
        filter={`url(#${shadowId})`}
      />
      <text
        x={width / 2}
        y="38"
        fill="#022c22"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="28"
        fontWeight="800"
        letterSpacing="2"
        textAnchor="middle"
      >
        {text}
      </text>
    </g>
  );
}

export function MeasurementGuide({ compact = false }: MeasurementGuideProps) {
  const uniqueId = useId().replace(/:/g, "");
  const haloMarkerId = `${uniqueId}-halo-arrow`;
  const labelShadowId = `${uniqueId}-label-shadow`;
  const amberMarkerId = `${uniqueId}-amber-arrow`;
  const blueMarkerId = `${uniqueId}-blue-arrow`;
  const emeraldMarkerId = `${uniqueId}-emerald-arrow`;
  const tealMarkerId = `${uniqueId}-teal-arrow`;

  return (
    <figure
      role="img"
      aria-label="Litter box measurement guide showing length, width, and the front, back, left, and right wall heights."
      className={`overflow-hidden rounded-2xl bg-stone-50 ${
        compact ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <svg
        viewBox="0 0 1600 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
        aria-hidden="true"
      >
        <defs>
          <filter
            id={labelShadowId}
            x="-25%"
            y="-50%"
            width="150%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="5"
              stdDeviation="7"
              floodColor="#292524"
              floodOpacity="0.2"
            />
          </filter>
          <marker
            id={haloMarkerId}
            markerWidth="36"
            markerHeight="36"
            refX="18"
            refY="18"
            orient="auto-start-reverse"
            markerUnits="userSpaceOnUse"
          >
            <path
              d="M 3 3 L 33 18 L 3 33 Z"
              fill="white"
              stroke="white"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </marker>
          <ArrowMarker id={amberMarkerId} color={colors.amber} />
          <ArrowMarker id={blueMarkerId} color={colors.blue} />
          <ArrowMarker id={emeraldMarkerId} color={colors.emerald} />
          <ArrowMarker id={tealMarkerId} color={colors.teal} />
        </defs>

        <rect width="1600" height="1000" rx="48" fill="#fafaf9" />
        <image
          href="/images/litter-pan-clean.png"
          x="180"
          y="70"
          width="1240"
          height="827"
          preserveAspectRatio="xMidYMid meet"
        />

        <DoubleArrow
          d="M 590 445 L 790 270"
          color={colors.teal}
          markerId={tealMarkerId}
          haloMarkerId={haloMarkerId}
        />
        <DoubleArrow
          d="M 495 535 L 1130 610"
          color={colors.amber}
          markerId={amberMarkerId}
          haloMarkerId={haloMarkerId}
        />
        <DoubleArrow
          d="M 1115 260 L 1115 430"
          color={colors.blue}
          markerId={blueMarkerId}
          haloMarkerId={haloMarkerId}
        />
        <DoubleArrow
          d="M 790 675 L 790 835"
          color={colors.blue}
          markerId={blueMarkerId}
          haloMarkerId={haloMarkerId}
        />
        <DoubleArrow
          d="M 190 430 L 190 685"
          color={colors.emerald}
          markerId={emeraldMarkerId}
          haloMarkerId={haloMarkerId}
        />
        <DoubleArrow
          d="M 1430 355 L 1430 685"
          color={colors.emerald}
          markerId={emeraldMarkerId}
          haloMarkerId={haloMarkerId}
        />

        <ArrowLabel
          x={350}
          y={235}
          width={170}
          text="WIDTH"
          color={colors.teal}
          fill="#f0fdfa"
          shadowId={labelShadowId}
        />
        <ArrowLabel
          x={710}
          y={465}
          width={200}
          text="LENGTH"
          color={colors.amber}
          fill="#fffbeb"
          shadowId={labelShadowId}
        />
        <ArrowLabel
          x={1020}
          y={145}
          width={190}
          text="BACK"
          color={colors.blue}
          fill="#eff6ff"
          shadowId={labelShadowId}
        />
        <ArrowLabel
          x={690}
          y={885}
          width={200}
          text="FRONT"
          color={colors.blue}
          fill="#eff6ff"
          shadowId={labelShadowId}
        />
        <ArrowLabel
          x={55}
          y={705}
          width={170}
          text="LEFT"
          color={colors.emerald}
          fill="#ecfdf5"
          shadowId={labelShadowId}
        />
        <ArrowLabel
          x={1340}
          y={705}
          width={190}
          text="RIGHT"
          color={colors.emerald}
          fill="#ecfdf5"
          shadowId={labelShadowId}
        />
      </svg>
    </figure>
  );
}
