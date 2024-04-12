import * as React from "react"

function Phone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 17 28" width={15} height={24} fill="none" {...props}>
      <path
        d="M13.54 1.2H3.366a2.26 2.26 0 00-2.26 2.262V24.94a2.26 2.26 0 002.26 2.26H13.54a2.26 2.26 0 002.261-2.26V3.462a2.26 2.26 0 00-2.26-2.261z"
        stroke="#A0A3BD"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.156 1.2v1.482a1.481 1.481 0 01-1.481 1.481H6.23a1.481 1.481 0 01-1.481-1.48V1.2"
        stroke="#A0A3BD"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoPhone = React.memo(Phone)
export default MemoPhone
