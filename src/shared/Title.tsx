import React from 'react';
import classNames from "classnames";

interface props {
    size?: 's' | 'm' | 'l' | 'xl',
    className?: string,
    children: React.ReactNode
}

const Title = ({size = 'l', className, children}: props) => {
    switch (size) {
        case 'xl': return <h1 className={classNames(className, 'text-6xl sm:text-9xl font-bold')}>{children}</h1>
        case 'l': return <h1 className={classNames(className, 'text-3xl sm:text-6xl font-semibold')}>{children}</h1>
        case 'm': return <h2 className={classNames(className, 'text-2xl sm:text-4xl font-semibold')}>{children}</h2>
        case 's': return <h3 className={classNames(className, 'text-xl')}>{children}</h3>
    }
};

export default Title;