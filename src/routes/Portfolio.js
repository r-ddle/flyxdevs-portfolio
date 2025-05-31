import { motion as m } from 'framer-motion';
import React, { useState, useMemo, useEffect } from 'react';
import ProjectCards from './ProjectCards'; // Carousel, already refactored
import GitHubRepoCard from '../components/GitHubRepoCard';

// Sample data - can be moved to a separate file or fetched later
const megaprojectsData = [
    {
        title: "Dynamic E-commerce Platform",
        description: "A feature-rich e-commerce solution with advanced product filtering and a custom CMS.",
        category: "Web Development",
        dateUpdated: "October 2023",
        imageUrl: "https://picsum.photos/seed/ecom/800/600" // Placeholder
    },
    {
        title: "Interactive Mobile App for Events",
        description: "Cross-platform mobile app for event discovery, ticketing, and networking.",
        category: "Mobile App",
        dateUpdated: "September 2023",
        imageUrl: "https://picsum.photos/seed/eventapp/800/600" // Placeholder
    },
    {
        title: "AI-Powered Data Analytics Dashboard",
        description: "A web-based dashboard providing real-time data visualization and predictive analytics.",
        category: "AI & Data Science",
        dateUpdated: "November 2023",
        imageUrl: "https://picsum.photos/seed/dashboard/800/600" // Placeholder
    }
];

const moreProjectsData = [
    { title: "Corporate Website Redesign", date: "Jan 2023", category: "Web Design", imageUrl: "https://picsum.photos/seed/corpweb/400/300" },
    { title: "SaaS Platform UI Kit", date: "Mar 2023", category: "UI/UX", imageUrl: "https://picsum.photos/seed/saasui/400/300" },
    { title: "Non-Profit Organization Portal", date: "May 2023", category: "Web Development", imageUrl: "https://picsum.photos/seed/nonprofit/400/300" },
    { title: "Mobile Game Concept Art", date: "Jul 2023", category: "Illustration", imageUrl: "https://picsum.photos/seed/gameart/400/300" },
    { title: "Branding for Tech Startup", date: "Sep 2023", category: "Branding", imageUrl: "https://picsum.photos/seed/startupbrand/400/300" },
    { title: "Portfolio Microsite", date: "Nov 2023", category: "Web Design", imageUrl: "https://picsum.photos/seed/microsite/400/300" },
];

// Simple card component for the "More Projects" section
const SimpleProjectCard = ({ title, date, category, imageUrl }) => (
    <div className="group bg-white dark:bg-neutral-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden flex flex-col">
        {imageUrl && (
            <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        )}
        <div className="p-4 md:p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-1">
                {title}
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{category}</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-auto">{date}</p>
        </div>
    </div>
);


const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [githubRepos, setGithubRepos] = useState([]);
    const [githubLoading, setGithubLoading] = useState(true);
    const [githubError, setGithubError] = useState(null);

    const allCategories = useMemo(() => {
        const categories = new Set();
        megaprojectsData.forEach(p => p.category && categories.add(p.category));
        moreProjectsData.forEach(p => p.category && categories.add(p.category));
        return ['All', ...Array.from(categories).sort()];
    }, []); // Empty dependency array means this runs once

    const filteredMegaProjects = useMemo(() => {
        if (selectedCategory === 'All') return megaprojectsData;
        return megaprojectsData.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);
    const filteredMoreProjects = useMemo(() => {
        if (selectedCategory === 'All') return moreProjectsData;
        return moreProjectsData.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    useEffect(() => {
        const fetchGithubRepos = async () => {
            setGithubLoading(true);
            setGithubError(null);
            const users = ['r-ddle', 'G0J0-Satoru'];
            let allRepos = [];

            try {
                const promises = users.map(user =>
                    fetch(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=10`) // Fetch 10 most recently pushed
                        .then(res => {
                            if (!res.ok) {
                                throw new Error(`Failed to fetch repos for ${user}. Status: ${res.status}`);
                            }
                            return res.json();
                        })
                );

                const userReposArrays = await Promise.all(promises);

                userReposArrays.forEach(repos => {
                    allRepos = allRepos.concat(repos);
                });

                // Transform and pick necessary fields
                const transformedRepos = allRepos.map(repo => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description,
                    html_url: repo.html_url,
                    stargazers_count: repo.stargazers_count,
                    forks_count: repo.forks_count,
                    pushed_at: repo.pushed_at,
                    language: repo.language,
                    owner: repo.owner.login, // Keep owner info if needed
                }));

                // Sort by pushed_at date descending (most recent first)
                transformedRepos.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

                setGithubRepos(transformedRepos);

            } catch (error) {
                console.error("GitHub API Error:", error);
                setGithubError(error.message || "Failed to fetch GitHub repositories.");
            } finally {
                setGithubLoading(false);
            }
        };

        fetchGithubRepos();
    }, []); // Empty dependency array to run once on mount
    return (
        <m.div
            initial={{ opacity: 0, y: 20 }} // Subtle entry animation
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
        >
            <main className="flex-grow py-12 lg:py-16 bg-neutral-50 dark:bg-neutral-950">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-12 lg:mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                            Our Portfolio
                        </h1>
                        <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                            Discover a selection of our finest projects, showcasing our commitment to quality, innovation, and client success.
                        </p>
                    </div>

                    <div className="mb-10 lg:mb-12 py-4">
                        <h3 className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-3 text-center md:text-left">Filter by Category:</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                            {allCategories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out
                                        ${selectedCategory === category
                                            ? 'bg-primary-500 text-white hover:bg-primary-600'
                                            : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-600 border border-neutral-300 dark:border-neutral-600'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Megaprojects Carousel Section */}
                    {megaprojectsData.length > 0 && (
                        <section className="mb-12 lg:mb-16">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 md:mb-8 text-center md:text-left">
                                Featured Projects
                            </h2>
                            <ProjectCards projects={filteredMegaProjects} />
                        </section>
                    )}

                    {/* More Projects Grid Section */}
                    {/* Ensure this section only renders if there's data, or the filtered data has items */}
                    <section>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 md:mb-8 text-center md:text-left">
                            More Projects
                        </h2>
                        {filteredMoreProjects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {filteredMoreProjects.map((project, index) => (
                                    <SimpleProjectCard
                                        key={index} // Consider more stable keys if data is dynamic
                                        title={project.title}
                                        date={project.date}
                                        category={project.category}
                                        imageUrl={project.imageUrl}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-neutral-600 dark:text-neutral-400 text-center col-span-full">
                                No projects found in this category.
                            </p>
                        )}
                    </section>

                    {/* GitHub Repositories Section */}
                    <section className="mt-12 lg:mt-16">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6 md:mb-8 text-center md:text-left">
                            Open Source Contributions
                        </h2>
                        {githubLoading && (
                            <p className="text-neutral-600 dark:text-neutral-400 text-center">Loading GitHub projects...</p>
                        )}
                        {githubError && (
                            <p className="text-error-500 dark:text-error-400 text-center">
                                Error fetching GitHub projects: {githubError}
                            </p>
                        )}
                        {!githubLoading && !githubError && githubRepos.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {githubRepos.map(repo => (
                                    <GitHubRepoCard key={repo.id} repo={repo} />
                                ))}
                            </div>
                        )}
                        {!githubLoading && !githubError && githubRepos.length === 0 && (
                            <p className="text-neutral-600 dark:text-neutral-400 text-center">
                                No public repositories found or they are still loading.
                            </p>
                        )}
                    </section>
                </div>
            </main>
        </m.div>
    );
};

export default Portfolio;
