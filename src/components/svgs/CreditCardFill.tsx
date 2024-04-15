import * as React from "react"

function CreditCardFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.002 10h19.996c-.012-2.175-.108-3.353-.877-4.121C20.243 5 18.828 5 16 5H8c-2.828 0-4.243 0-5.121.879-.769.768-.865 1.946-.877 4.121zM22 12H2v2c0 2.828 0 4.243.879 5.121C3.757 20 5.172 20 8 20h8c2.828 0 4.243 0 5.121-.879C22 18.243 22 16.828 22 14v-2zM7 15a1 1 0 100 2h.01a1 1 0 100-2H7z"
        fill="#222"
      />
    </svg>
  )
}

const MemoCreditCardFill = React.memo(CreditCardFill)
export default MemoCreditCardFill
