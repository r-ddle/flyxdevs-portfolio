import React from 'react';
import PropTypes from 'prop-types';
import { Star, GitFork, ExternalLink, CalendarDays } from 'lucide-react'; // Icons for stats and link

// Helper function to format date (optional, can be done inline or with a library)
const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const GitHubRepoCard = ({ repo }) => {
  if (!repo) return null;

  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out p-5 flex flex-col h-full">
      <div className="flex-grow mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg lg:text-xl font-semibold text-primary-600 dark:text-primary-400 hover:underline">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              {repo.name}
              <ExternalLink size={16} className="ml-1.5 opacity-70" />
            </a>
          </h3>
          {repo.language && (
            <span className="text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 px-2 py-0.5 rounded-full whitespace-nowrap">
              {repo.language}
            </span>
          )}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
          {repo.description || 'No description provided.'}
        </p>
      </div>

      <div className="mt-auto border-t border-neutral-200 dark:border-neutral-700 pt-3">
        <div className="flex items-center justify-between text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center space-x-3">
            <span className="flex items-center" title="Stars">
              <Star size={16} className="mr-1 text-yellow-500" />
              {repo.stargazers_count !== undefined ? repo.stargazers_count : 'N/A'}
            </span>
            <span className="flex items-center" title="Forks">
              <GitFork size={16} className="mr-1 text-neutral-500 dark:text-neutral-400" />
              {repo.forks_count !== undefined ? repo.forks_count : 'N/A'}
            </span>
          </div>
          <span className="flex items-center" title="Last updated">
             <CalendarDays size={14} className="mr-1.5 opacity-80" />
            {formatDate(repo.pushed_at)}
          </span>
        </div>
        {/* Optionally display owner if it's relevant (e.g. if mixing repos from many users not just the two)
         {repo.owner && (
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
            Owner: {repo.owner}
          </p>
        )} */}
      </div>
    </div>
  );
};

GitHubRepoCard.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    pushed_at: PropTypes.string,
    language: PropTypes.string,
    owner: PropTypes.string, // Added owner to proptypes
  }).isRequired,
};

export default GitHubRepoCard;
