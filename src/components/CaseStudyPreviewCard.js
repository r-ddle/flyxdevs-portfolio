import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudyPreviewCard = ({ imageUrl, title, summary, linkTo }) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col">
      {imageUrl && (
        <Link to={linkTo} className="block">
          <img
            src={imageUrl}
            alt={`Preview of ${title}`}
            className="w-full h-48 object-cover" // Fixed height, object-cover ensures aspect ratio
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
          {title}
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4 flex-grow">
          {summary}
        </p>
        {linkTo && (
          <Link
            to={linkTo}
            className="inline-flex items-center text-sm font-medium text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 group mt-auto"
          >
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
};

CaseStudyPreviewCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
};

export default CaseStudyPreviewCard;
