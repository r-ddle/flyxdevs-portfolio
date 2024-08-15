import React, { useState } from 'react';
import { Store, Goal, NotebookPen } from 'lucide-react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('approach-panel');
  const handleTabClick = (panelname) => {
    setActiveTab(panelname);
  };

  return (
    // About Container
    <section id="about" className="mb-10">
        <div className={`${activeTab === 'approach-panel' ? 'h-[460px]' : 'h-[360px]'} bg-[linear-gradient(180.55deg,#565656_0%,#181818_100%)] shadow-md text-one max-w-[66rem] p-4 w-full mx-auto rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg`}>

        {/* Tab Switcher */}
        <div className='px-4'>
            <nav className="flex gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
            <button
                type="button"
                className={`${activeTab === 'approach-panel' ? 'font-semibold text-opacity-100' : 'text-opacity-50'} py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap transition ease-in-out text-one hover:text-five focus:outline-none `}
                id="tab-item-3"
                aria-selected={activeTab === 'approach-panel'}
                aria-controls="approach-panel"
                role="tab"
                onClick={() => handleTabClick('approach-panel')}
            >
                <NotebookPen />
                Our Approach
            </button>
            <button
                type="button"
                className={`${activeTab === 'about-panel' ? 'font-semibold text-opacity-100' : 'text-opacity-50'} py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap transition ease-in-out text-one hover:text-five focus:outline-none `}
                id="tab-item-1"
                aria-selected={activeTab === 'about-panel'}
                aria-controls="about-panel"
                role="tab"
                onClick={() => handleTabClick('about-panel')}
            >
                <Store />
                About Us
            </button>
            <button
                type="button"
                className={`${activeTab === 'goal-panel' ? 'font-semibold text-opacity-100' : 'text-opacity-50'} py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap transition ease-in-out text-one hover:text-five focus:outline-none `}
                id="tab-item-2"
                aria-selected={activeTab === 'goal-panel'}
                aria-controls="goal-panel"
                role="tab"
                onClick={() => handleTabClick('goal-panel')}
            >
                <Goal />
                Our Goal
            </button>
            </nav>
            {/* End Tab */}

            {/* Tab Content */}
            <div className='mt-3 pt-4 pb-4'>
            <div
                id="about-panel"
                className={`${activeTab === 'about-panel' ? 'block' : 'hidden'} hs-tab-active:font-semibold hs-tab-active:text-one`}
                aria-labelledby="about-panel"
                role="tabpanel"
                tabIndex="0"
            >
                ABOUT US PLACEHOLDER to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>

            <div
                id="goal-panel"
                className={`${activeTab === 'goal-panel' ? 'block' : 'hidden'} hs-tab-active:font-semibold hs-tab-active:text-one`}
                aria-labelledby="goal-panel"
                role="tabpanel"
                tabIndex="0"
            >
                OUR GOAL PLACEHOLDER to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>

            <div
                id="approach-panel"
                className={`${activeTab === 'approach-panel' ? 'block' : 'hidden'} hs-tab-active:font-semibold hs-tab-active:text-one`}
                aria-labelledby="approach-panel"
                role="tabpanel"
                tabIndex="0"
            >
                <ul className='relative flex flex-col gap-x-2 gap-y-9 w-full ml-3 mt-4'>

                {/* Step 1 */}
                <div className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-[-37px] after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-one">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-one text-one] font-semibold text-xs uppercase rounded-full">
                        1
                        </span>
                    </div>
                    </div>

                    <div className="grow -mt-3 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                        <span className="text-white text-2xl">Identify the Problem/Target:</span><br></br>
                        Identify your target audience and understand their needs.
                    </p>
                    </div>
                </div>
                {/* End Step 1 */}

                {/* Step 2 */}
                <div className="flex gap-x-5 ms-1">
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-[-37px] after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-one">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-one text-one font-semibold text-xs uppercase rounded-full">
                        2
                        </span>
                    </div>
                    </div>

                    <div className="grow -mt-3 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                        <span className="text-white text-2xl">Create a Solution and Test it:</span><br></br>
                        Develop a solution catering your audiences need and test it.
                    </p>
                    </div>
                </div>
                {/* End Step 2 */}

                {/* Step 3 */}
                <div className="flex gap-x-5 ms-1">
                    <div className="relative">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex shrink-0 justify-center items-center size-8 border border-one text-one font-semibold text-xs uppercase rounded-full">
                        3
                        </span>
                    </div>
                    </div>

                    <div className="grow -mt-3 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-neutral-400">
                        <span className="text-white text-2xl">Maintain the Solution:</span><br></br>
                        Maintaining the solution as long as you need and support.
                    </p>
                    </div>
                </div>
                {/* End Step 3 */}


                </ul>
            </div>
            </div>
            {/* End Tab Content */}

        </div>
        </div>

    </section>
    // End About
  );
};

export default Tabs;
