import * as React from "react"

function StopAndPlayFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M11.427 11.126L4.594 7.33A.4.4 0 004 7.68v8.64a.4.4 0 00.594.35l6.833-3.796a1 1 0 000-1.748z"
        fill="#222"
      />
      <path
        d="M16 17V7M20 17V7"
        stroke="#222"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

const MemoStopAndPlayFill = React.memo(StopAndPlayFill)
export default MemoStopAndPlayFill
