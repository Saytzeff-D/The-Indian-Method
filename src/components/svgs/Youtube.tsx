import * as React from "react"

function Youtube(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.438 24.98l-4.062-.076c-1.315-.026-2.634.026-3.923-.248-1.962-.41-2.1-2.417-2.246-4.101-.2-2.368-.123-4.779.255-7.127.214-1.318 1.054-2.104 2.353-2.19 4.385-.31 8.8-.273 13.175-.128.462.013.928.086 1.383.168 2.25.403 2.304 2.679 2.45 4.594.146 1.935.084 3.88-.194 5.802-.223 1.592-.65 2.926-2.45 3.055-2.255.169-4.46.304-6.721.261 0-.01-.013-.01-.02-.01zm-2.388-4.03c1.7-.997 3.367-1.977 5.058-2.968-1.703-.997-3.368-1.978-5.058-2.969v5.938z"
        fill="currentColor"
      />
    </svg>
  )
}

const MemoYoutube = React.memo(Youtube)
export default MemoYoutube
