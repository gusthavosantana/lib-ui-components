"use client";

import { initCarousels } from "flowbite";
import Image from "next/image";
import React, { useEffect } from "react";

interface CarouselImageItem {
  src: string;
  width: number;
  height: number;
  alt: string;
}

type ColumnsPerSlide = 1 | 2 | 3 | 4 | 5 | 6;

interface Props {
  columnsPerSlide?: ColumnsPerSlide;
  showIndicators?: boolean;
  items: CarouselImageItem[];
}

function CarouselImage(props: Props) {
  const carouselItems = createCarouselItems(props.items, props.columnsPerSlide);
  const indicators = createIndicators(props.columnsPerSlide);

  useEffect(() => {
    initCarousels();
  }, []);

  return (
    <div
      id="animation-carousel"
      className="relative px-16 sm:px-24"
      data-carousel="slide"
    >
      <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-80">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform"
            style={{
              gridTemplateColumns: `repeat(${props.columnsPerSlide}, minmax(0, 1fr))`,
            }}
            data-carousel-item
          >
            {item.map((image) => (
              <Image
                key={image.src}
                width={image.width}
                height={image.height}
                src={image.src}
                className="block w-full h-full rounded-lg"
                alt={image.alt}
              />
            ))}
          </div>
        ))}
      </div>
      {props.showIndicators && (
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          {indicators.map((indicator) => (
            <button
              key={indicator}
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label={`Slide ${indicator}`}
              data-carousel-slide-to={indicator}
            ></button>
          ))}
        </div>
      )}
      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
}

function createCarouselItems(
  items: CarouselImageItem[],
  columnsPerSlide: ColumnsPerSlide = 1
) {
  const carouselItems: CarouselImageItem[][] = [];
  let index = 0;
  while (index < items.length) {
    carouselItems.push(items.slice(index, index + columnsPerSlide));
    index += columnsPerSlide;
  }
  return carouselItems;
}

function createIndicators(columnsPerSlide: ColumnsPerSlide = 1) {
  const indicators: number[] = [];
  for (let i = 0; i < columnsPerSlide; i++) {
    indicators.push(i);
  }
  return indicators;
}

export default CarouselImage;
