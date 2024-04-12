import * as React from "react"

function PhoneCall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={17} fill="none" {...props}>
      <path
        d="M14.664 10.48l2.554 2.27a.93.93 0 010 1.39 5.579 5.579 0 01-6.8.472l-1.702-1.135a23.002 23.002 0 01-4.82-4.305l-.9-1.066a4.767 4.767 0 01.476-6.637.794.794 0 011.056 0l2.631 2.34a1 1 0 010 1.494l-.868.771a.484.484 0 00-.1.6 11.13 11.13 0 005.18 4.713l.317.141a.53.53 0 00.567-.088l1.08-.96a1 1 0 011.33 0z"
        stroke="#33363F"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoPhoneCall = React.memo(PhoneCall)
export default MemoPhoneCall
