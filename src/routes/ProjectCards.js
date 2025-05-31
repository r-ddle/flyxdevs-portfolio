import { useState } from 'react';
import { ArrowBigRightDash, ArrowBigLeftDash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCards = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    return (
        <div className="relative bg-white shadow-2xl shadow-six rounded-xl max-w-[66rem] mx-auto h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden my-16">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={{
                        enter: (direction) => ({
                            x: direction > 0 ? '100%' : '-100%',
                            opacity: 0,
                        }),
                        center: {
                            x: 0,
                            opacity: 1,
                        },
                        exit: (direction) => ({
                            x: direction < 0 ? '100%' : '-100%',
                            opacity: 0,
                        }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        className="w-full h-full object-cover rounded-xl"
                        src={projects[currentIndex].imageUrl}
                        alt={projects[currentIndex].title}
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-b from-black to-transparent text-white">
                        <h3 className="text-xl font-extrabold text-center">
                            {projects[currentIndex].title}
                        </h3>
                        <p className="mt-1 text-center">
                            {projects[currentIndex].description}
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black to-transparent">
                        <p className="mt-5 text-xs text-white">
                            Last Updated {projects[currentIndex].dateUpdated}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
            >
                <ArrowBigLeftDash size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 z-10"
            >
                <ArrowBigRightDash size={24} />
            </button>
        </div>
    );
};

export default ProjectCards;
