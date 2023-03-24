import React from 'react';
import Title from "../../shared/Title";
import Text from "../../shared/Text";

const Usage = () => {
    return (
        <div className={'py-12'}>
            <Title>Где используется?</Title>
            <Text className={'mt-16 flex flex-row'} size={'l'}>
                ЭКОСОРБ является экологичным природным нефтесорбентом изготовленным из отхода сахарной промышленности
                и обладает высокой сорбционной емкостью по отношению к нефтепродуктам.
                <button className={'border-2 border-red-400 rounded-2xl whitespace-nowrap px-4 hover:bg-red-100 duration-100'}>Скачать презентацию</button>
            </Text>
        </div>
    );
};

export default Usage;