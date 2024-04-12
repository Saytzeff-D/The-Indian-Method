import * as React from "react"

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 23 28" width={21} height={24} fill="none" {...props}>
      <path
        d="M11.86 13.983a6.34 6.34 0 100-12.68 6.34 6.34 0 000 12.68zM1.715 27.128a10.145 10.145 0 1120.29 0"
        stroke="#A0A3BD"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoUser = React.memo(User)
export default MemoUser
