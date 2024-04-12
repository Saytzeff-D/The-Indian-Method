import * as React from "react"

function WalletGreen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={14} fill="none" {...props}>
      <rect x={1} y={1} width={18} height={12} rx={2} stroke="#27B293" />
      <path d="M3 4h3M14 10h3" stroke="#27B293" strokeLinecap="round" />
      <circle cx={10} cy={7} r={2} stroke="#27B293" />
    </svg>
  )
}

const MemoWalletGreen = React.memo(WalletGreen)
export default MemoWalletGreen
