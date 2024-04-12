import * as React from "react"

function IndianMethodPath(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1440 462" fill="none" {...props}>
      <g filter="url(#prefix__filter0_b_112_2573)">
        <path d="M-480 0h2400v119.556L-480 419.555V0z" fill="#F7FFFD" />
      </g>
      <path
        d="M1320 194.006l466.67-58.353v71.111L1320 265.117v-71.111z"
        fill="#B6EBDF"
      />
      <path
        d="M840 183.787l680-85.343v71.111l-680 85.343v-71.111z"
        fill="#92D9C9"
      />
      <path
        d="M1017.78 90.352L1484.44 32v71.111l-466.66 58.352v-71.11z"
        fill="#17AD8B"
      />
      <path
        d="M-80 298.463l466.667-58.353v71.111L-80 369.574v-71.111z"
        fill="#B6EBDF"
      />
      <path
        d="M-248.889 390.672l466.667-58.352v71.111l-466.667 58.352v-71.111z"
        fill="#27B293"
      />
      <defs>
        <filter
          id="prefix__filter0_b_112_2573"
          x={-591.111}
          y={-111.111}
          width={2622.22}
          height={641.778}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={55.556} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_112_2573"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_backgroundBlur_112_2573"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoIndianMethodPath = React.memo(IndianMethodPath)
export default MemoIndianMethodPath
