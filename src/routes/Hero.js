const Hero = (hero) => {
    return (
        <>
        {/* Hero Content */}
        <main>
            <div className="w-full pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 ps-2 pe-2">
            <h1 className="max-w-[66rem] mx-auto text-4xl sm:text-5xl lg:text-7xl text-eight">
                <span className="text-nine-100">{hero.SpanTitle}</span>
                {hero.Title}
            </h1>
            <p className="max-w-[66rem] mx-auto text-lg sm:text-xl text-six mt-3 ps-2">
                {hero.paragraph}
            </p>
            </div>
        </main>
        {/* End Hero */}
        </>
    )
}

export default Hero
