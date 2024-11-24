import { ComponentProps } from "react";

export function Candle(props: ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 19 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect y="6" width="6" height="9" rx="1" fill="#E6007A" />
      <rect x="2" y="3" width="2" height="15" rx="1" fill="#E6007A" />
      <rect x="7" y="12" width="6" height="9" rx="1" fill="#E6007A" />
      <rect x="9" y="9" width="2" height="15" rx="1" fill="#E6007A" />
      <rect x="13" y="3" width="6" height="9" rx="1" fill="#E6007A" />
      <rect x="15" width="2" height="15" rx="1" fill="#E6007A" />
    </svg>
  );
}
