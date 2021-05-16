import React from "react";
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
    onClick: ( event: React.MouseEvent<HTMLButtonElement> ) => void,
    buttonColor: string,
    buttonSize: string,
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           buttonColor,
                                           buttonSize
}) => {
    return (
        <button
            type="button"
            className={
                cn(
                    s.root,
                    s[buttonSize as keyof typeof s],
                    s[buttonColor as keyof typeof s]
                )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;