import React from 'react';
import MorphicText from "../../shared/MorphicText";
import arrow from '../../shared/images/arrow-down.svg'

const Welcome = () => {
    return (
        <div className={'bg-black text-white text-center pb-8 w-full h-[100vh] flex flex-col justify-center relative items-center gap-4 relative'}>
            <h1 className={'text-7xl md:text-9xl font-bold px-4 bg-clip-text text-transparent bg-[url(https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80)]'}
                style={{backgroundPosition: '100% 21%', backgroundSize: '100%'}}
            >
                ЭКОСОРБ
            </h1>
            <h3 className={'text-xl'}>
                <MorphicText words={['экологичный', 'органический', 'универсальный', 'доступный', 'биоразлагаемый']}/> нефтесорбент<br/>
                от отечественного производителя
            </h3>
            <div className={'absolute bottom-3'}>
                <img src={arrow} alt={'arrow'} width={30} height={30}/>
            </div>
        </div>
    );
};

export default Welcome;