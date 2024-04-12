import * as React from "react"

function PhoneGreen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={19} fill="none" {...props}>
      <path
        d="M14.707 12.076l2.648 2.648a.912.912 0 010 1.29 5.471 5.471 0 01-7.151.508l-1.575-1.181a23.002 23.002 0 01-4.6-4.6L2.847 9.165a5.471 5.471 0 01.508-7.151.912.912 0 011.29 0l2.648 2.648a1 1 0 010 1.414L6.272 7.097a.533.533 0 00-.1.616 12.264 12.264 0 005.484 5.484.533.533 0 00.616-.1l1.02-1.02a1 1 0 011.415 0z"
        stroke="#27B293"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoPhoneGreen = React.memo(PhoneGreen)
export default MemoPhoneGreen
