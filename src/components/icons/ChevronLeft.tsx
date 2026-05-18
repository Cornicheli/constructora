import { IconProps } from '../../types';

export const ChevronLeft = ({ size = 14, className }: IconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}>
        <path d="M15 6l-6 6 6 6" />
    </svg>
);
