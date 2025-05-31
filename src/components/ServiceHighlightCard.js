import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react'; // Using an icon from lucide-react

const ServiceHighlightCard = ({ icon: Icon, title, description, linkTo }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      <div className="flex-shrink-0 mb-4">
        {Icon && (
          <Icon className="h-10 w-10 text-primary-500 dark:text-primary-400" aria-hidden="true" />
        )}
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          {title}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>
      {linkTo && (
        <Link
          to={linkTo}
          className="inline-flex items-center text-sm font-medium text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 group mt-auto"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

ServiceHighlightCard.propTypes = {
  icon: PropTypes.elementType, // Expect a lucide-react icon component
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default ServiceHighlightCard;
