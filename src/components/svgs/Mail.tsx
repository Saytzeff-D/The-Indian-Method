import * as React from "react"

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 19" width={23} height={17} fill="none" {...props}>
      <path
        d="M22.285 1.215h-19a2 2 0 00-2 2v12a2 2 0 002 2h19a2 2 0 002-2v-12a2 2 0 00-2-2z"
        stroke="#A0A3BD"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.696 1.797l-10.911 8.918L1.874 1.797"
        stroke="#A0A3BD"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoMail = React.memo(Mail)
export default MemoMail
