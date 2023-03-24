import React from 'react';
import src from './images/logo.svg'

interface props {
    width?: number,
    height?: number
}

const Logo = ({width, height}: props) => {
    return (
        <img width={width} height={height} src={src} alt={'logo'}/>
    );
};

export default Logo;