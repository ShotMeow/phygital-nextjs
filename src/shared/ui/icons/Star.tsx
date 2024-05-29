import type { FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Star: FC<Props> = ({ width = 16, height = 16, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4154_36851)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.50131 0.655518C5.65991 0.655518 5.80475 0.745548 5.87494 0.887758L7.06559 3.29988L9.72824 3.68907C9.88514 3.712 10.0154 3.822 10.0643 3.97284C10.1132 4.12367 10.0723 4.2892 9.9587 4.39983L8.03236 6.27609L8.48698 8.92675C8.5138 9.08308 8.44953 9.24107 8.3212 9.33429C8.19288 9.42751 8.02276 9.43979 7.88238 9.36596L5.50131 8.11379L3.12025 9.36596C2.97987 9.43979 2.80975 9.42751 2.68142 9.33429C2.5531 9.24107 2.48883 9.08308 2.51564 8.92675L2.97026 6.27609L1.04393 4.39983C0.930335 4.2892 0.889388 4.12367 0.938295 3.97284C0.987202 3.822 1.11749 3.712 1.27439 3.68907L3.93704 3.29988L5.12769 0.887758C5.19788 0.745548 5.34272 0.655518 5.50131 0.655518ZM5.50131 2.01354L4.58744 3.86494C4.5268 3.9878 4.40964 4.07299 4.27408 4.0928L2.22982 4.3916L3.7087 5.83204C3.80698 5.92776 3.85184 6.06573 3.82865 6.20095L3.47972 8.23538L5.30738 7.27424C5.42879 7.21039 5.57384 7.21039 5.69525 7.27424L7.52291 8.23538L7.17398 6.20095C7.15079 6.06573 7.19564 5.92776 7.29393 5.83204L8.77281 4.3916L6.72855 4.0928C6.59299 4.07299 6.47583 3.9878 6.41519 3.86494L5.50131 2.01354Z"
          fill="currentColor"
        />
        <path
          d="M4.45964 3.15535L5.29297 1.07202L6.7513 3.36369L9.66797 4.19702L7.58464 6.07202L8.0013 8.78035L5.5013 7.73869L2.79297 8.78035L3.41797 6.07202L1.54297 4.19702L2.79297 3.98869L4.45964 3.15535Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4154_36851">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(0.5 0.23877)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Star;