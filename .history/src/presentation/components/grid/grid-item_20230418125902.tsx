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
        <div className={`flex flex-col items-center ${borderClasses()} ${className}`}>
            <p>
                <span>
                    {indicator && (
                        <span className="w-[40px] h-auto inline-block"
                            dangerouslySetInnerHTML={{ __html: indicator.svgIcon }}
                        />
                    )}
                </span>
            </p>
            <h3>
                <TextHeading1 className="text-center">{indicator && indicator.title}</TextHeading1>
            </h3>
            <p>
                <TextParagraph className=" text-center font-500">{indicator && indicator.description}</TextParagraph>
            </p>
        </div>
    );
};

export default gridItem