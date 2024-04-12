import * as React from "react"

function Speed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={56} fill="none" {...props}>
      <rect x={4} y={4} width={48} height={48} rx={24} fill="#92D9C9" />
      <rect
        x={4}
        y={4}
        width={48}
        height={48}
        rx={24}
        stroke="#B6EBDF"
        strokeWidth={8}
      />
      <path
        d="M29 18L19 30h9l-1 8 10-12h-9l1-8z"
        stroke="#17AD8B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoSpeed = React.memo(Speed)
export default MemoSpeed
