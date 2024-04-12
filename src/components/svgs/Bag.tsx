import * as React from "react"

function Bag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={26} height={23} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_112_2842)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.677 3.798c0-.877.711-1.588 1.588-1.588h4.765c.877 0 1.588.71 1.588 1.588v1.588h6.353c.877 0 1.588.711 1.588 1.588v4.765c0 1.411-.615 2.68-1.588 3.551v5.184a2.382 2.382 0 01-2.383 2.382H4.707a2.382 2.382 0 01-2.383-2.382V15.29a4.754 4.754 0 01-1.588-3.551V6.974c0-.877.711-1.588 1.588-1.588h6.353V3.798zm6.353 0v1.588h-4.765V3.798h4.765zM2.324 6.974h20.647v4.765A3.17 3.17 0 0121.7 14.28c-.531.398-1.19.634-1.906.634h-6.352v-.794a.794.794 0 00-1.588 0v.794H5.5a3.16 3.16 0 01-1.906-.635 3.17 3.17 0 01-1.27-2.541V6.974zm9.53 9.53H5.5a4.757 4.757 0 01-1.588-.272v4.242c0 .438.355.794.794.794h15.881a.794.794 0 00.794-.794v-4.242a4.756 4.756 0 01-1.588.271h-6.352v.794a.794.794 0 01-1.588 0v-.794z"
          fill="#27B293"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_112_2842">
          <path
            fill="#fff"
            transform="translate(.625 .87)"
            d="M0 0h24.75v22H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const MemoBag = React.memo(Bag)
export default MemoBag
