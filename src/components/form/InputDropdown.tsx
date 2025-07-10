import { typeDropdownProps } from './interfaceForm';
import Label from './Label';
import { optionService } from './serviceOption';

export default function InputDropdown({ title, onChange }: typeDropdownProps) {
    return (
        <div className="col-span-full">
            <Label title={title} />

            <select
                onChange={onChange}
                className="block w-full appearance-none rounded border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
                <option disabled selected hidden className="text-gray-300">
                    Selecciones un servicio
                </option>
                {optionService.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
