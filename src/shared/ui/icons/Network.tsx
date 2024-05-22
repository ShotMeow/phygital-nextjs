import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Network: FC<Props> = ({ width = 25, height = 24, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3ZM1.5 12C1.5 5.92487 6.42487 1 12.5 1C18.5751 1 23.5 5.92487 23.5 12C23.5 18.0751 18.5751 23 12.5 23C6.42487 23 1.5 18.0751 1.5 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 12C1.5 11.4477 1.94772 11 2.5 11H22.5C23.0523 11 23.5 11.4477 23.5 12C23.5 12.5523 23.0523 13 22.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.50023 12.0001C9.56877 15.0749 10.6263 18.0353 12.5 20.4493C14.3737 18.0353 15.4312 15.0749 15.4998 12.0001C15.4312 8.92527 14.3737 5.96495 12.5 3.5509C10.6263 5.96495 9.56877 8.92527 9.50023 12.0001ZM12.5 2.00011L11.7617 1.32568C9.09689 4.24301 7.58251 8.02896 7.50022 11.9793C7.49993 11.9932 7.49993 12.0071 7.50022 12.0209C7.58251 15.9713 9.09689 19.7572 11.7617 22.6745C11.9511 22.8819 12.2191 23.0001 12.5 23.0001C12.7809 23.0001 13.0489 22.8819 13.2383 22.6745C15.9031 19.7572 17.4175 15.9713 17.4998 12.0209C17.5001 12.0071 17.5001 11.9932 17.4998 11.9793C17.4175 8.02896 15.9031 4.24301 13.2383 1.32568L12.5 2.00011Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Network;
