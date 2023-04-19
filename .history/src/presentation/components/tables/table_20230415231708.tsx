import { HeartIcon } from "@heroicons/react/24/outline";
import { TextHeading1, TextParagraph } from "../..";

export type GridTableProps = {
    index: number
}

const gridTable: React.FC<GridTableProps> = ({ index }) => {
    const borderClasses = () => {
        let classes = 'border-white border-opacity-30';

        if (index % 2 !== 0) {
            classes += ' border-l-2';
        }
        if (Math.floor(index / 2) !== 0) {
            classes += ' border-t-2 sm:border-t-0';
        }
        if (index % 4 !== 0 && index >= 2) {
            classes += ' md:border-l-2';
        }
        if (Math.floor(index / 4) !== 0) {
            classes += ' md:border-t-2';
        }

        return classes;
    };

    return (
        <div className={`flex flex-col items-center ${borderClasses()}`}>
            <p>
                <HeartIcon className="w-8 h-auto text-blue-500" />
            </p>
            <h3>
                <TextHeading1>11</TextHeading1>
            </h3>
            <p>
                <TextParagraph className="font-500">resolvidos</TextParagraph>
            </p>
        </div>
    );
};

export default gridTable