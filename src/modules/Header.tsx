import React from 'react';
import Title from "../shared/Title";
import Logo from "../shared/Logo";

const Header = () => {
    return (
        <header className={'flex flex-row border-l-2 ml-6 sm:ml-24 py-12 border-red-400 justify-between pr-12 items-center flex-wrap gap-6'}>
            <div className={'flex flex-row gap-6 items-center flex-wrap'}>
                <Logo width={120} height={40}/>
                <Title size={'m'}>Производство нефтесорбентов</Title>
            </div>
            <Title size={'m'}><a href={'tel:+79991318461'}>+7 999 131 84 61</a></Title>
        </header>
    );
};

export default Header;