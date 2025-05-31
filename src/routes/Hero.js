import React from 'react';
import PropTypes from 'prop-types';

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
            {/* Using the Button component we created earlier. Assuming it will be imported where Hero is used, or Hero will import it.
                For now, let's use direct styling and plan to replace with <Button> later if Hero becomes a shared component.
                Or, better yet, let's assume Button can be imported if available.
                For this subtask, to avoid import issues if Button.js isn't seen by the subtask,
                I'll style it directly and add a comment.
            */}
            <a
              href={ctaLink}
              className="inline-block bg-primary-500 text-white font-medium text-base px-8 py-3 rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-neutral-100 dark:focus:ring-offset-neutral-900 transition-colors duration-150"
              // TODO: Replace with <Button variant="primary" size="lg" href={ctaLink}>{ctaText}</Button> once Button component is globally available/imported.
            >
              {ctaText}
            </a>
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
