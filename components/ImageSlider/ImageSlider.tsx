import Image from 'next/image';
import * as React from 'react';
import LeftArrowIcon from "../../public/assets/ComponentsIcons/leftArrow.svg"
import RightArrowIcon from "../../public/assets/ComponentsIcons/rightArrow.svg"
import homePageImage from "../../public/assets/HomePage/homePageImage.svg"

export interface IImageSliderProps {
}

export default function ImageSlider(props: IImageSliderProps) {
    const ImagesLength = [1,23,4,5]
    return (
        <div className='flex relative w-full'>
            <Image
                src={LeftArrowIcon}
                alt="Left Icon"
                className='absolute left-4 top-1/2 -translate-y-1/2 max-w-fit'
            />
            <Image
                src={RightArrowIcon}
                alt="Left Icon"
                className='absolute right-4 top-1/2 -translate-y-1/2 max-w-fit'
            />
            <div>
                {ImagesLength.map(() => {})}
            </div>
            {/* <Image
                src={homePageImage}
                alt="Home Page Image"
                className='max-w-fit'
            /> */}
        </div>
    );
}
