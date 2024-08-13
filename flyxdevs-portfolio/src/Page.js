import React, { useState } from 'react';
import { Store } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { Goal } from 'lucide-react';
import { revealMessage } from './Message.js';

console.log('%cGojo is gay', 'color: blue; font-size: 50px;');  

function Page() {
  // Tab Control Function
  const [activeTab, setActiveTab] = useState('about-panel')
  const handleTabClick = (panelname) => {
    setActiveTab(panelname)
  }

  return (
    <>
      {/* Navbar */}
      <header className="font-display sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full mt-1">
        <nav
          className="relative max-w-[66rem] w-full bg-nine-100 rounded-[10px] py-3 ps-5 pe-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80 text-one"
              href="index.html"
              id='logo'
              onMouseEnter={() => revealMessage()}
            >
              Flyx Devs{/* replace this with the logo */}
            </a>
            {/* End Logo */}

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-one disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse"
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Collapse */}
          <div
            id="navbar-collapse"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a
                className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine"
                href="#about"
              >
                About
              </a>
              <a
                className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine"
                href="#pricing"
              >
                Pricing
              </a>
              <a
                className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine"
                href="#portfolio"
              >
                Portfolio
              </a>
              <a
                className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine"
                href="#solutions"
              >
                Solutions
              </a>

              <div>
                <a
                  className="group inline-flex items-center gap-x-2 py-2 px-3 bg-one font-medium text-sm text-neutral-800 rounded-[10px] focus:outline-none hover:bg-nine-100 hover:text-one transition-all"
                  href="../../templates/agency/index.html#contact"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
          {/* End Collapse */}
        </nav>
      </header>
      {/* End Navbar */}

      {/* Hero Content */}
      <main>
        <div className="w-full pt-24 pb-24 ps-2 pe-2">
          <h1 className="max-w-[66rem] mx-auto text-7xl text-eight">
            <span className="text-nine-100">Flyx Devs: </span>
            Creating Beautiful, Smooth and Clean Applications.
          </h1>
          <p className="max-w-[66rem] mx-auto text-xl text-six mt-3 ps-2">
            Since 2024
          </p>
        </div>
      </main>
      {/* End Hero */}

      {/* About Container */}
      <section id="about" className="mb-10">
        <div className={`${activeTab === 'approach-panel' ? 'h-[460px]' : 'h-[360px]'} bg-nine-100 shadow-md text-one max-w-[66rem] p-4 w-full mx-auto rounded-xl bg-opacity-80 backdrop-filter backdrop-blur-lg`}>
          
          {/* Tab Switcher */}
          <div className='px-4'>
            <nav className="flex gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
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
      {/* End About Container*/}

      {/* Projects Container */}
      <section id="#pricing" className='w-full bg-three h-screen py-16'>
        <div className="flex flex-col mx-auto max-w-[66rem]">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-[66rem] inline-block align-middle">
              <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Name</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Project Title</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400">Project Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    {/* Table data will be inserted here */}
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Projects Container */}

      {/* Footer */}
      <footer className="relative overflow-hidden bg-nine">
        <svg className="absolute -bottom-20 start-1/2 w-[1900px] transform -translate-x-1/2" width="2745" height="288" viewBox="0 0 2745 488" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 330.864C232.505 403.801 853.749 527.683 1482.69 439.719C2111.63 351.756 2585.54 434.588 2743.87 487" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 308.873C232.505 381.81 853.749 505.692 1482.69 417.728C2111.63 329.765 2585.54 412.597 2743.87 465.009" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 286.882C232.505 359.819 853.749 483.701 1482.69 395.738C2111.63 307.774 2585.54 390.606 2743.87 443.018" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 264.891C232.505 337.828 853.749 461.71 1482.69 373.747C2111.63 285.783 2585.54 368.615 2743.87 421.027" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 242.9C232.505 315.837 853.749 439.719 1482.69 351.756C2111.63 263.792 2585.54 346.624 2743.87 399.036" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 220.909C232.505 293.846 853.749 417.728 1482.69 329.765C2111.63 241.801 2585.54 324.633 2743.87 377.045" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 198.918C232.505 271.855 853.749 395.737 1482.69 307.774C2111.63 219.81 2585.54 302.642 2743.87 355.054" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 176.927C232.505 249.864 853.749 373.746 1482.69 285.783C2111.63 197.819 2585.54 280.651 2743.87 333.063" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 154.937C232.505 227.873 853.749 351.756 1482.69 263.792C2111.63 175.828 2585.54 258.661 2743.87 311.072" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 132.946C232.505 205.882 853.749 329.765 1482.69 241.801C2111.63 153.837 2585.54 236.67 2743.87 289.082" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 110.955C232.505 183.891 853.749 307.774 1482.69 219.81C2111.63 131.846 2585.54 214.679 2743.87 267.091" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 88.9639C232.505 161.901 853.749 285.783 1482.69 197.819C2111.63 109.855 2585.54 192.688 2743.87 245.1" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 66.9729C232.505 139.91 853.749 263.792 1482.69 175.828C2111.63 87.8643 2585.54 170.697 2743.87 223.109" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 44.9819C232.505 117.919 853.749 241.801 1482.69 153.837C2111.63 65.8733 2585.54 148.706 2743.87 201.118" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 22.991C232.505 95.9276 853.749 219.81 1482.69 131.846C2111.63 43.8824 2585.54 126.715 2743.87 179.127" className="stroke-neutral-700/50" stroke="currentColor"/>
          <path d="M0.5 1C232.505 73.9367 853.749 197.819 1482.69 109.855C2111.63 21.8914 2585.54 104.724 2743.87 157.136" className="stroke-neutral-700/50" stroke="currentColor"/>
        </svg>

        <div className="relative z-10">
          <div className="w-full max-w-5xl px-4 xl:px-0 py-10 lg:pt-16 mx-auto">
            <div className="inline-flex items-center">
              <img src='https://i.imgur.com/OG6YJEs.jpeg' width={46} height={46} alt='companyLogo' className='rounded-lg'></img>

              <div className="border-s border-one ps-5 ms-5">
                <p className="text-base text-one">2024 Flyx Devs.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
}

export default Page;
