import React from 'react';
import WorkflowStep from '../components/WorkflowStep';
import { Search, Palette, Code, TestTubeDiagonal, Rocket, LifeBuoy } from 'lucide-react'; // Example icons

const workflowData = [
  {
    stepNumber: '01',
    icon: Search,
    title: 'Discovery & Planning',
    description: 'We start by understanding your vision, goals, target audience, and project requirements through detailed discussions and research. This phase ensures a solid foundation and a clear roadmap for development.',
  },
  {
    stepNumber: '02',
    icon: Palette,
    title: 'Design & Prototyping',
    description: 'Our team creates intuitive UI/UX designs and interactive prototypes. We focus on user experience, visual appeal, and brand alignment, iterating based on your feedback to perfect the user journey.',
  },
  {
    stepNumber: '03',
    icon: Code,
    title: 'Development',
    description: 'Skilled developers bring the approved designs to life using modern technologies and agile methodologies. We write clean, efficient, and scalable code, ensuring your product is robust and future-proof.',
  },
  {
    stepNumber: '04',
    icon: TestTubeDiagonal,
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing is conducted throughout the development cycle to identify and resolve any issues. We perform functional, performance, security, and usability testing to ensure a high-quality deliverable.',
  },
  {
    stepNumber: '05',
    icon: Rocket,
    title: 'Deployment & Launch',
    description: 'Once quality assurance is complete, we handle the deployment process, whether it’s to app stores or web servers. We ensure a smooth launch and provide necessary documentation and training.',
  },
  {
    stepNumber: '06',
    icon: LifeBuoy,
    title: 'Post-Launch Support & Iteration',
    description: 'Our commitment doesn’t end at launch. We offer ongoing support, maintenance, and can work with you on future iterations and enhancements based on user feedback and evolving business needs.',
  },
];

const ProcessPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 lg:py-16 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
              Our Process
            </h1>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              We follow a structured and transparent process to ensure the successful delivery of high-quality digital solutions. Each step is designed for collaboration, efficiency, and achieving your project objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {workflowData.map((step) => (
              <WorkflowStep
                key={step.title}
                stepNumber={step.stepNumber}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          {/* Timeline Section - Placeholder */}
          <section className="mt-16 lg:mt-20 py-12 lg:py-16 bg-neutral-100 dark:bg-neutral-900 rounded-lg">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 md:mb-8">
                Project Timelines
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                Project timelines vary based on scope and complexity. We work closely with you to establish realistic milestones and ensure timely delivery. A detailed timeline will be provided during the planning phase of your specific project.
              </p>
              {/* More detailed timeline graphics or information could go here in the future */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProcessPage;
