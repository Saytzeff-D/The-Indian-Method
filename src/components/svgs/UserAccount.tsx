import * as React from "react"

function UserAccount(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={21} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.21.444a5.418 5.418 0 00-1.504 10.625c-1.784.218-3.315.85-4.468 1.986C.77 14.5.027 16.655.027 19.465a.71.71 0 101.42 0c0-2.571.677-4.304 1.787-5.399 1.113-1.097 2.774-1.664 4.976-1.664 2.203 0 3.864.567 4.977 1.664 1.11 1.095 1.787 2.828 1.787 5.399a.71.71 0 001.42 0c0-2.81-.743-4.964-2.21-6.41-1.154-1.137-2.685-1.768-4.47-1.986A5.418 5.418 0 008.21.444zM4.213 5.862a3.998 3.998 0 117.997 0 3.998 3.998 0 01-7.997 0z"
        fill="#27B293"
      />
    </svg>
  )
}

const MemoUserAccount = React.memo(UserAccount)
export default MemoUserAccount
