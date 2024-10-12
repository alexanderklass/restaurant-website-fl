import GridRow from '../components/GridRow.tsx';

const Menu = () => {
    return (
        <div className={'flex flex-col items-start justify-center gap-y-5 md:w-full md:flex-row md:gap-x-5'}>
            <div className={'flex w-full flex-col items-center justify-center md:gap-y-2'}>
                <div className={'h-[25px] w-full border-l-4 border-r-4 border-t-4'}></div>
                <p className={'text-2xl text-gray-400'}>GETRÄNKE</p>
                <div className={'flex w-full flex-col items-center justify-center'}>
                    <GridRow name={'Coca Cola, Zero, Light 0,5l'} price={'3,50'} />
                    <GridRow name={'Fritz Cola 0,3l versch.Sorten'} price={'3,50'} />
                    <GridRow name={'Sprite, Fanta, Mezzo 0,5l'} price={'3,50'} />
                    <GridRow name={'Selter'} price={'3,50'} />
                </div>
                <div className={'flex w-full flex-col items-center justify-evenly'}>
                    <GridRow name={'Cafe klein'} price={'3,00'} />
                    <GridRow name={'Cafe groß'} price={'4,00'} />
                    <GridRow name={'Latte Macchiato'} price={'3,50'} />
                    <GridRow name={'Espresso'} price={'2,50'} />
                </div>
                <div className={'flex w-full flex-col items-center justify-evenly'}>
                    <GridRow name={'Cappuccino'} price={'3,00'} />
                    <GridRow name={'Milchkaffee'} price={'3,50'} />
                    <GridRow name={'Schokomilch'} price={'4,50'} />
                    <GridRow name={'Eiskaffee o. Eisschokolade'} price={'5,00'} />
                    <GridRow name={'Sanfter Engel'} price={'5,00'} />
                </div>
                <div className={'flex w-full flex-col items-center justify-evenly'}>
                    <GridRow name={'Flens oder Strandlager vom Fass 0,3l'} price={'3,90'} />
                    <GridRow name={'Flens oder Strandlager vom Fass 0,5l'} price={'5,40'} />
                    <GridRow name={'Flensburger Pilsener 0,33l'} price={'3,50'} />
                    <GridRow name={'Flensburger Strandlager 0,33l'} price={'3,50'} />
                    <GridRow name={'Flensburger Frei'} price={'3,50'} />
                    <GridRow name={'Flensburger Radler'} price={'3,50'} />
                    <GridRow name={'Aperol Spritz'} price={'7,00'} />
                    <GridRow name={'Wildberry Lillet'} price={'7,00'} />
                    <GridRow name={'Longdrinks verschiedene'} price={'6,00'} />
                    <GridRow name={'Cocktails verschiedene'} price={'6,00'} />
                </div>
                <div className={'h-[25px] w-full border-b-4 border-l-4 border-r-4'}></div>
            </div>
            <div className={'flex w-full flex-col items-center justify-center gap-y-2'}>
                <div className={'h-[25px] w-full border-l-4 border-r-4 border-t-4'}></div>
                <p className={'text-2xl text-gray-400'}>SPEISEN</p>
                <div className={'flex flex-col items-center justify-evenly md:h-[576px] md:w-full'}>
                    <GridRow name={'Pommes klein'} price={'3,50'} />
                    <GridRow name={'Pommes groß'} price={'4,00'} />
                    <GridRow name={'Currywurst'} price={'4,50'} />
                    <GridRow name={'Currywurst mit Pommes'} price={'7,90'} />
                    <GridRow name={'Bratwurst'} price={'3,50'} />
                    <GridRow name={'Bratwurst mit Pommes'} price={'6,50'} />
                    <GridRow name={'Backfisch mit Pommes'} price={'8,90'} />
                    <GridRow name={'Backfisch mit Kartoffelsalat'} price={'9,50'} />
                    <GridRow name={'Fisch- oder Hähnchennuggets mit Pommes'} price={'8,50'} />
                    <GridRow name={'Fisch- oder Hähnchennuggets mit Kartoffelsalat'} price={'8,90'} />
                    <GridRow name={'Falaffel mit Sweet-Chilli-Dip'} price={'6,90'} />
                    <GridRow name={'Falaffel mit Dip und Pommes'} price={'8,90'} />
                    <GridRow name={'Ketchup / Mayonnaise extra'} price={'0,50'} />
                </div>
                <div className={'h-[25px] w-full border-b-4 border-l-4 border-r-4'}></div>
            </div>
        </div>
    );
};

export default Menu;
