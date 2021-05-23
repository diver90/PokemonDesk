import React from "react";

interface IEmptyPage {
    title?: string
}

const EmptyPage: React.FC<IEmptyPage> = ({title}) => {
    return (
        <div>
            <div>
                This is an empty page for {title}!
            </div>
        </div>
    );
}

export default EmptyPage;