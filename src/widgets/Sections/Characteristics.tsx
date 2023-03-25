import React from 'react';
import Title from "../../shared/Title";
import Text from "../../shared/Text";

const characteristics = [
    {name: 'Внешний вид', value: 'Гранулы серо-коричневатого цвета'},
    {name: 'Насыпная плотность, кг/м3', value: '380-440'},
    {name: 'Влажность, %, не более', value: '3%'},
    {name: 'Растворимость', value: 'Нерастворим в воде'},
    {name: 'Средняя размер гранул, мм', value: '2-4'},
    {name: 'Нефтеемкость г/г', value: '3,7-4,5'}
]

const Characteristics = () => {
    return (
        <div className={'px-8 sm:px-40 py-16'} id={'characteristics'}>
            <Title className={'text-center'}>
                Технологические и физико-химические свойства
            </Title>
            <div className={'flex flex-col items-center mt-16 gap-4'}>
                {characteristics.map(x =>
                <div className={`flex flex-row justify-between sm:max-w-[640px] w-full border-b-2 border-blue-500 
                sm:hover:border-blue-500 sm:border-transparent duration-100 cursor-pointer sm:hover:scale-105`} key={x.name + 'asbjr'}>
                    <Text>{x.name}</Text>
                    <Text>{x.value}</Text>
                </div>)}
            </div>
        </div>
    );
};

export default Characteristics;