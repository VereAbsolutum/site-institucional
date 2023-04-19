import { HeartIcon } from "@heroicons/react/24/outline";
import { Children, ReactNode } from "react";
import { TextHeading1, TextParagraph } from "..";
import { Indicator } from "../../pages/types";

export type GridItemProps = {
    index: number,
    className: string
    indicator: Indicator
}

const gridItem: React.FC<GridItemProps> = ({ index, className, indicator }) => {
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
        <div className={`flex justify-center flex-col items-center justify-items-center p-4 ${borderClasses()} ${className}`}>
            <div >
                {indicator && (
                    <div className="w-[40px] y-auto" dangerouslySetInnerHTML={{ __html: indicator.svgIcon }} />
                )}
            </div>
            <div >
                <p className="text-center text-[25px]  md:text-2xl">
                    {indicator && indicator.value}
                </p>
            </div>
            <div >
                <p className="text-center">
                    <TextParagraph className="font-500">
                        {indicator && indicator.description}
                    </TextParagraph>
                </p>
            </div>
        </div>
    );
};

export default gridItem






