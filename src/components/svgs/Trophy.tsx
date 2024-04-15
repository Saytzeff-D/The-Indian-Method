import * as React from "react"

function Trophy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M16.5 20.5h-9"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path d="M13 18.5a1 1 0 11-2 0h2zm-2 0V16h2v2.5h-2z" fill="#33363F" />
      <path
        d="M10.5 9.5h3M5.5 14.5s-2-1.5-2-4v-2a2 2 0 012-2v0a2 2 0 012 2v1M18.5 14.5s2-1.5 2-4v-2a2 2 0 00-2-2v0a2 2 0 00-2 2v1"
        stroke="#33363F"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M16.5 11.36V7.5a2 2 0 00-2-2h-5a2 2 0 00-2 2v3.86a4 4 0 001.781 3.328l2.164 1.442a1 1 0 001.11 0l2.164-1.442a4 4 0 001.781-3.329z"
        stroke="#33363F"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoTrophy = React.memo(Trophy)
export default MemoTrophy
