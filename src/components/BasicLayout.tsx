import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';

const BasicLayout = () => {
    return (
        <div className={'flex h-full w-full flex-col items-center justify-center'}>
            <Header />
            <div className={'px-2 py-5 md:px-0 md:py-64 xl:w-[1500px]'}>
                <Outlet />
            </div>
        </div>
    );
};

export default BasicLayout;
