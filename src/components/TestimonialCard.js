import React from 'react';
import PropTypes from 'prop-types';
import { Quote } from 'lucide-react'; // Using an icon for quotation marks

const TestimonialCard = ({ quote, authorName, authorRole, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col text-center items-center">
      <Quote className="h-8 w-8 text-primary-500 dark:text-primary-400 mb-4" aria-hidden="true" />

      <p className="text-neutral-700 dark:text-neutral-300 italic leading-relaxed mb-6 flex-grow">
        "{quote}"
      </p>

      <div className="flex items-center mt-auto">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Photo of ${authorName}`}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">
            {authorName}
          </p>
          {authorRole && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {authorRole}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorRole: PropTypes.string,
  imageUrl: PropTypes.string, // Optional image for the author
};

export default TestimonialCard;
