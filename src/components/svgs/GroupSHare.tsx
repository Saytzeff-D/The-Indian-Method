import * as React from "react"

function GroupSHare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M9 6a3 3 0 106 0 3 3 0 00-6 0h0zM4.438 13.902a3 3 0 103 5.195 3 3 0 00-3-5.196h0zM19.562 13.902a3 3 0 11-2.999 5.194 3 3 0 012.999-5.194h0z"
        stroke="#33363F"
        strokeWidth={2}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.07 6.643a3 3 0 01.42-2.286 9 9 0 00-6.23 10.79 3 3 0 011.77-1.506 6.998 6.998 0 014.04-6.998zm5.86 0a7 7 0 014.04 6.998 3 3 0 011.77 1.507 9.002 9.002 0 00-6.23-10.79 3.002 3.002 0 01.42 2.285zm3.3 12.852a3.005 3.005 0 01-2.19-.779 7 7 0 01-8.08 0 3.004 3.004 0 01-2.19.78 9 9 0 0012.46 0z"
        fill="#33363F"
      />
    </svg>
  )
}

const MemoGroupSHare = React.memo(GroupSHare)
export default MemoGroupSHare
