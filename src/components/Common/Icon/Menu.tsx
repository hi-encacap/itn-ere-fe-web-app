import { HTMLAttributes } from "react";

const IconMenu = (props: HTMLAttributes<HTMLOrSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export default IconMenu;
