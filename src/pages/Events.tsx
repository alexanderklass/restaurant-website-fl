import events from '../assets/events.jpg';
import events2 from '../assets/events2.jpg';
const Events = () => {
    return (
        <div className={'flex flex-col gap-y-10'}>
            <div className={'flex flex-col items-center justify-evenly md:flex-row-reverse md:gap-5'}>
                <img className={'border-2 border-gray-400 md:w-[600px]'} src={events} alt={'picture'} />
                <div className={'md:w-[600px]'}>
                    <p className={'text-[14px] text-gray-500 md:text-base'}>
                        Unser eleganter Eventraum bietet die perfekte Kulisse für Ihre besonderen Anlässe. Mit
                        stilvollem Design und viel natürlichem Licht schafft dieser Raum eine einladende Atmosphäre für
                        Hochzeiten, Geburtstagsfeiern, Firmenveranstaltungen und mehr. Flexible Bestuhlungsmöglichkeiten
                        und moderne Ausstattung passen sich Ihren Bedürfnissen an und sorgen dafür, dass Ihr Event
                        reibungslos und unvergesslich wird. Lassen Sie uns gemeinsam Ihre Feier planen und gestalten –
                        für Momente, die in Erinnerung bleiben.
                    </p>
                    <p className={'my-3 hidden w-fit bg-zinc-700 p-1 text-white md:flex'}>
                        Reservierungen unter 0461-48087676
                    </p>
                    <button className={'flex bg-zinc-700 p-1 text-white md:hidden'}>Jetzt reservieren</button>
                </div>
            </div>

            <div className={'flex flex-col items-center justify-evenly md:flex-row md:gap-5'}>
                <img className={'border-2 border-gray-400 md:w-[600px]'} src={events2} alt={'picture'} />
                <div className={'md:w-[600px]'}>
                    <p className={'text-[14px] text-gray-500 md:text-base'}>
                        Gestalten Sie Ihre Feier mit einem individuellen Buffet ganz nach Ihren Wünschen. Wählen Sie aus
                        einer Vielzahl köstlicher Speisen, die speziell für Sie zubereitet und professionell präsentiert
                        werden. Genießen Sie ein maßgeschneidertes kulinarisches Erlebnis, das perfekt zu Ihrem Anlass
                        passt. Lassen Sie uns Ihr Event mit einem erstklassigen Buffet zu einem unvergesslichen Erlebnis
                        machen.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Events;
