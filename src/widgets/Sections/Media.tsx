import React from 'react';
import Title from "../../shared/Title";
import bst from './media/bst.jpg'
import mo from './media/minobr.jpg'
import rg from './media/rg.jpg'
import nr from './media/nr.jpeg'
import nl from './media/nl.jpg'
import e from './media/e+.jpg'
import Text from "../../shared/Text";

const links = [
    {
        link: 'https://m.facebook.com/1595605930539855/posts/3329990240434740?_rdr',
        source: 'Минобрнауки России',
        text: 'Ученые Уфимского государственного авиационного технического университета запатентовали новый экологически безопасный сорбент для очистки воды, загрязненной нефтью и нефтепродуктами.',
        pic: mo
    },
    {
        link: 'https://bash.news/news/149158-v-ufe-sozdali-sorbent-iz-svekly-dlya-ochistki-vody-ot-nefteproduktov',
        source: 'БСТ',
        text: 'В Уфе создали сорбент из свеклы для очистки воды от нефтепродуктов',
        pic: bst
    },
    {
        link: 'https://scientificrussia.ru/articles/v-ufe-razrabotali-sorbent-dlya-ochistki-vody-iz-othodov-saharnoj-svekly',
        source: 'Портал «Научная Россия»',
        text: 'В Уфе разработали сорбент для очистки воды из отходов сахарной свеклы',
        pic: nr
    },
    {
        link: 'https://nangs.org/news/ecology/v-ufimskom-aviatsionnom-vuze-predlozhili-ispolyzovaty-zhom-svekly-kak-sorbent-nefteproduktov',
        source: 'Нефтегазовая лента',
        text: 'В Уфимском авиационном вузе предложили использовать жом свеклы как сорбент нефтепродуктов',
        pic: nl
    },
    {
        link: 'https://e-plus.media/people-of-progress/svekolnyj-zhom-sluchajno-okazalsya-pod-rukoj-vnuzhnyj-moment-i-my-prevratili-ego-v-poleznyj-dlya-energetiki-produktra/',
        source: 'ЭНЕРГИЯ+',
        text: '«У нас в руках был отход пищевой промышленности, а мы превратили его в полезный для энергетики продукт»',
        pic: e
    },
    {
        link: 'https://rg.ru/2021/04/07/reg-pfo/v-ufe-pridumali-kak-s-pomoshchiu-svekly-ochistit-vodu-ot-nefteproduktov.html',
        source: 'Российская газета',
        text: 'В Уфе придумали, как с помощью свеклы очистить воду от нефтепродуктов ',
        pic: rg
    }
]

const Media = () => {
    return (
        <div className={'px-8 sm:px-40 py-16 text-center'}>
            <Title>О нас в СМИ</Title>
            <div className={'grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8'}>
                {links.map(x => <div
                    key={x.source}
                    className={'flex lg:flex-row flex-col gap-4 min-h-72 border-[1px] p-4'}
                >
                    <img className={'h-full lg:w-52 object-cover'} src={x.pic} />
                    <div className={'lg:w-[60%] flex flex-col text-left justify-between gap-8'}>
                        <Text className={'font-bold'} size={'l'}>{x.source}</Text>
                        <Text>{x.text}</Text>
                        <a href={x.link}>Читать в источнике</a>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default Media;
