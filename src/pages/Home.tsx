import BetweenLine from '../components/BetweenLine.tsx';
import Card from '../components/Card.tsx';
import IconCard from '../components/IconCard.tsx';
import { FaWheelchairMove } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { FaDog } from 'react-icons/fa6';
import { FaCircleInfo } from 'react-icons/fa6';
import houseDownsize from '../assets/pavillon_downsized.webp';

import testBurger from '../assets/burger.jpg';
import testTisch from '../assets/tisch.jpg';
import local from '../assets/loka.jpg';

const Home = () => {
    return (
        <div className={'flex flex-col gap-5'}>
            <div className={'group relative'}>
                <img
                    className={'border-2 border-gray-400 brightness-125 saturate-150 md:w-full'}
                    src={houseDownsize}
                    alt={'house'}
                />
                <div
                    className={
                        'bottom-0 bg-none p-2 transition-all duration-700 md:absolute md:h-0 md:w-full md:group-hover:h-[150px] md:group-hover:bg-white md:group-hover:bg-opacity-65'
                    }
                >
                    <p
                        className={
                            'hidden animate-fade text-[14px] text-zinc-700 md:text-base md:font-bold md:group-hover:flex'
                        }
                    >
                        Tauchen Sie ein in die idyllische Kulisse unseres Strandpavillons, wo die sanften Wellen des
                        Meeres an den goldenen Sand streichen. Unser Pavillon bietet nicht nur einen Rückzugsort,
                        sondern ein Erlebnis für alle Sinne. Von hier aus können Sie den Tag mit einem köstlichen
                        Angebot an frischem Fingerfood beginnen, das perfekt mit einem erfrischenden Getränk kombiniert
                        wird. Genießen Sie das Rauschen der Brandung im Hintergrund, während die Sonne langsam über dem
                        Horizont untergeht, ein spektakuläres Schauspiel, das den Himmel in warme Farben taucht. Egal,
                        ob Sie hier sind, um einen besonderen Anlass zu feiern oder einfach nur die Schönheit der Natur
                        zu genießen, unser Strandpavillon lädt Sie ein, den Moment zu umarmen und die Augenblicke des
                        Lebens zu feiern, die uns ewig in Erinnerung bleiben.
                    </p>
                </div>
            </div>
            <BetweenLine />
            <div className={'mx-2 flex flex-col items-center gap-y-3 md:flex-row md:items-start md:gap-0'}>
                <Card
                    src={testBurger}
                    link={'/speisekarte'}
                    text={
                        'Unsere Speisekarte ist voll von köstlichen Fingerfood-Optionen, perfekt für jeden Anlass. Von knusprigen Snacks bis zu herzhaften Happen – bei uns findest du alles, was dein Herz begehrt....'
                    }
                />
                <Card
                    src={testTisch}
                    link={'/events'}
                    text={
                        'Feiern Sie im Strandpavillon! Ob Hochzeiten, Geburtstage oder Firmenfeiern – genießen Sie die traumhafte Meereskulisse und erstklassigen Service für Ihre besonderen Anlässe.....'
                    }
                />
                <Card
                    src={local}
                    link={'/bistro'}
                    text={
                        'Genießen Sie köstliches Fingerfood direkt am Meer. Ob für einen entspannten Snack zwischendurch oder ein lockeres Treffen mit Freunden – unsere leckeren Häppchen und die traumhafte Aussicht laden zum Verweilen ein....'
                    }
                />
            </div>
            <BetweenLine />
            <div className={'mx-2 flex flex-col md:flex-row'}>
                <IconCard
                    icon={<FaWheelchairMove className={'text-gray-600'} size={40} />}
                    text={'Barrierefrei'}
                    content={'Unser Lokal ist rollstuhlgerecht und für alle zugänglich.'}
                />
                <IconCard
                    icon={<FaStar className={'text-gray-600'} size={40} />}
                    text={'Events'}
                    content={'Feiern Sie Hochzeiten, Geburtstage und mehr in unserem Lokal.'}
                />
                <IconCard
                    icon={<FaDog size={40} className={'text-gray-600'} />}
                    text={'Hundefreundlich'}
                    content={'In unserem Lokal sind Hunde herzlich willkommen.'}
                />
                <IconCard
                    icon={<FaCircleInfo size={40} className={'text-gray-600'} />}
                    text={'Spezielles'}
                    content={'Besondere Anfragen? Sprechen Sie uns gerne an, wir sind für Sie da!'}
                />
            </div>
        </div>
    );
};

export default Home;
