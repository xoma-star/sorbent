import React from 'react';
import Title from "../../shared/Title";
import Text from "../../shared/Text";

const Demonstration = () => {
    return (
        <div className={'min-h-[100vh] bg-black w-full flex items-center justify-center text-white flex-col gap-8 px-8 py-16'}>
            <Title>Демонстрация принципа действия<br/> сорбента ЭКОСОРБ</Title>
            <iframe className={'lg:w-[60%] max-lg:w-[100%] lg:h-[640px] max-lg:h-[320px]'}
                    src="https://www.youtube.com/embed/PylIKLtMBhI?controls=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen/>
            <Text className={'sm:w-[60%]'}>Для примера показан процесс впитывания отработанного машинного масла.
                Сорбент впитывает любые нефтепродукты, является органическим, способен к биоразложению, легко утилизируется термически.
                Тесты проведены в Санкт-Петербургском государственном университете промышленных технологий и дизайна.
            </Text>
        </div>
    );
};

export default Demonstration;
