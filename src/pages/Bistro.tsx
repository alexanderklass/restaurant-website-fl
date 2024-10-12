import fingerfood from '../assets/fingerfood.jpg';
import drink from '../assets/drink.jpg';
const Bistro = () => {
    return (
        <div className={'flex flex-col gap-y-10'}>
            <div className={'flex flex-col items-center justify-evenly md:flex-row md:gap-5'}>
                <img className={'border-2 border-gray-400 md:w-[550px]'} src={fingerfood} alt={'picture'} />
                <div className={'md:w-[600px]'}>
                    <p className={'text-[14px] text-gray-500 md:text-base'}>
                        Erleben Sie das einladende Ambiente unseres Bistros, wo modernes Design harmonisch mit maritimen
                        Elementen verschmilzt. Tauchen Sie ein in die gemütliche Atmosphäre und nehmen Sie Platz in
                        unseren bequemen Sitzgelegenheiten. Genießen Sie die Vielfalt unseres köstlichen Fingerfoods und
                        entdecken Sie unsere erfrischenden Getränke. Ob Sie alleine eine Auszeit suchen oder mit
                        Freunden zusammenkommen – unser Bistro bietet den perfekten Raum, um den Tag zu genießen und den
                        Alltag hinter sich zu lassen.
                    </p>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-evenly md:flex-row-reverse'}>
                <img className={'border-2 border-gray-400 md:w-[600px]'} src={drink} alt={'picture'} />
                <div className={'md:w-[600px]'}>
                    <p className={'text-[14px] text-gray-500 md:text-base'}>
                        Genießen Sie den unvergleichlichen Strandblick, der sich vor Ihnen erstreckt – eine endlose
                        Weite von tiefblauem Meer und sanftem Sand. Das Rauschen der Wellen und die salzige Meeresbrise
                        umgeben Sie, während Sie die Sonne über dem Horizont auf- oder untergehen sehen. Ein perfekter
                        Ort, um dem Alltag zu entfliehen und die Schönheit der Natur zu erleben, die Ihre Sinne belebt
                        und Ruhe bringt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bistro;
