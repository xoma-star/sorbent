import React from 'react';
import Title from "../../shared/Title";
import Text from "../../shared/Text";

const advantages = [
    {title: 'Высокая нефтеемкость', description: 'ЭКОСОРБ обладает высокой нефтеемкостью, что позволяет ему эффективно впитывать нефтепродукты из окружающей среды.'},
    {title: 'Экологичность', description: 'ЭКОСОРБ производится из отходов сахарной промышленности и не содержит вредных химических веществ, что делает его экологически безопасным.'},
    {title: 'Простота использования', description: 'ЭКОСОРБ очень прост в использовании и утилизации.'},
    {title: 'Универсальность', description: 'ЭКОСОРБ универсален и может использоваться в различных условиях, включая промышленные, морские и другие среды'},
    {title: 'Доступная цена', description: 'ЭКОСОРБ доступен по разумной цене и может быть легко приобретен для использования в различных сферах.'},
    // {title: 'Способность к биоразложению', description: 'ЭКОСОРБ имеет способность к биоразложению, что делает его еще более экологически безопасным.'}
]

const Advantages = () => {
    return (
        <div className={'lg:px-40 xl:px-80 px-12 py-16'} id={'advantages'}>
            <Title className={'text-center'}>Преимущества сорбента ЭКОСОРБ</Title>
            <div className={'grid lg:grid-cols-2 grid-cols-1 gap-8 pt-16'}>
                {advantages.map((x) => (
                    <div key={x.title + 'borjf'} className={'border-2 p-8 border-blue-300'}>
                        <Title size={'m'}>{x.title}</Title>
                        <Text className={'mt-4'} size={'m'}>{x.description}</Text>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Advantages;