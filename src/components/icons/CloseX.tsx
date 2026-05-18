import { IconProps } from '../../types';

export const CloseX = ({ size = 14, className }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}>
        <path d="M6 6l12 12M18 6L6 18" />
    </svg>
);
