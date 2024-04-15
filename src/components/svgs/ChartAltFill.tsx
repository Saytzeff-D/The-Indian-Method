import * as React from "react"

function ChartAltFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.879 2.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121C20.243 2 18.828 2 16 2H8c-2.828 0-4.243 0-5.121.879zm14.953 6.676a1 1 0 00-1.664-1.11l-3.044 4.566-.459-.917c-.687-1.373-2.601-1.493-3.453-.215l-3.044 4.566a1 1 0 001.664 1.11l3.044-4.566.459.917c.687 1.373 2.601 1.493 3.453.215l3.044-4.566z"
        fill="#222"
      />
    </svg>
  )
}

const MemoChartAltFill = React.memo(ChartAltFill)
export default MemoChartAltFill
