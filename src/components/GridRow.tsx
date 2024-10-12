export interface IGridRow {
    name: string;
    price: string;
}
const GridRow = ({ name, price }: IGridRow) => {
    return (
        <div className={'flex w-full flex-row items-start justify-between text-gray-500 md:w-[500px]'}>
            <p>{name}</p>
            <p>{price + ' €'}</p>
        </div>
    );
};

export default GridRow;
