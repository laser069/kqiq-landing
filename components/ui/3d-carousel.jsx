"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useState, useRef } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    useScroll,
} from "framer-motion";

export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

const IS_SERVER = typeof window === "undefined";

export function useMediaQuery(
    query,
    { defaultValue = false, initializeWithValue = true } = {}
) {
    const getMatches = (query) => {
        if (IS_SERVER) {
            return defaultValue;
        }
        return window.matchMedia(query).matches;
    };

    const [matches, setMatches] = useState(() => {
        if (initializeWithValue) {
            return getMatches(query);
        }
        return defaultValue;
    });

    const handleChange = () => {
        setMatches(getMatches(query));
    };

    useIsomorphicLayoutEffect(() => {
        const matchMedia = window.matchMedia(query);
        handleChange();

        matchMedia.addEventListener("change", handleChange);

        return () => {
            matchMedia.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
}

const keywords = [
    "portrait",
    "people",
    "nature",
    "urban",
    "abstract",
];

// Production-level animation constants
const duration = 0.3;
const transition = {
    duration,
    ease: [0.4, 0.0, 0.2, 1], // Material Design easing
};

const Carousel = memo(
    ({ cards }) => {
        const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
        const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
        const faceCount = cards.length;
        const faceWidth = cylinderWidth / faceCount;
        const radius = cylinderWidth / (2 * Math.PI);
        const rotation = useMotionValue(0);
        const transform = useTransform(
            rotation,
            (value) => `rotate3d(0, 1, 0, ${value}deg)`
        );

        return (
            <div
                className="flex h-full items-center justify-center bg-[#e0e5ec]"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
            >
                <motion.div
                    className="relative flex h-full origin-center justify-center"
                    style={{
                        transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                >
                    {cards.map((imgUrl, i) => (
                        <motion.div
                            key={`key-${imgUrl}-${i}`}
                            className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border-0 overflow-hidden"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${i * (360 / faceCount)
                                    }deg) translateZ(${radius}px)`,
                            }}
                        >
                            <motion.img
                                src={imgUrl}
                                alt={`keyword_${i} ${imgUrl}`}
                                className="pointer-events-none w-full rounded-xl object-cover aspect-[9/16]"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    opacity: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] },
                                    scale: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        );
    }
);

Carousel.displayName = "Carousel";

function ThreeDPhotoCarousel() {
    const containerRef = useRef(null);
    const cards = useMemo(
        () => keywords.map((keyword) => `https://picsum.photos/300/500?${keyword}`),
        []
    );

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Start when component enters viewport, end when it leaves
    });

    // Map scroll progress to rotation (each image gets equal scroll space)
    const rotation = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 360] // Full rotation through all images
    );

    return (
        <div ref={containerRef} className="relative h-[120vh]"> {/* Minimal height for scroll animation */}
            <div className="sticky top-0 h-screen w-full flex items-center pt-24">
                <motion.div layout className="relative h-full">
                    <div className="relative h-[500px] w-full overflow-visible flex items-center">
                        <CarouselWithScroll cards={cards} rotation={rotation} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const CarouselWithScroll = memo(({ cards, rotation }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
    const cylinderWidth = isScreenSizeSm ? 990 : 1620; // 10% smaller
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    const transform = useTransform(
        rotation,
        (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
        <div
            className="flex h-full items-center justify-center bg-[#e0e5ec] w-full"
            style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
                willChange: "transform",
            }}
        >
            <motion.div
                className="relative flex h-full origin-center justify-center"
                style={{
                    transform,
                    rotateY: rotation,
                    width: cylinderWidth,
                    transformStyle: "preserve-3d",
                }}
            >
                {cards.map((imgUrl, i) => (
                    <motion.div
                        key={`key-${imgUrl}-${i}`}
                        className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] border-0 overflow-hidden"
                        style={{
                            width: `${faceWidth}px`,
                            transform: `rotateY(${i * (360 / faceCount)
                                }deg) translateZ(${radius}px)`,
                        }}
                    >
                        <motion.img
                            src={imgUrl}
                            alt={`keyword_${i} ${imgUrl}`}
                            className="pointer-events-none w-full rounded-xl object-cover aspect-[9/16]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                opacity: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] },
                                scale: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }
                            }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
});

CarouselWithScroll.displayName = "CarouselWithScroll";

export { ThreeDPhotoCarousel };
