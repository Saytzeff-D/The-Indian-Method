import * as React from "react"

function Usercircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.977 9.977 0 01-3.443 7.55 7 7 0 00-13.114 0A9.977 9.977 0 012 12zm14.83 8.706l.013.045A9.955 9.955 0 0112 22a9.955 9.955 0 01-4.843-1.249 5 5 0 019.672-.045zM10 9a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z"
        fill="#222"
      />
      <rect x={2.5} y={2.5} width={19} height={19} rx={9.5} stroke="#222" />
    </svg>
  )
}

const MemoUsercircle = React.memo(Usercircle)
export default MemoUsercircle
