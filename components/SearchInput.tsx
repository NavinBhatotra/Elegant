import Image from 'next/image';
import * as React from 'react';
import searchIcon from '../public/assets/icons/searchIcon.svg'

export interface ISearchInputProps {
}

export default function SearchInput(props: ISearchInputProps) {

    return (    
        <div className='flex justify-center items-center h-12 px-4 w-full space-x-2 border-2 border-[#6C7275] rounded-lg '>
            <Image
                src={searchIcon}
                alt="Brand logo"
                className='max-w-fit'
            />
            <input type="search" placeholder='Search' className='searchInput w-full border-none outline-none'/>
        </div>
    );
}
