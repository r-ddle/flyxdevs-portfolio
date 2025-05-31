import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// The Hero component will be used on the Homepage (About.js)
// It should convey the main Value Proposition.

const Hero = ({ SpanTitle, Title, paragraph, ctaText, ctaLink }) => {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-900 text-center"> {/* Example background, adjust as needed */}
      <div className="container mx-auto w-full py-16 sm:py-20 lg:py-24 px-4 md:px-6 lg:px-8"> {/* Standardized padding and container usage */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-neutral-900 dark:text-neutral-100">
          {SpanTitle && <span className="text-primary-500 dark:text-primary-400">{SpanTitle}</span>}
          {Title}
        </h1>
        <p className="max-w-3xl mx-auto mt-6 text-lg sm:text-xl leading-base text-neutral-700 dark:text-neutral-300">
          {paragraph}
        </p>
        {ctaText && ctaLink && (
          <div className="mt-10">
            <Link to={ctaLink}>
              <Button variant="primary" size="lg">
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

Hero.propTypes = {
  SpanTitle: PropTypes.string,
  Title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  ctaText: PropTypes.string, // Optional Call to Action text
  ctaLink: PropTypes.string, // Optional Call to Action link
};

export default Hero;
