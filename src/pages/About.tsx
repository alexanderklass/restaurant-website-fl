import christian from '../assets/christian.webp';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className={'flex flex-col'}>
            <div className={'flex flex-col gap-4 md:flex-row'}>
                <img className={'border-2 border-gray-400'} src={christian} alt={'christian-foto'} />
                <div className={'flex w-full flex-col gap-4'}>
                    <div className={'text-gray-500'}>
                        <p className={'font-bold underline'}>Kontakt</p>
                        <p>Christian Reinheimer</p>
                        <p>Flensburg Fjord</p>
                        <p>24944 Flensburg</p>
                        <p>0461-48087676</p>
                    </div>
                    <div className={'text-gray-500'}>
                        <p className={'font-bold underline'}>Steuernummern</p>
                        <p>Ust.IdNr.:DE337384814</p>
                        <p>St.-Nr.:1516506806</p>
                    </div>
                    <div className={'text-gray-500'}>
                        <p className={'font-bold underline'}>Social Media</p>
                        <p className={'text-blue-400'}>
                            <Link to={''}>Facebook</Link>
                        </p>
                        <p className={'text-blue-400'}>
                            <Link to={''}>Instagram</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
