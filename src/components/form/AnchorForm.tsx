import { AnchorFormProps } from './interfaceForm';

export default function AnchorForm({ href, title }: AnchorFormProps) {
    return (
        <a
            className="unline-flex w-96 cursor-pointer items-center justify-center rounded border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
            href={href}
            target="about_blank">
            {title}
        </a>
    );
}
