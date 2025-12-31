import React from 'https://esm.sh/react@18.2.0';
import ActionButton from './ActionButton.js';
import { DressIcon, SketchIcon, PatternIcon, WeddingGownIcon, WardrobeIcon } from './icons.js';

const createElement = React.createElement;

const AnimatedIcon = ({ icon, className }) => (
    createElement('div', { className: `absolute text-royal-pink-200 -z-1 ${className}` },
        createElement(icon, null)
    )
);

const Hero = ({ onOpenCoursesModal }) => {
    const headingText = "Weave Your Dreams into Reality";

    const icons = [
        createElement(AnimatedIcon, { key: 1, icon: DressIcon, className: "w-32 h-32 top-[10%] left-[5%] animate-float" }),
        createElement(AnimatedIcon, { key: 2, icon: SketchIcon, className: "w-24 h-24 top-[20%] right-[10%] animate-float-delay-1" }),
        createElement(AnimatedIcon, { key: 3, icon: PatternIcon, className: "w-40 h-40 bottom-[10%] left-[15%] animate-float-delay-2" }),
        createElement(AnimatedIcon, { key: 4, icon: WeddingGownIcon, className: "w-20 h-20 bottom-[25%] right-[20%] animate-float" }),
        createElement(AnimatedIcon, { key: 5, icon: WardrobeIcon, className: "hidden md:block w-28 h-28 top-[55%] left-[30%] animate-float-delay-1" }),
        createElement(AnimatedIcon, { key: 6, icon: SketchIcon, className: "hidden lg:block w-20 h-20 top-[60%] right-[35%] animate-float-delay-2" })
    ];
    
    return createElement(React.Fragment, null,
        createElement('section', { className: "bg-white py-20 md:py-32 relative overflow-hidden" },
            createElement('div', { className: "absolute inset-0 z-0 opacity-20" }, ...icons),
            createElement('div', { className: "container mx-auto px-6 text-center relative z-10" },
                createElement('h1', { className: "text-4xl md:text-6xl font-extrabold text-royal-pink-800 leading-tight mb-4 min-h-[96px] md:min-h-[150px]" },
                    ...headingText.split(' ').map((word, index) => (
                        createElement('span', {
                            key: index,
                            className: "animate-fade-in-word",
                            style: { animationDelay: `${index * 0.25}s` }
                        }, `${word} `)
                    ))
                ),
                createElement('p', { className: "text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8" },
                    "Join Education Herald's premier fashion school. Master your skills, launch your brand, and create the extraordinary."
                ),
                createElement(ActionButton, { onClick: onOpenCoursesModal }, "Explore Courses")
            )
        )
    );
};

export default Hero;