import * as React from "react"

function Tiktok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="w-8"
      viewBox="0 0 36 36"
      width={36}
      height={36}
      fill="none"
      {...props}
    >
      <rect width={36} height={36} rx={8} fill="#000" />
      <path
        d="M22.227 9h-3.37v12.942c0 1.542-1.296 2.809-2.91 2.809-1.613 0-2.91-1.267-2.91-2.809 0-1.514 1.268-2.754 2.824-2.809v-3.249c-3.428.055-6.194 2.726-6.194 6.058 0 3.36 2.823 6.058 6.309 6.058s6.309-2.726 6.309-6.058v-6.636a8.077 8.077 0 004.465 1.432v-3.25c-2.535-.082-4.523-2.065-4.523-4.488z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoTiktok = React.memo(Tiktok)
export default MemoTiktok
