import * as React from "react"

function SuccessCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 159 145" fill="none" {...props}>
      <rect
        opacity={0.5}
        x={14.789}
        y={0.765}
        width={51.543}
        height={51.543}
        rx={10}
        fill="#9E96FF"
      />
      <rect
        opacity={0.5}
        x={128.74}
        y={33.635}
        width={29.359}
        height={29.359}
        rx={10}
        fill="#9E96FF"
      />
      <rect
        opacity={0.5}
        x={0.74}
        y={75.635}
        width={31.533}
        height={31.533}
        rx={8}
        fill="#DEDBFF"
      />
      <rect
        opacity={0.5}
        x={115.027}
        y={107.586}
        width={36.593}
        height={36.593}
        rx={8}
        fill="#DEDBFF"
      />
      <circle cx={84.217} cy={79.141} r={60} fill="#00A481" />
      <g filter="url(#prefix__filter0_d_112_2162)">
        <path
          d="M61.5 82.385l12.98 12.98 32.452-32.45"
          stroke="#fff"
          strokeWidth={8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d_112_2162"
          x={27.5}
          y={32.915}
          width={113.432}
          height={100.451}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={15} />
          <feColorMatrix values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.3 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_112_2162"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_112_2162"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

const MemoSuccessCheck = React.memo(SuccessCheck)
export default MemoSuccessCheck
