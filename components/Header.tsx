import Image from 'next/image';
import * as React from 'react';
import logo from '../public/assets/logo.svg'
import searchIcon from '../public/assets/icons/searchIcon.svg'
import cartIcon from '../public/assets/icons/cart.svg'
import wishlistIcon from '../public/assets/icons/wishlist.svg'
import userProfileIcon from '../public/assets/icons/userProfileIcon.svg'
import menuIcon from "../public/assets/icons/menu.svg"
import closeIcon from "../public/assets/icons/close.svg"
import facebookIcon from '../public/assets/SocialMedia/facebookBlack.svg'
import instagramIcon from '../public/assets/SocialMedia/instagramBlack.svg'
import youtubeIcon from '../public/assets/SocialMedia/youtubeBlack.svg'
import downArrowIcon from '../public/assets/icons/downArrow.svg'
import SearchInput from './SearchInput';
export interface IHeaderProps {
}

export default function Header(props: IHeaderProps) {
    const [activeNav, setActiveNav] = React.useState(0)
    const [activeMenu, setActiveMenu] = React.useState()
    const [activeSubMenu, setActiveSubMenu] = React.useState(false)
    const [childrenMenu, setChildrenMenu] = React.useState([])
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const menuList = [{ menuName: "Home" }, { menuName: "Shop", children: [] }, { menuName: "Product", children: [{ menuName: "Iphone" }, { menuName: "Samsung" }] }, { menuName: "Contact Us" }]

    const navList = [{ name: "Home", href: "" }, { name: "Shop", href: "" }, { name: "Product", href: "" }, { name: "Contact Us", href: "" }]
    const listNav = () => {
        return <div className='flex space-x-4 text-xl text-[#141718] font-semibold'>
            {navList.map((list, index) => (
                <span className={activeNav === index ? `text-[#141718] cursor-pointer` : `text-[#6C7275] cursor-pointer`} key={index} onClick={() => setActiveNav(index)}>{list.name}</span>
            ))}
        </div>
    }

    // // Toggle the sidebar on menu button click
    // document.querySelector('.menu-toggle').addEventListener('click', function () {
    //     document.querySelector('.menu-container').classList.toggle('active');
    // });

    // // Hide the sidebar if a click is detected outside of it
    // document.addEventListener('click', function (event) {
    //     const menuContainer = document.querySelector('.menu-container');
    //     const menuToggle = document.querySelector('.menu-toggle');

    //     // Check if the click is outside the menu container and the menu toggle button
    //     if (!menuContainer.contains(event.target) && !menuToggle.contains(event.target)) {
    //         menuContainer.classList.remove('active'); // Hide the menu
    //     }
    // });

    function showDetails(labelName: string, icon: string) {
        return (
            <div className='flex justify-between w-full py-4 border-b-2 text-lg text-[#6C7275]'>
                <div className='flex'>
                    {labelName}
                </div>
                <div className='flex'>
                    <Image
                        src={icon}
                        alt="Brand logo"
                        className='max-w-fit'
                    />
                </div>
            </div>
        )
    }

    function getMenu(menuList: any) {
        let submenuIndex = null
        const createSubMenu = (subMenu: any, index: number) => (
            <div className={`flex justify-between w-full py-4 border-b-2 text-lg text-[#6C7275] ${activeMenu === index && "text-gray-800"}`} onClick={() => setActiveSubMenu(index)}>
                <div className='flex'>
                    {subMenu.menuName}
                </div>
            </div>
        )
        const createSingalMenu = (menuDetails: any, index: number) => (
            <div className={`flex flex-col w-full py-4 border-b-2 text-lg text-[#6C7275] ${activeMenu === index && "text-gray-800"}`} onClick={() => setActiveMenu(index)}>
                <div className='flex justify-between'>
                    <div className='flex'>
                        {menuDetails.menuName}
                    </div>
                    {menuDetails?.children?.length > 0 && <div className='flex'>
                        <Image
                            src={downArrowIcon}
                            alt="Brand logo"
                            className='max-w-fit'
                            onClick={() => {
                                setActiveSubMenu(!activeSubMenu)
                                setChildrenMenu(menuDetails?.children)
                            }}
                        />
                    </div>}
                </div>
                {activeSubMenu && activeMenu === index && childrenMenu?.length > 0 && <div className='flex flex-col pl-4'>
                    {childrenMenu.map((subMenu, index) => (
                        createSubMenu(subMenu, index)
                    ))}
                </div>}
            </div>
        )

        return menuList.map((menu, index) => (
            createSingalMenu(menu, index)
        ))
    }

    return (
        <>
            <div className='flex relative justify-between px-4 py-6 lg:hidden'>
                <div className='flex justify-center items-center space-x-2'>
                    <Image
                        src={menuIcon}
                        alt="Menu Icon"
                        className='max-w-fit'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <Image
                        src={logo}
                        alt=""
                        className='ml-4 pt-2 max-w-fit'
                    />
                </div>
                <div>
                    <Image
                        src={cartIcon}
                        alt="Cart Icon"
                        className='max-w-fit'
                    />
                </div>
                <div className={`${isMenuOpen ? "flex flex-col" : "hidden"} absolute left-0 top-0 h-screen w-11/12 py-6 px-4 space-y-4 bg-white transform -translate-x-0  transition-transform duration-500 ease-out z-10`}>
                    <div className='flex flex-col w-full space-y-4'>
                        <div className='flex justify-between items-center'>
                            <Image
                                src={logo}
                                alt="Brand logo"
                                className='max-w-fit'
                            />
                            <Image
                                src={closeIcon}
                                alt="Close Menu Icon"
                                className='max-w-fit'
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        </div>
                        <div className='flex items-center'>
                            <SearchInput />
                        </div>
                    </div>
                    <div className='flex flex-col flex-1'>
                        {getMenu(menuList)}
                    </div>
                    <div className='flex flex-col'>
                        {showDetails("Cart", cartIcon)}
                        {showDetails("Wishlist", wishlistIcon)}
                    </div>
                    <div className='flex justify-center w-full space-x-6'>
                        <Image
                            src={instagramIcon}
                            alt="Brand logo"
                            className='max-w-fit'
                        />
                        <Image
                            src={facebookIcon}
                            alt="Brand logo"
                            className='max-w-fit'
                        />
                        <Image
                            src={youtubeIcon}
                            alt="Brand logo"
                            className='max-w-fit'
                        />
                    </div>
                </div>
            </div>
            <div className='hidden lg:grid grid-cols-12 justify-center items-center py-6'>
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
                            alt="cart icon"
                            className='max-w-fit'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
