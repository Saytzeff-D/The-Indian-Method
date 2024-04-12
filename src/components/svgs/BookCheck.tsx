import * as React from "react"

function BookCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M20 12v5c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H6.5A2.5 2.5 0 014 18.5v0A2.5 2.5 0 016.5 16H16c1.886 0 2.828 0 3.414-.586C20 14.828 20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414C18.828 3 17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586C4 4.172 4 5.114 4 7v11.5"
        stroke="#000"
        strokeWidth={2}
      />
      <path
        d="M9 10l1.293 1.293a1 1 0 001.414 0L15 8"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

const MemoBookCheck = React.memo(BookCheck)
export default MemoBookCheck
