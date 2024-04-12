import * as React from "react"

function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="w-8" viewBox="0 0 36 36" fill="none" {...props}>
      <rect width={36} height={36} rx={8} fill="#000" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18c0-3.595 0-5.393.857-6.687a5.158 5.158 0 011.456-1.456C12.607 9 14.405 9 18 9s5.393 0 6.687.857a5.158 5.158 0 011.456 1.456C27 12.607 27 14.405 27 18s0 5.393-.857 6.687a5.158 5.158 0 01-1.456 1.456C23.393 27 21.595 27 18 27s-5.393 0-6.687-.857a5.158 5.158 0 01-1.456-1.456C9 23.393 9 21.595 9 18zm13.66 0a4.66 4.66 0 11-9.32 0 4.66 4.66 0 019.32 0zM18 21.083a3.083 3.083 0 100-6.166 3.083 3.083 0 000 6.166zm4.843-6.881a1.095 1.095 0 100-2.19 1.095 1.095 0 000 2.19z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoInstagram = React.memo(Instagram)
export default MemoInstagram
