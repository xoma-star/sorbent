import React from 'react';
import Title from "../../shared/Title";
import Text from "../../shared/Text";
import ocean_spill from '../../shared/images/ocean_spill.png'
import concrete_spill from '../../shared/images/concrete_spill.png'
import ground_spill from '../../shared/images/ground_spill.png'

const AlsoUsage = () => {
    return (
        <div className={'flex flex-col mt-4 gap-8'}>
            <Title className={'lg:px-40 xl:px-80 px-8 py-16'}>Области и способы применения сорбента ЭКОСОРБ</Title>
            <div className={'flex sm:flex-row flex-col-reverse items-center gap-12'}>
                <img height={'auto'} src={ocean_spill} alt={'neft'} className={'sm:rounded-r-3xl w-full shrink-0 sm:w-[40%] mb-8 sm:mb-0'}/>
                <div className={'sm:pr-16 px-4'}>
                    <Title size={'m'}>Ликвидация аварийных разливов нефтепродуктов с водной поверхности </Title>
                    <Text className={'mt-8'}>Методы по очистке поверхности воды от нефтепродуктов можно разделить на физические, механические и химические.
                        Применение механических методов ликвидации эффективно только в первые часы после разлива, также существенным недостатком механических
                        способов ликвидации разливов нефти являются низкая степень очистки. Поэтому, для лучшей очистки воды от нефтепродуктов необходимом
                        применение нефтесорбентов. Нефтесорбент из отхода сахарной промышленности ЭКОСОРБ обеспечивают высокую степень очистки водный объектов
                        от нефтяной пленки, является экологичным и безопасным материалом. </Text>
                </div>
            </div>
            <div className={'flex sm:flex-row flex-col items-center gap-12'}>
                <div className={'sm:pl-16 px-4'}>
                    <Title size={'m'}>Ликвидация аварийных разливов нефтепродуктов на почве</Title>
                    <Text className={'mt-8'}>Данный метод позволяет гарантированно снизить остаточное содержание
                        загрязнении в почве до нормативных значений в течение нескольких месяцев.</Text>
                </div>
                <img height={'auto'} src={ground_spill} alt={'neft'} className={'sm:rounded-l-3xl w-full shrink-0 sm:w-[40%] mb-8 sm:mb-0'}/>
            </div>
            <div className={'flex sm:flex-row flex-col-reverse items-center gap-12'}>
                <img height={'auto'} src={concrete_spill} alt={'neft'} className={'sm:rounded-r-3xl w-full shrink-0 sm:w-[40%] mb-8 sm:mb-0'}/>
                <div className={'sm:pr-16 px-4'}>
                    <Title size={'m'}>Ликвидация разливов нефтепродуктов с твердых поверхностей</Title>
                    <Text className={'mt-8'}>Отечественный органический сорбент ЭКОСОРБ легко и быстро
                        обезвреживает загрязненные нефтепродуктами поверхности.</Text>
                </div>
            </div>
        </div>
    );
};

export default AlsoUsage;