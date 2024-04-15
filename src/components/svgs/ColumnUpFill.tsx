import * as React from "react"

function ColumnUpFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M19 19H5"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M11 14v-4a2 2 0 10-4 0v4a2 2 0 104 0zM17 14V6a2 2 0 10-4 0v8a2 2 0 104 0z"
        fill="#33363F"
      />
    </svg>
  )
}

const MemoColumnUpFill = React.memo(ColumnUpFill)
export default MemoColumnUpFill
