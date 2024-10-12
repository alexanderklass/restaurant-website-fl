import logo from '../assets/logo.jpg';
const Logo = () => {
    return (
        <div className={'flex flex-row items-center justify-center gap-x-2 p-2 md:p-0'}>
            <img className={'w-[70px] rounded-full md:w-[100px]'} src={logo} alt={'logo'} />
            <p className={'text-[18px] font-bold text-gray-600 md:text-xl'}>STRANDPAVILLON-SOLITÜDE</p>
        </div>
    );
};

export default Logo;
