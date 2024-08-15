import Hero from './Hero'
import { motion as m } from 'framer-motion'

const Pricing = () => {
    return (
        <>
            <Hero
            SpanTitle="Simple and Affordable Pricing Plans"
            paragraph="Grab an amazing deal right now!"
            />
            <section className='w-full bg-three h-fit py-16'>
                <m.div
                className="h-fit shadow-md text-one max-w-[50rem] p-4 w-full mx-auto rounded-3xl bg-opacity-80 backdrop-filter backdrop-blur-lg my-[50px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >

                    {/* Web Design Card */}
                    <div className="bg-nine-100 border rounded-3xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mb-5">
                        <div className="py-[100px] px-[50px] flex flex-col">
                            <h1 className='text-3xl text-center'>Starting at</h1>
                            <h3 className='text-xl font-extrabold text-center text-five-500'>Rs. 30,000/=</h3>
                            <hr className='mt-2 w-[200px]'></hr>
                            <h3 className='text-sm text-center text-five-400 mt-2'>6,000/= per page</h3>
                            <button className="mt-5 bg-one text-nine-100 font-bold py-2 px-4 rounded-full hover:bg-nine-500 hover:text-one transition-all">
                            Contact Us for a Quote.
                            </button>
                        </div>

                        <div className="flex flex-wrap mt-5">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                                <h3 className="text-3xl text-gray-800 dark:text-white font-extrabold justify-center text-center">
                                    WEB DESIGN
                                </h3>
                                <p className="mt-10 text-gray-500 dark:text-neutral-400">
                                    <ul>
                                        <li className="flex gap-x-3 mb-10">
                                            <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            </span>
                                            <span className="text-gray-600 dark:text-white text-xl">
                                            Responsive Web Design
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3 mb-10">
                                            <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            </span>
                                            <span className="text-gray-600 dark:text-white text-xl">
                                            User Accessibility
                                            </span>
                                        </li>
                                        <li className="flex gap-x-3 mb-10">
                                            <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            </span>
                                            <span className="text-gray-600 dark:text-white text-xl">
                                            Clean and Simple Design
                                            </span>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End Design */}

                    {/* Website Card */}
                    <div className="bg-nine-100 border rounded-3xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 mb-5">
                        <div className="py-[180px] px-[50px] flex flex-col">
                            <h1 className='text-3xl text-center'>Starting at</h1>
                            <h3 className='text-xl font-extrabold text-center text-five-500'>Rs. 100,000/=</h3>
                            <hr className='mt-2 w-[200px]'></hr>
                            <h3 className='text-sm text-center text-five-400 mt-2'>50,000/= per page</h3>
                            <button className="mt-5 bg-one text-nine-100 font-bold py-2 px-4 rounded-full  hover:bg-nine-500 hover:text-one transition-all">
                            Contact Us for a Quote.
                            </button>
                        </div>

                        <div className="flex flex-wrap mt-5">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white justify-center text-center">
                                WEBSITE
                            </h3>
                            <p className="mt-10 text-gray-500 dark:text-neutral-400">
                                <ul>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        Full website with functionality
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        User Accessibility
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        User Authentication
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        Dashboard for Managing Content
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        Yearly Maintenance
                                        </span>
                                    </li>
                                </ul>
                            </p>
                            </div>
                        </div>
                    </div>
                    {/* End Website */}

                    {/* Software Card */}
                    <div className="bg-nine-100 border rounded-3xl shadow-sm sm:flex dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div className="py-[180px] px-[50px] flex flex-col">
                            <h1 className='text-3xl text-center'>Starting at</h1>
                            <h3 className='text-xl font-extrabold text-center text-five-500'>Rs. 150,000/=</h3>
                            <hr className='mt-2 w-[200px]'></hr>
                            <button className="mt-5 bg-one text-nine-100 font-bold py-2 px-4 rounded-full hover:bg-nine-500 hover:text-one transition-all">
                            Contact Us for a Quote.
                            </button>
                        </div>

                        <div className="flex flex-wrap mt-5">
                            <div className="p-4 flex flex-col h-full sm:p-7">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-white justify-center text-center">
                                SOFTWARE
                            </h3>
                            <p className="mt-10 text-gray-500 dark:text-neutral-400">
                                <ul>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        Windows Application
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        User Accessibility
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        Clean and Simple Design
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        User Authentication
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3 mb-10">
                                        <span className="size-6 flex justify-center items-center rounded-full bg-eight-600 bg-opacity-50 text-[#34d399] dark:bg-teal-800/30 dark:text-teal-500 mt-[2px]">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        </span>
                                        <span className="text-gray-600 dark:text-white text-xl">
                                        Database and Dashboard
                                        </span>
                                    </li>
                                </ul>
                            </p>
                            </div>
                        </div>
                    </div>
                    {/* End Software */}
                </m.div>
            </section>
        </>
    )
}

export default Pricing
