import type { CSSProperties } from 'react';

export default function IVue({
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
      className={className}
      viewBox="0 0 128 128"
      width={width}
      style={style}
      height={height}
    >
      <title>vue.js logo</title>
      <path
        fill="#42b883"
        d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
      />
      <path
        fill="#35495e"
        d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
      />
    </svg>
  );
}
