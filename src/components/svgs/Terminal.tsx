import * as React from "react";

function Terminal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={16} fill="none" {...props}>
      <rect
        x={1}
        y={1}
        width={17}
        height={14}
        rx={2}
        stroke="#27B293"
        strokeWidth={2}
      />
      <path
        d="M5 6l2 2-2 2"
        stroke="#27B293"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10h4"
        stroke="#27B293"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoTerminal = React.memo(Terminal);
export default MemoTerminal;
