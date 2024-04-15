import * as React from "react"

function Desktop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M4 8c0-.971.002-1.599.064-2.061.059-.434.153-.57.229-.646.076-.076.212-.17.646-.229C5.4 5.002 6.029 5 7 5h10c.971 0 1.599.002 2.061.064.434.059.57.153.646.229.076.076.17.212.229.646C19.998 6.4 20 7.029 20 8v8H4V8zM3.667 16C2.747 16 2 16.746 2 17.667A2.333 2.333 0 004.333 20h15.334A2.333 2.333 0 0022 17.667c0-.92-.746-1.667-1.667-1.667H3.667z"
        stroke="#33363F"
        strokeWidth={2}
      />
    </svg>
  )
}

const MemoDesktop = React.memo(Desktop)
export default MemoDesktop
