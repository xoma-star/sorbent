import React from 'react';

const markers = ['применение', 'преимущества', 'характеристики', 'документы', 'вопросы и ответы', 'контакты']

const Menu = () => {
    return (
        <ul className={'fixed sm:block hidden top-64 left-12 sm:left-24'}>
            {markers.map(x => (<li key={`menu ${x}`} className={'duration-75 hover:border-l-4 border-red-400 cursor-pointer pl-2 mb-4 text-lg'}>
                {[x[0].toUpperCase(), ...x.slice(1)].join('')}
            </li>))}
        </ul>
    );
};

export default Menu;