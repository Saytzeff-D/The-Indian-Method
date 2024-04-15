import * as React from "react"

function Userbox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M17.796 20.706c-.342-1.063-1.096-2.003-2.143-2.673C14.605 17.363 13.32 17 12 17c-1.32 0-2.605.363-3.653 1.033-1.047.67-1.8 1.61-2.143 2.673"
        stroke="#33363F"
        strokeWidth={2}
      />
      <circle
        cx={12}
        cy={10}
        r={3}
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <rect
        x={3}
        y={3}
        width={18}
        height={18}
        rx={3}
        stroke="#33363F"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoUserbox = React.memo(Userbox)
export default MemoUserbox
