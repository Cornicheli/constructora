import { LabelProps } from './interfaceForm';

export default function Label({ title }: LabelProps) {
    return (
        <label className="mb-3 block text-sm font-medium text-gray-600">
            {title}
        </label>
    );
}
