import { Link, useLocation } from 'react-router-dom';
interface IHeaderButton {
    text: string;
    link?: string;
}
const HeaderButton = ({ text = 'Button', link = '/' }: IHeaderButton) => {
    const location = useLocation();
    return (
        <Link to={link} className={'flex items-center justify-start md:w-full'}>
            <button
                className={`flex w-full items-center ${location.pathname === link && 'bg-zinc-700 text-white'} justify-start gap-1 p-2 font-bold text-gray-500 transition-colors duration-300 hover:bg-zinc-700 hover:text-white md:justify-center`}
            >
                <div
                    className={`${location.pathname === link ? 'border-0 bg-white' : 'border-gray-500'} h-[12px] w-[12px] rounded-full border-4 transition-all duration-500`}
                ></div>
                {text}
            </button>
        </Link>
    );
};

export default HeaderButton;
