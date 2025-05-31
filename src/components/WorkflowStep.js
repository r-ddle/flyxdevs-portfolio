import React from 'react';
import PropTypes from 'prop-types';

const WorkflowStep = ({ stepNumber, title, description, icon: Icon }) => {
  return (
    <div className="flex items-start space-x-4 p-6 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
      {Icon ? (
        <Icon className="h-10 w-10 text-primary-500 dark:text-primary-400 mt-1 flex-shrink-0" aria-hidden="true" />
      ) : stepNumber && (
        <div className="flex-shrink-0 w-12 h-12 bg-primary-500 dark:bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {stepNumber}
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
          {title}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

WorkflowStep.propTypes = {
  stepNumber: PropTypes.string, // e.g., "01", "02"
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType, // Optional: lucide-react icon component
};

export default WorkflowStep;
