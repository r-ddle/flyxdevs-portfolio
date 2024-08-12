function Page() {
    return (
        <>
            {/* Header */}
            <header className="font-display sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full mt-1">
                <nav className="relative max-w-[66rem] w-full bg-nine rounded-[10px] py-3 ps-5 pe-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80 text-one" href="../../templates/agency/index.html" aria-label="Preline">
                        Flyx Devs{/* replace this with the logo */}
                        </a>
                        {/* End Logo */}

                        <div className="md:hidden">
                        <button type="button" className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-one disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse" aria-controls="navbar-collapse" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                            </svg>
                        </button>
                        </div>
                    </div>

                    {/* Collapse */}
                    <div id="navbar-collapse" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                        <a className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine" href="#about">About</a>
                        <a className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine" href="#">Pricing</a>
                        <a className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine" href="#">Portfolio</a>
                        <a className="text-sm text-one hover:text-nine md:py-4 focus:outline-none focus:text-nine" href="#">Solutions</a>
                        
                        <div>
                            <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-one font-medium text-sm text-neutral-800 rounded-[10px] focus:outline-none hover:bg-nine-100 hover:text-one transition-all" href="../../templates/agency/index.html#contact">
                            Contact us
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* End Collapse */}
                </nav>
            </header>
            {/* End Header */}

            {/* Hero Content */}
            <main>
                <div className="relative w-full mt-40">
                    <h1 className="max-w-[77rem] ps-[150px] text-7xl text-eight">
                        <span className="text-nine-100">Flyx Devs: </span>
                        Creating Beautiful, Smooth and Clean Applications.
                    </h1>
                    <p className="max-w-[66rem] ps-[150px] text-xl text-six mt-1">Since 2024</p>
                </div>
            </main>
            {/* End Hero */}

            {/* About Section */}
            <section id="#about">
                
            </section>
        </>
    )
}

export default Page