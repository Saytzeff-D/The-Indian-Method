import * as React from "react"

function MailRound(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={56} height={56} fill="none" {...props}>
      <rect x={4} y={4} width={48} height={48} rx={24} fill="#92D9C9" />
      <rect
        x={4}
        y={4}
        width={48}
        height={48}
        rx={24}
        stroke="#B6EBDF"
        strokeWidth={8}
      />
      <path
        d="M38 22c0-1.1-.9-2-2-2H20c-1.1 0-2 .9-2 2m20 0v12c0 1.1-.9 2-2 2H20c-1.1 0-2-.9-2-2V22m20 0l-10 7-10-7"
        stroke="#17AD8B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoMailRound = React.memo(MailRound)
export default MemoMailRound
