import React from "react";

import './Heading.module.scss';

interface IHeading {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode | null;
    className?: string
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Heading: React.FC<IHeading> = ({
                                         level,
                                         className = '',
                                         children = null,
                                     }: IHeading) => {
    const Tag = `h${level}` as HeadingTag;
    return (
        <Tag className={className}>
            {children}
        </Tag>
    );
};

export default Heading;