import * as React from 'react';
import Image from 'next/image';
import facebookIcon from '../public/assets/socialMedia/facebook.svg'
import instagramIcon from '../public/assets/socialMedia/instagram.svg'
import youtubeIcon from '../public/assets/socialMedia/youtube.svg'
import logoWhite from "../public/assets/logoWhite.svg"

export interface IFooterProps {
}

export default function Footer(props: IFooterProps) {
    return (
        <div className='flex flex-col text-center space-y-10 px-10 lg:h-64 bg-[#141718] text-white lg:px-28 lg:space-y-14'>
            <div className='flex flex-col items-center space-y-6 pt-20 lg:flex-row lg:justify-between lg:space-y-0'>
                <div className='flex flex-col items-center space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0'>
                    <Image
                        src={logoWhite}
                        alt="Brand logo"
                        className='max-w-fit'
                    />
                    <span className='border-gray-600 border-t-2 w-8 lg:w-0 lg:border-t-0'></span>
                    <span className='lg:border-gray-600 lg:border-l-2 lg:pl-8'>Gift & Decoration Store</span>
                </div>
                <div className='flex flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0'>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Product</span>
                    <span>Blog</span>
                    <span>Contact Us</span>
                </div>
            </div>
            <div className='flex flex-col-reverse items-center space-y-6 lg:justify-between lg:mt-12 lg:pt-4 border-t-2 border-gray-600 lg:flex-row lg:space-y-0 lg:space-x-6 '>
                <div className='flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6'>
                    <span className='py-6 lg:py-0'>Copyright © 2024 3legant. All rights reserved</span>
                    <div className='space-x-6'>
                        <span className='font-semibold'>Privacy Policy</span>
                        <span className='font-semibold'>Terms of Use</span>
                    </div>
                </div>
                <div className='flex space-x-6'>
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
    );
}
