import React from 'react';
import classNames from "classnames";

interface props {
    size?: 's' | 'm' | 'l',
    className?: string,
    children?: React.ReactNode
}

const Text = ({className, children, size = 'm'}: props) => {
    return (
        <p className={classNames(className, {'text-xl': size === 'l', 'text-lg': size === 'm', 'text-md': size === 's'})}>
            {children}
        </p>
    );
};

export default Text;