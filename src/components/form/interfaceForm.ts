export interface titleProps {
    title: string;
}

export interface typeFormProps extends titleProps {
    value: number | string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder?: string;
}

export interface typeDropdownProps extends titleProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface LabelProps extends titleProps {}

export interface AnchorFormProps extends titleProps {
    href: string;
}
