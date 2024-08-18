import Image from 'next/image';
import * as React from 'react';
import logo from '../public/assets/logo.svg'
import searchIcon from '../public/assets/icons/searchIcon.svg'
import cartIcon from '../public/assets/icons/cart.svg'
import userProfileIcon from '../public/assets/icons/userProfileIcon.svg'
export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    const [activeNav, setActiveNav] = React.useState(0)

    const navList = [{ name: "Home", href: "" }, { name: "Shop", href: "" }, { name: "Product", href: "" }, { name: "Contact Us", href: "" }]
    const listNav = () => {
        return <div className='flex space-x-4 text-xl text-[#141718] font-semibold'>
            {navList.map((list, index) => (
                <span className={activeNav === index ? `text-[#141718] cursor-pointer` : `text-[#6C7275] cursor-pointer`} key={index} onClick={() => setActiveNav(index)}>{list.name}</span>
            ))}
        </div>
    }

    return (
        <div className='grid grid-cols-12 justify-center items-center py-6'>
            <div className='grid col-span-2 justify-center'>
                <Image
                    src={logo}
                    alt="Brand logo"
                    className='max-w-fit'
                />
            </div>
            <div className='grid col-span-8 justify-center'>
                {listNav()}
            </div>
            <div className='grid col-span-2 justify-center'>
                <div className='flex space-x-2'>
                    <Image
                        src={searchIcon}
                        alt="Brand logo"
                        className='max-w-fit'
                    />
                    <Image
                        src={userProfileIcon}
                        alt="Brand logo"
                        className='max-w-fit'
                    />
                    <Image
                        src={cartIcon}
                        alt="Brand logo"
                        className='max-w-fit'
                    />
                </div>
            </div>
        </div>
    );
}
