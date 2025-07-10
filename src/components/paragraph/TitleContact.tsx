import { ParagraphProps } from './interfaceParagraph';

export default function TitleContact({ title }: ParagraphProps) {
    return (
        <h3 className="my-2 ml-2 text-lg font-semibold text-[#030608]">
            {title}
        </h3>
    );
}
