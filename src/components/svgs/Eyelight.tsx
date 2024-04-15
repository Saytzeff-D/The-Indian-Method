import * as React from "react"

function Eyelight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12 5c-5.444 0-8.469 4.234-9.544 6.116-.221.386-.331.58-.32.868.013.288.143.476.402.852C3.818 14.693 7.294 19 12 19c4.706 0 8.182-4.306 9.462-6.164.26-.376.39-.564.401-.852.012-.288-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5z"
        stroke="#222"
      />
      <circle cx={12} cy={12} r={3} stroke="#222" />
    </svg>
  )
}

const MemoEyelight = React.memo(Eyelight)
export default MemoEyelight
