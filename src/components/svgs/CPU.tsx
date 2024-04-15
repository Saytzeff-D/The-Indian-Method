import * as React from "react"

function CPU(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M7 11c0-1.886 0-2.828.586-3.414C8.172 7 9.114 7 11 7h2c1.886 0 2.828 0 3.414.586C17 8.172 17 9.114 17 11v2c0 1.886 0 2.828-.586 3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414-.586C7 15.828 7 14.886 7 13v-2z"
        stroke="#33363F"
        strokeWidth={2}
      />
      <rect x={10} y={10} width={4} height={4} rx={1} fill="#33363F" />
      <path
        d="M10 7V4M14 7V4M17 10h3M17 14h3M10 20v-3M14 20v-3M4 10h3M4 14h3"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

const MemoCPU = React.memo(CPU)
export default MemoCPU
