import * as React from "react"

function ChatCircle(props: React.SVGProps<SVGSVGElement>) {
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
        d="M37 27.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.379 8.379 0 01-3.8-.9L19 37l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.381 8.381 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
        stroke="#17AD8B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoChatCircle = React.memo(ChatCircle)
export default MemoChatCircle
