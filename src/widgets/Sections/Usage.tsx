import React from 'react';
import Title from "../../shared/Title";
import Text from '../../shared/Text'
import Button from "../../shared/Button";

import chemistry from '../../shared/images/chemistry.svg'
import factory from '../../shared/images/factory.svg'
import liftTruck from '../../shared/images/lift-truck.svg'
import oilPlatform from '../../shared/images/oil-platform.svg'
import oilPump from '../../shared/images/oil-pump.svg'
import port from '../../shared/images/port.svg'
import refinery from '../../shared/images/refinery.svg'
import checkmark from '../../shared/images/checkmark.svg'

const usages = [
    {name: 'Нефтеперерабатывающие производства', logo: oilPump},
    {name: 'Промышленные предприятия', logo: factory},
    {name: 'Транспортные компании', logo: liftTruck},
    {name: 'Предприятия по очистке нефти', logo: refinery},
    {name: 'Компании по добыче жидких углеводородов', logo: chemistry},
    {name: 'Морские гавани и причалы', logo: port},
    {name: 'Нефтяные платформы', logo: oilPlatform}
]

const Usage = () => {
    return (
        <div className={'py-16 lg:px-40 xl:px-80 px-12'} id={'usage'}>
            <div>
                <Title>Где используется?</Title>
                <Text className={'mt-6'} size={'l'}>
                    ЭКОСОРБ является экологичным природным нефтесорбентом изготовленным из отхода сахарной промышленности
                    и обладает высокой сорбционной емкостью по отношению к нефтепродуктам.
                </Text>
            </div>
            <div className={'grid lg:grid-cols-3 grid-cols-1 gap-8 py-16'} style={{wordBreak: 'break-word'}}>
                {usages.map(x => <div key={x.name + 'gasd'} className={'flex flex-row items-center gap-2'}>
                    <img src={checkmark} alt={x.name}/>
                    <span>{x.name}</span>
                </div>)}
            </div>
            <div className={'w-full py-4 text-center'}>
               <a href={'/presentation ECOSORB.pptx'} download={'презентация.pptx'}>
                   <Button className={'invert-[1]'}>
                       Скачать презентацию
                   </Button>
               </a>
            </div>
        </div>
    );
};

export default Usage;
