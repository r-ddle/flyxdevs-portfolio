import { motion as m } from 'framer-motion';
import ProjectCards from './ProjectCards';
// import { Calendar } from 'lucide-react';

const Portfolio = () => {
    const megaprojects = [
        {
            title: "Main Project",
            description: "Description for Project 1",
            dateUpdated: "7 hours ago",
            imageUrl: "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        },
        {
            title: "Project 2",
            description: "Description for Project 2",
            dateUpdated: "2 days ago",
            imageUrl: "https://github.com/r-ddle/Blog-Card-Preview/raw/main/screenshot.jpg"
        },
    ];

    const moreProjects = [
        { title: "placeholder", date: "Jan 14, 2024", icon: "" },
        { title: "placeholder 2", date: "Jan 14, 2024" },
        { title: "placeholder 3", date: "Jan 14, 2024" },
        { title: "placholder 4", date: "Jan 14, 2024" },
        { title: "placehodler 5", date: "Jan 14, 2024" },
    ];

    return (
        <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='relative h-fit'
        >
            <ProjectCards projects={megaprojects} />
            <section className='w-full bg-three h-fit py-16 mt-10'>
                <h3 className='text-3xl text-white font-bold text-center flex items-center justify-center gap-2'>
                    More Projects by
                    <img
                        alt='Gojo'
                        src='https://avatars.githubusercontent.com/u/157416739?s=100&v=4'
                        className='rounded-full h-9 w-9 inline-block'
                    />
                    &
                    <img
                        alt='Riddle'
                        src='https://avatars.githubusercontent.com/u/155899302?v=4&size=64'
                        className='rounded-full h-9 w-9 inline-block'
                    />
                </h3>
                <div className='h-fit shadow-md text-one max-w-[66rem] p-4 w-full mx-auto rounded-3xl bg-opacity-80 backdrop-filter backdrop-blur-lg my-[50px]'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {moreProjects.map((project, index) => (
                                <div key={index} className="group flex flex-col bg-nine rounded-xl bg-[linear-gradient(220.55deg,#565656_0%,#181818_100%)] hover:shadow-2xl hover:shadow-six transition-all duration-300">
                                    <div className="p-4 md:p-5">
                                        <div className="flex justify-between items-center">
                                            <div className="mt-1 text-gray-400">
                                                {project.icon}
                                            </div>
                                        </div>
                                        <h3 className="mt-2 text-lg font-bold text-gray-300 group-hover:text-white">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-500">
                                            {project.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            </section>
        </m.div>
    );
};

export default Portfolio;
