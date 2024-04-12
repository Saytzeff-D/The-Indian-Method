import * as React from "react"

function Camera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.854 8C3.83 8 3 8.83 3 9.854v5.003c0 2.005 0 3.007.46 3.74a3 3 0 00.944.943c.732.46 1.734.46 3.739.46h7.714c2.005 0 3.007 0 3.74-.46a3 3 0 00.943-.944c.46-.732.46-1.734.46-3.739V9.854C21 8.83 20.17 8 19.146 8a1.854 1.854 0 01-1.659-1.025l-.82-1.642c-.11-.22-.165-.33-.228-.425a2 2 0 00-1.447-.895C14.877 4 14.755 4 14.508 4H9.491c-.246 0-.37 0-.483.013a2 2 0 00-1.447.895c-.063.095-.118.205-.228.425l-.82 1.642A1.854 1.854 0 014.853 8zM14 13a2 2 0 11-4 0 2 2 0 014 0zm2 0a4 4 0 11-8 0 4 4 0 018 0z"
        fill="#222"
      />
    </svg>
  )
}

const MemoCamera = React.memo(Camera)
export default MemoCamera
