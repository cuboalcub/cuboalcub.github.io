'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative group w-full aspect-square">
            <div className="w-full h-full relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Project image ${index + 1}`}
                            fill
                            className="object-contain"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                        <IconButton onClick={prevSlide} sx={{ color: 'white' }}>
                            <ChevronLeft />
                        </IconButton>
                    </div>
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 transition-colors">
                        <IconButton onClick={nextSlide} sx={{ color: 'white' }}>
                            <ChevronRight />
                        </IconButton>
                    </div>
                </>
            )}

            {/* Indicators */}
            {images.length > 1 && (
                <div className="flex justify-center py-4 gap-2">
                    {images.map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`transition-all duration-300 w-3 h-3 rounded-full cursor-pointer ${currentIndex === slideIndex ? 'bg-blue-600 w-8' : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400'
                                }`}
                        ></div>
                    ))}
                </div>
            )}
        </div>
    );
}
