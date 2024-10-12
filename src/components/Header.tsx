import Logo from './Logo.tsx';
import HeaderButton from './HeaderButton.tsx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav
            className={
                'top-0 z-10 flex w-full flex-col bg-white md:fixed md:items-center md:justify-between md:gap-y-3 md:p-2'
            }
        >
            <Logo />
            <div
                className={`${isOpen ? '' : 'hidden'} animate-fade-down flex-col text-lg md:flex md:w-[1500px] md:animate-none md:flex-row md:border-4 md:border-gray-200`}
            >
                <HeaderButton link={'/'} text={'START'} />
                <HeaderButton link={'/bistro'} text={'BISTRO'} />
                <HeaderButton link={'/events'} text={'VERANSTALTUNGEN'} />
                <HeaderButton link={'/speisekarte'} text={'SPEISEKARTE'} />
                <HeaderButton link={'/impressum'} text={'IMPRESSUM'} />
            </div>
            <GiHamburgerMenu
                onClick={handleBurgerMenu}
                className={`${isOpen ? 'hidden rotate-90' : ''} flex w-full animate-rotate-x text-gray-500 transition-all md:hidden`}
                size={30}
            />
            <RxCross2
                onClick={handleBurgerMenu}
                size={40}
                className={`${isOpen ? '' : 'hidden'} flex w-full animate-rotate-x text-gray-500 transition-all md:hidden`}
            />
        </nav>
    );
};

export default Header;
