import { Link } from 'react-router-dom';

interface ICard {
    link: string;
    text: string;
    src: any;
}
const Card = ({ link, text, src }: ICard) => {
    return (
        <div className={'flex w-full flex-col justify-center md:mx-1'}>
            <img className={'border-2 border-gray-400'} src={src} alt="picture" />
            <p className={'p-2 text-gray-500'}>{text}</p>
            <Link className={'w-fit'} to={link}>
                <button
                    className={
                        'w-fit border-2 border-gray-500 bg-zinc-700 p-2 text-white transition-all duration-300 hover:bg-white hover:text-gray-500'
                    }
                >
                    weiterlesen
                </button>
            </Link>
        </div>
    );
};

export default Card;
