import * as React from "react"

function CommandCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M34 19a3 3 0 00-3 3v12a3 3 0 103-3H22a3 3 0 103 3V22a3 3 0 10-3 3h12a3 3 0 000-6z"
        stroke="#17AD8B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoCommandCircle = React.memo(CommandCircle)
export default MemoCommandCircle
