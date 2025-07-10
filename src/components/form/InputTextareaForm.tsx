import Label from './Label';
import { typeFormProps } from './interfaceForm';

export default function InputTextareaForm({
    title,
    name,
    onChange,
    placeholder,
}: typeFormProps) {
    return (
        <div className="col-span-full">
            <Label title={title} />
            <textarea
                onChange={
                    onChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>
                }
                name={name}
                placeholder={placeholder}
                className="block h-40 w-full appearance-none rounded border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
        </div>
    );
}
