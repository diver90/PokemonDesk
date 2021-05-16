import React from "react";

interface ILayout {
    className: string
}

const Layout: React.FC<ILayout> = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
};

export default Layout;