import * as React from "react"

function InfoCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M10.5 12H12v4h2m-2-8h.01m1.553 12.863a9 9 0 10-3.126-17.726 9 9 0 003.126 17.726z"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoInfoCircle = React.memo(InfoCircle)
export default MemoInfoCircle
