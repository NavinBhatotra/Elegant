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
        <div className='flex flex-col h-64 bg-[#141718] text-white px-28 '>
            <div className='flex justify-between pt-20'>
                <div className='flex space-x-4'>
                    <Image
                        src={logoWhite}
                        alt="Brand logo"
                        className='max-w-fit'
                    />
                    <span className='border-l-2'></span>
                    <span>Gift & Decoration Store</span>
                </div>
                <div className='flex space-x-6'>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Product</span>
                    <span>Blog</span>
                    <span>Contact Us</span>
                </div>
            </div>
            <div className='flex justify-between mt-12 pt-4 border-t-2 border-gray-600'>
                <div className='flex'>
                    <span>Copyright © 2024 3legant. All rights reserved</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
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
