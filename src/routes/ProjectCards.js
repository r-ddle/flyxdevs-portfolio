import { useState } from 'react';
import { ArrowBigRightDash, ArrowBigLeftDash } from 'lucide-react'; // Consider replacing with ChevronLeft and ChevronRight for a more standard look
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCards = ({ projects }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 0: none, 1: next, -1: prev

    if (!projects || projects.length === 0) {
        return <div className="text-center py-10">No projects to display.</div>;
    }

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    };

    const currentProject = projects[currentIndex];

    return (
        <div className="relative bg-neutral-100 dark:bg-neutral-800 shadow-xl rounded-lg max-w-4xl mx-auto h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden my-12 md:my-16">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex} // Important for AnimatePresence to detect changes
                    custom={direction}
                    variants={{
                        enter: (dir) => ({
                            x: dir > 0 ? '100%' : '-100%',
                            opacity: 0,
                        }),
                        center: {
                            x: 0,
                            opacity: 1,
                        },
                        exit: (dir) => ({
                            x: dir < 0 ? '100%' : '-100%',
                            opacity: 0,
                        }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    {currentProject.imageUrl && (
                        <img
                            className="w-full h-full object-cover rounded-lg" // rounded-lg to match parent
                            src={currentProject.imageUrl}
                            alt={currentProject.title || 'Project image'}
                        />
                    )}
                    {/* Overlay for text protection, more subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg"></div>

                    <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/50 to-transparent text-white">
                        <h3 className="text-xl lg:text-2xl font-bold text-center">
                            {currentProject.title}
                        </h3>
                        {currentProject.description && (
                            <p className="mt-1 text-sm lg:text-base text-center text-neutral-200 dark:text-neutral-300 max-w-2xl mx-auto">
                                {currentProject.description}
                            </p>
                        )}
                    </div>

                    {currentProject.dateUpdated && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-right">
                            <p className="text-xs text-neutral-300 dark:text-neutral-400">
                                Last Updated: {currentProject.dateUpdated}
                            </p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {projects.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-3 md:left-4 transform -translate-y-1/2 bg-neutral-700 bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 z-10 transition-opacity duration-150"
                        aria-label="Previous project"
                    >
                        <ArrowBigLeftDash size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 bg-neutral-700 bg-opacity-40 hover:bg-opacity-60 text-white rounded-full p-2 z-10 transition-opacity duration-150"
                        aria-label="Next project"
                    >
                        <ArrowBigRightDash size={24} />
                    </button>
                </>
            )}
        </div>
    );
};

export default ProjectCards;
