import * as React from "react"

function ArrRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={14} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.772 6.705c0 .564.458 1.022 1.023 1.022h10.486l-3.709 3.709a1.023 1.023 0 001.446 1.446l5.455-5.454c.4-.4.4-1.047 0-1.447L10.018.527a1.023 1.023 0 00-1.446 1.446l3.709 3.709H1.795c-.565 0-1.023.458-1.023 1.023z"
        fill="#27B293"
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </svg>
  )
}

const MemoArrRight = React.memo(ArrRight)
export default MemoArrRight
