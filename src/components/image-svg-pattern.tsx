import { memo } from "react";

export interface ColorCombination {
  start: string;
  middle?: string;
  end: string;
}

export const defaultColorCombinations = [
  {
    start: "hsl(220, 15%, 8%)",
    middle: "hsl(200, 12%, 18%)",
    end: "hsl(240, 10%, 12%)",
  },
  {
    start: "hsl(35, 25%, 15%)",
    middle: "hsl(30, 20%, 25%)",
    end: "hsl(25, 15%, 10%)",
  },
  {
    start: "hsl(210, 20%, 12%)",
    middle: "hsl(200, 15%, 22%)",
    end: "hsl(215, 18%, 8%)",
  },
  {
    start: "hsl(150, 30%, 8%)",
    middle: "hsl(140, 25%, 15%)",
    end: "hsl(160, 20%, 6%)",
  },
  {
    start: "hsl(230, 35%, 6%)",
    middle: "hsl(220, 30%, 12%)",
    end: "hsl(240, 25%, 4%)",
  },
  {
    start: "hsl(20, 40%, 12%)",
    middle: "hsl(15, 35%, 18%)",
    end: "hsl(10, 30%, 8%)",
  },
  {
    start: "hsl(280, 25%, 10%)",
    middle: "hsl(270, 20%, 16%)",
    end: "hsl(290, 15%, 6%)",
  },
  { start: "hsl(0, 0%, 8%)", middle: "hsl(0, 0%, 18%)", end: "hsl(0, 0%, 4%)" },
];
export const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const SVGPattern = memo(
  ({
    colors,
    uniqueId,
    randomSeed,
  }: {
    colors: ColorCombination;
    uniqueId: string;
    randomSeed: number;
  }) => {
    const gradientId = `ffflux-gradient-${uniqueId}`;
    const filterId = `ffflux-filter-${uniqueId}`;

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        role="img"
        aria-label="Loading pattern"
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(150, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id={gradientId}
          >
            <stop stopColor={colors.start} stopOpacity="1" offset="0%" />
            {colors.middle && (
              <stop stopColor={colors.middle} stopOpacity="1" offset="50%" />
            )}
            <stop stopColor={colors.end} stopOpacity="1" offset="100%" />
          </linearGradient>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005 0.003"
              numOctaves={2}
              seed={randomSeed}
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            />
            <feGaussianBlur
              stdDeviation="20 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            />
            <feBlend
              mode="color-dodge"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              in2="blur"
              result="blend"
            />
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${gradientId})`}
          filter={`url(#${filterId})`}
        />
      </svg>
    );
  }
);

SVGPattern.displayName = "SVGPattern";
