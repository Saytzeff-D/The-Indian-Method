import * as React from "react"

function Dashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <rect
        x={4}
        y={4}
        width={6}
        height={6}
        rx={1}
        stroke="#33363F"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <rect
        x={4}
        y={14}
        width={6}
        height={6}
        rx={1}
        stroke="#33363F"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <rect
        x={14}
        y={14}
        width={6}
        height={6}
        rx={1}
        stroke="#33363F"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <rect
        x={14}
        y={4}
        width={6}
        height={6}
        rx={1}
        stroke="#33363F"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoDashboard = React.memo(Dashboard)
export default MemoDashboard
