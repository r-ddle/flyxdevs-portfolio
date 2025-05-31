import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // If linking to sub-service pages or contact
import { CheckCircle } from 'lucide-react'; // For listing features/technologies

const ServiceDetailCard = ({
  title,
  description,
  features, // Array of strings
  technologies, // Array of strings
  industries,
  // linkTo, // Optional link for more details or contact
  // ctaText, // Optional CTA text
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 md:p-8 rounded-lg shadow-lg mb-8">
      <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        {title}
      </h3>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
        {description}
      </p>

      {features && features.length > 0 && (
        <div className="mb-6">
          <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            Key Features:
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div>
          <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            Technologies We Use:
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-primary-100 dark:bg-primary-500/30 text-primary-700 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {industries && industries.length > 0 && (
        <div className="mt-6"> {/* Added mt-6 for spacing from technologies or features */}
          <h4 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            Industries We Serve:
          </h4>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="bg-green-100 dark:bg-green-500/30 text-green-700 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded-full" // Using green for differentiation
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Optional CTA Button - can be added later if needed
      {linkTo && ctaText && (
        <div className="mt-8">
          <Link
            to={linkTo}
            className="inline-block bg-primary-500 text-white font-medium text-base px-6 py-3 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-150"
          >
            {ctaText}
          </Link>
        </div>
      )}
      */}
    </div>
  );
};

ServiceDetailCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  technologies: PropTypes.arrayOf(PropTypes.string),
  industries: PropTypes.arrayOf(PropTypes.string),
  // linkTo: PropTypes.string,
  // ctaText: PropTypes.string,
};

export default ServiceDetailCard;
