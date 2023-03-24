import React from 'react';

interface props {
    children?: React.ReactNode
}

const MainSection = ({children}: props) => {
    return (
        <div className={'ml-6 sm:ml-24 sm:pl-48 pl-8 border-l-2 border-red-400 pr-12'}>
            {children}
        </div>
    );
};

export default MainSection;