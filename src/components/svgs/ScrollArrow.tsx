import * as React from "react"

function ScrollArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={42} height={42} viewBox="0 0 45 45" fill="none" {...props}>
      <path
        d="M18 30.756v-16.29a1.459 1.459 0 012.494-1.035l8.137 8.153a1.458 1.458 0 010 2.056l-8.137 8.152A1.458 1.458 0 0118 30.756z"
        fill="#17AD8B"
      />
      <circle cx={22.5} cy={22.5} r={22.5} fill="#17AD8B" fillOpacity={0.31} />
    </svg>
  )
}

const MemoScrollArrow = React.memo(ScrollArrow)
export default MemoScrollArrow
