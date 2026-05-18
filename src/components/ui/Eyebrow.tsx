interface EyebrowProps {
    label: string;
    centered?: boolean;
    className?: string;
}

export const Eyebrow = ({ label, centered, className }: EyebrowProps) => (
    <div
        className={`flex items-center gap-2.5 ${centered ? 'justify-center' : ''} ${className ?? ''}`}>
        <span className="block h-px w-7 bg-gold" />
        <span className="text-[11px] font-semibold uppercase tracking-[.32em] text-gold">
            {label}
        </span>
    </div>
);
