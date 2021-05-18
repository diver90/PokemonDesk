import React from "react";

import './Heading.module.scss';

interface IHeading {
    level: 1 | 2 | 3 | 5 | 6;
    children?: React.ReactNode;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Heading: React.FC<IHeading> = ({
                                         level,
                                         children = null
                                     }: IHeading) => {
    const Tag = `h${level}` as HeadingTag;
    return (
        <Tag>
            {children}
        </Tag>
    );
};

export default Heading;