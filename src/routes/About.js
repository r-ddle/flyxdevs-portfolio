import React from 'react';
// Removed: import Tabs from './Accordian'
import Hero from './Hero'; // Hero will be refactored in a subsequent step

import ServiceHighlightCard from '../components/ServiceHighlightCard';
import CaseStudyPreviewCard from '../components/CaseStudyPreviewCard';
import TestimonialCard from '../components/TestimonialCard';
import { Briefcase, Layers, Smartphone } from 'lucide-react'; // Example icons

// Import statements for new sections will be added here later
// e.g., import ServiceHighlight from '../components/ServiceHighlight';
// import CaseStudyPreview from '../components/CaseStudyPreview';
// import Testimonial from '../components/Testimonial';

const About = () => {

  const services = [
    {
      icon: Briefcase,
      title: 'Custom Web Development',
      description: 'Tailored web solutions designed to meet your unique business needs and drive engagement.',
      linkTo: '/services/custom-development', // Assuming these routes will exist
    },
    {
      icon: Layers,
      title: 'Full-Stack Applications',
      description: 'Robust and scalable full-stack applications built with modern technologies for optimal performance.',
      linkTo: '/services/full-stack-apps',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Intuitive and high-performing mobile apps for iOS and Android that captivate your users.',
      linkTo: '/services/mobile-apps',
    },
  ];

  const caseStudies = [
    {
      imageUrl: 'https://picsum.photos/seed/projectA/600/400', // Placeholder image
      title: 'Reimagining E-Commerce for Client X',
      summary: 'A complete overhaul of a legacy e-commerce platform, resulting in a 40% increase in conversions and improved user satisfaction.',
      linkTo: '/portfolio/case-study-client-x', // Assuming these routes will exist
    },
    {
      imageUrl: 'https://picsum.photos/seed/projectB/600/400', // Placeholder image
      title: 'Mobile-First Solution for Startup Y',
      summary: 'Developed a cross-platform mobile application that helped Startup Y secure its first 10,000 users within three months.',
      linkTo: '/portfolio/case-study-startup-y',
    },
    {
      imageUrl: 'https://picsum.photos/seed/projectC/600/400', // Placeholder image
      title: 'Enterprise App Modernization', // Shorter title example
      summary: 'Modernized a critical internal enterprise application, improving performance by 60% and reducing maintenance costs significantly.',
      linkTo: '/portfolio/case-study-corp-z',
    },
  ];

  const testimonials = [
    {
      quote: "Working with this team was a game-changer for our business. Their expertise and dedication are unmatched.",
      authorName: 'Jane Doe',
      authorRole: 'CEO, ExampleCorp',
      imageUrl: 'https://picsum.photos/seed/jane/100/100', // Placeholder image
    },
    {
      quote: "The quality of their work exceeded all our expectations. We saw a significant improvement in user engagement.",
      authorName: 'John Smith',
      authorRole: 'Marketing Director, Innovate Ltd.',
      imageUrl: 'https://picsum.photos/seed/john/100/100', // Placeholder image
    },
    {
      quote: "Professional, responsive, and incredibly talented. They delivered exactly what we needed, on time and on budget.",
      authorName: 'Alice Brown',
      authorRole: 'Founder, Tech Startup Inc.',
      // No image for this one to show flexibility
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is typically outside this page component, in a main layout like Page.js */}

      <main className="flex-grow">
        {/* Hero Section */}
        {/* The existing Hero props will be reviewed and updated in the next step */}
        <Hero
          SpanTitle="Innovate. Create. Elevate." // Placeholder, will be updated
          Title="Bespoke Digital Solutions for a Modern World" // Placeholder
          paragraph="We partner with you to craft stunning websites, powerful applications, and engaging mobile experiences that drive results and set you apart." // Placeholder
          ctaText="Explore Our Services"
          ctaLink="/solutions"
        />

        {/* Key Service Categories Section - Placeholder */}
        <section id="services-highlight" className="py-12 lg:py-16 bg-neutral-100 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-8 lg:mb-12">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceHighlightCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  linkTo={service.linkTo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Case Studies Section - Placeholder */}
        <section id="featured-case-studies" className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-8 lg:mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyPreviewCard
                  key={study.title}
                  imageUrl={study.imageUrl}
                  title={study.title}
                  summary={study.summary}
                  linkTo={study.linkTo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials Section - Placeholder */}
        <section id="testimonials" className="py-12 lg:py-16 bg-neutral-100 dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-100 mb-8 lg:mb-12">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index} // Using index as key if titles/ids are not unique
                  quote={testimonial.quote}
                  authorName={testimonial.authorName}
                  authorRole={testimonial.authorRole}
                  imageUrl={testimonial.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer is typically outside this page component, in a main layout like Page.js */}
    </div>
  );
};

export default About;
