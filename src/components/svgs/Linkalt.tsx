import * as React from "react"

function Linkalt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M14 10l-4 4"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13l2-2a3.536 3.536 0 000-5v0a3.536 3.536 0 00-5 0l-2 2m-3 3l-2 2a3.536 3.536 0 000 5v0a3.536 3.536 0 005 0l2-2"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

const MemoLinkalt = React.memo(Linkalt)
export default MemoLinkalt
