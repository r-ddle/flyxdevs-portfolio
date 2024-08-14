const Hero = (hero) => {
    return (
        <>
        {/* Hero Content */}
        <main>
            <div className="w-full pt-24 pb-24 ps-2 pe-2">
            <h1 className="max-w-[66rem] mx-auto text-7xl text-eight">
                <span className="text-nine-100">{hero.SpanTitle}</span>
                {hero.Title}
            </h1>
            <p className="max-w-[66rem] mx-auto text-xl text-six mt-3 ps-2">
                {hero.paragraph}
            </p>
            </div>
        </main>
        {/* End Hero */}
        </>
    )
}

export default Hero
