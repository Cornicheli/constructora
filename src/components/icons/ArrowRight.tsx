import { IconProps } from '../../types';

export const ArrowRight = ({ size = 14, className }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}>
        <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
);
