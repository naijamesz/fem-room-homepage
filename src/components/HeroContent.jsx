/* eslint-disable react/prop-types */
import { useState } from 'react';
import FooterContent from './FooterContent';
import Ripples from 'react-ripples';
// All the Desktop Images Imports
import Image1 from '../assets/desktop-image-hero-1.jpg';
import Image2 from '../assets/desktop-image-hero-2.jpg';
import Image3 from '../assets/desktop-image-hero-3.jpg';
// All the Mobile Images Imports
import MobileImage1 from '../assets/mobile-image-hero-1.jpg';
import MobileImage2 from '../assets/mobile-image-hero-2.jpg';
import MobileImage3 from '../assets/mobile-image-hero-3.jpg';

import Arrow from '../assets/icon-arrow.svg';
import ArrowLeft from '../assets/icon-angle-left.svg';
import ArrowRight from '../assets/icon-angle-right.svg';

const Data = [
  {
    id: 1,
    img: Image1,
    mobileImg: MobileImage1,
    title: 'Discover innovative ways to decorate',
    content:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of  you and what you love.'
  },
  {
    id: 2,
    img: Image2,
    mobileImg: MobileImage2,
    title: 'We are available all across the globe',
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    id: 3,
    img: Image3,
    mobileImg: MobileImage3,
    title: 'Manufactured with the best materials',
    content:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
];
export default function HeroContent({ MainImgRef, MainContentRef, arrowsRef, Image1ref, ContentBoxRef, Image3ref }) {
  const [current, setCurrent] = useState(0);
  const length = Data.length;

  const nextSlide = e => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(e);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Data) || Data.length <= 0) {
    return null;
  }

  return (
    <>
      <section className='overflow-hidden'>
        <div className='hero-wrapper | grid '>
          <div className='relative overflow-hidden xl:overflow-visible'>
            <div className='relative overflow-hidden'>
              {Data.map((images, index) => {
                return (
                  <div
                    className={`main-img
                      ${index === current ? 'slide active' : 'slide overflow-hidden'}
                    `}
                    key={index}>
                    {index === current && (
                      <picture>
                        <source media='(min-width: 376px)' srcSet={images.img} />
                        <img
                          ref={MainImgRef}
                          className='w-full overflow-hidden'
                          src={images.mobileImg}
                          alt='A Image of Chair and Table'
                        />
                      </picture>
                    )}
                  </div>
                );
              })}
            </div>

            <div ref={arrowsRef} className='flex absolute right-0 bottom-0 xl:-right-32 z-[2]'>
              <div>
                <Ripples>
                  <button
                    onClick={prevSlide}
                    className='w-14 md:w-16 aspect-square bg-[var(--black)] shadow-md transition-all duration-300 ease-in-out hover:bg-[var(--gray-400)]'>
                    <img className='mx-auto' src={ArrowLeft} alt='Left Arrow' />
                  </button>
                </Ripples>
              </div>

              <div>
                <Ripples>
                  <button
                    onClick={nextSlide}
                    className='w-14 md:w-16 aspect-square bg-[var(--black)]  shadow-md transition-all duration-300 ease-in-out hover:bg-[var(--gray-400)]'>
                    <img className='mx-auto' src={ArrowRight} alt='Right Arrow' />
                  </button>
                </Ripples>
              </div>
            </div>
          </div>

          <div
            ref={MainContentRef}
            className='grid gap-4 p-8 pl-4 place-content-center md:gap-6 lg:gap-4 md:p-12 md:pl-5 lg:px-16 xl:py-0'>
            {Data.map((items, index) => {
              return (
                <div className={`${index === current ? 'content current' : 'content'}`} key={index}>
                  {index === current && (
                    <div className=''>
                      <h1 className='leading-none text-3xl md:w-[21ch] xl:w-[18ch]  tracking-normal md:text-4xl xl:text-[2.5rem] 2xl:text-5xl font-bold text-[var(--black)] pl-4 md:pl-7 md:leading-none mb-4 md:mb-6 lg:mb-8 '>
                        {items.title}
                      </h1>
                      <p className='text-[var(--gray)] text-sm pl-4 md:pl-7'>{items.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
            <Ripples>
              <button className='shop-btn | flex gap-4 items-center rounded-full p-4 md:px-7 md:py-3 uppercase font-bold tracking-[10px] w-fit text-[var(--black)] transition-all duration-300 ease-in-out hover:bg-slate-100'>
                shop now
                <img src={Arrow} alt='Arrow For Shop Now' />
              </button>
            </Ripples>
          </div>
        </div>
      </section>
      <FooterContent Image1ref={Image1ref} ContentBoxRef={ContentBoxRef} Image3ref={Image3ref} />
    </>
  );
}
