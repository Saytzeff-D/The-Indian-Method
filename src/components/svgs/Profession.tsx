import * as React from "react"

function Profession(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 17 31" width={15} height={28} fill="none" {...props}>
      <path
        d="M15.696 30.2V6.558a1.209 1.209 0 00-.826-1.146L2.803 1.388a1.205 1.205 0 00-1.588 1.146v27.667M10.867 22.58v1.208M10.867 16.547v1.207M10.867 10.513v1.207M6.043 22.58v1.208M6.043 16.547v1.207M6.043 10.513v1.207"
        stroke="#A0A3BD"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const MemoProfession = React.memo(Profession)
export default MemoProfession
