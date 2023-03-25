import React from 'react';
import Button from "../shared/Button";
import Text from "../shared/Text";
import useScroll from "../hooks/useScroll";
import {Link} from 'react-scroll'


const menu = [
    {name: 'Применение', label: 'usage'},
    {name: 'Преимущества', label: 'advantages'},
    {name: 'Характеристики', label: 'characteristics'}
]

const Header = () => {
    const scrollDirection = useScroll()
    return (
        <header className={
            `sm:flex flex-row justify-end items-center flex-wrap gap-6 fixed top-0 left-0 z-10 px-4 py-8 w-full text-white bg-black duration-100 hidden`
        }
        style={{transform: scrollDirection === 'up' ? 'translateY(0)' : 'translateY(-120px)'}}
        >
            {menu.map(x => <Link to={x.label} smooth={true} key={x.name + 'menu'}>
                <Text className={'sm:hover:underline cursor-pointer'}>
                    {x.name}
                </Text>
            </Link>)}
            <Button onClick={() => window.open('tel:+7 999 131 84 61', '_self')}>+7 999 131 84 61</Button>
        </header>
    );
};

export default Header;