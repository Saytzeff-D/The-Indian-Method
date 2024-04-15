import * as React from "react"

function Linefill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <rect
        x={6}
        y={13}
        width={4}
        height={4}
        rx={2}
        transform="rotate(90 6 13)"
        fill="#222"
        stroke="#222"
        strokeWidth={2}
      />
      <rect
        x={17}
        y={12}
        width={4}
        height={4}
        rx={2}
        transform="rotate(-90 17 12)"
        fill="#222"
        stroke="#222"
        strokeWidth={2}
      />
      <path
        d="M18 11l-1.5 1.5c-1.017 1.017-1.526 1.526-2.137 1.638-.24.045-.486.045-.726 0-.611-.112-1.12-.62-2.137-1.638v0c-1.017-1.017-1.526-1.526-2.137-1.638a2.002 2.002 0 00-.726 0c-.611.112-1.12.62-2.137 1.638L5 14"
        stroke="#222"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoLinefill = React.memo(Linefill)
export default MemoLinefill
