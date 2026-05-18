import { IconProps } from '../../types';

export const ImageIcon = ({ size = 14, className }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 17l5-5 4 4 3-3 6 6" />
    </svg>
);
