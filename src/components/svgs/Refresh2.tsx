import * as React from "react"

function Refresh2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path d="M14 15l-4 4 4 4" stroke="#33363F" strokeWidth={2} />
      <path
        d="M18.062 8.5A7 7 0 0112 19"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path d="M10 9l4-4-4-4" stroke="#33363F" strokeWidth={2} />
      <path
        d="M5.938 15.5A7 7 0 0112 5"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

const MemoRefresh2 = React.memo(Refresh2)
export default MemoRefresh2
