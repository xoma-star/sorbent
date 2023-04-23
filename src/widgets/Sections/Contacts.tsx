import React from 'react';
import Title from "../../shared/Title";
import Button from "../../shared/Button";
import Text from "../../shared/Text";
import logo from '../../shared/images/logo_new.svg'

const Contacts = () => {
    return (
        <div className={'flex flex-col items-center justify-center py-16 gap-4 px-8'}>
            <Title>Контакты</Title>
            <div className={'invert-[1] flex flex-row gap-2 flex-wrap justify-center'}>
                <a href={'tel:+7 999 131 84 61'}><Button>+7 999 131 84 61</Button></a>
                <a href={'mailto:infoecosorb@mail.ru'}><Button>infoecosorb@mail.ru</Button></a>
            </div>
            <Text size={'s'} className={'mt-16 opacity-75'}>Разработано при поддержке Фонда содействия инновациям</Text>
            <a href={'https://www.fasie.ru/'} target={'_blank'}><img src={logo} alt={'ФСИ'}/></a>
        </div>
    );
};

export default Contacts;
