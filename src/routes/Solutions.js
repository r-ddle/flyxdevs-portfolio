import React from 'react';
import ServiceDetailCard from '../components/ServiceDetailCard';
// Assuming Hero.js might be reused for a simple page title, or define title directly.
// For now, let's define title directly and use a simpler Hero if needed.

const servicesData = [
  {
    title: 'Custom Web Development',
    description: 'We build bespoke web solutions from the ground up, tailored precisely to your business objectives. Our focus is on creating scalable, secure, and high-performance web applications that provide seamless user experiences.',
    features: [
      'User-centric design and UX',
      'Scalable architecture for future growth',
      'API development and integration',
      'E-commerce platform development',
      'Progressive Web Apps (PWAs)',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'Python/Django', 'Ruby on Rails', 'PostgreSQL', 'MongoDB'],
    industries: ['E-commerce', 'Healthcare', 'FinTech', 'Education', 'Startups'],
  },
  {
    title: 'CMS Solutions',
    description: 'Empower your content strategy with flexible and powerful Content Management Systems. We customize and develop CMS solutions that allow you to manage your digital content effortlessly and effectively.',
    features: [
      'WordPress development and customization',
      'Headless CMS implementation (e.g., Strapi, Contentful)',
      'Custom theme and plugin development',
      'Content migration and strategy',
      'Ongoing CMS support and maintenance',
    ],
    technologies: ['WordPress', 'Strapi', 'Contentful', 'Sanity.io', 'PHP', 'JavaScript'],
    industries: ['Publishing', 'Marketing Agencies', 'Non-Profits', 'Corporate Blogs'],
  },
  {
    title: 'Mobile App Development',
    description: 'Engage your users on the go with intuitive and high-performing mobile applications. We develop native and cross-platform apps for iOS and Android that are designed to captivate and retain users.',
    features: [
      'Native iOS (Swift) and Android (Kotlin/Java) development',
      'Cross-platform development (React Native, Flutter)',
      'UI/UX design for mobile',
      'App store deployment and ASO',
      'Backend development for mobile apps',
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Firebase', 'AWS Amplify'],
    industries: ['Social Networking', 'On-Demand Services', 'Gaming', 'IoT', 'Wellness'],
  },
  {
    title: 'Maintenance & Support',
    description: 'Ensure your digital assets remain robust, secure, and up-to-date with our comprehensive maintenance and support services. We provide proactive monitoring and timely assistance to keep your applications running smoothly.',
    features: [
      'Regular security audits and updates',
      'Performance monitoring and optimization',
      'Bug fixes and issue resolution',
      'Feature enhancements and upgrades',
      'Dedicated support channels',
    ],
    technologies: ['Monitoring Tools', 'CI/CD Pipelines', 'Cloud Platforms (AWS, Azure, GCP)', 'Version Control (Git)'],
    industries: ['SaaS Platforms', 'Legacy Systems', 'High-Traffic Websites', 'Critical Applications'],
  },
];

const Solutions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 lg:py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              We offer a comprehensive suite of digital solutions designed to elevate your business. Explore our core services below to see how we can help you achieve your goals.
            </p>
          </div>

          <div className="space-y-10 lg:space-y-12">
            {servicesData.map((service) => (
              <ServiceDetailCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                technologies={service.technologies}
                industries={service.industries}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Solutions;
