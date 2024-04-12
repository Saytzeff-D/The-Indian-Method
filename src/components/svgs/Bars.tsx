import * as React from "react"

function Bars(props: React.SVGProps<SVGSVGElement>) {
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
        d="M34 36V26m-6 10V20m-6 16v-6"
        stroke="#17AD8B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoBars = React.memo(Bars)
export default MemoBars
