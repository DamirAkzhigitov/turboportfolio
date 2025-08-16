import type { CSSProperties } from 'react';

export default function IDownload({
  style,
  className,
  width = 24,
  height = 24,
}: {
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      style={style}
      viewBox="0 0 24 24"
      width={width}
      height={height}
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <title>download</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}
