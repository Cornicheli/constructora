interface EyebrowProps {
    label: string;
    centered?: boolean;
    className?: string;
    variant?: 'light' | 'dark';
}

export const Eyebrow = ({
    label,
    centered,
    className,
    variant = 'light',
}: EyebrowProps) => {
    const barColor = variant === 'dark' ? 'bg-gold' : 'bg-navy';
    const textColor = variant === 'dark' ? 'text-gold' : 'text-mute';

    return (
        <div
            className={`flex items-center gap-2.5 ${centered ? 'justify-center' : ''} ${className ?? ''}`}>
            <span className={`block h-px w-7 ${barColor}`} />
            <span
                className={`text-[11px] font-semibold uppercase tracking-[.32em] ${textColor}`}>
                {label}
            </span>
        </div>
    );
};
