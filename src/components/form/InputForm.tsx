import Label from './Label';
import { typeFormProps } from './interfaceForm';

export default function InputForm({
    value,
    onChange,
    name,
    title,
    placeholder,
}: typeFormProps) {
    return (
        <div className="col-span-full">
            <Label title={title} />
            <input
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="block w-full appearance-none rounded border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
        </div>
    );
}
