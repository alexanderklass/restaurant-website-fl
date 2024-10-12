interface IiconCard {
    text: string;
    icon: any;
    content?: string;
}

const IconCard = ({ text, icon, content }: IiconCard) => {
    return (
        <div className={'mx-1 flex w-full flex-col items-center justify-center gap-2 p-2'}>
            {icon}
            <p className={'text-xl font-bold text-gray-500'}>{text}</p>
            <p className={'text-center'}>{content}</p>
        </div>
    );
};

export default IconCard;
