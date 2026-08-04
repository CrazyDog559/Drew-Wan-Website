import { Link } from 'react-router-dom';

const EntityCard = ({ item, basePath, ctaLabel }) => {
  return (
    <Link
      to={`${basePath}/${item.slug}`}
      className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg dark:shadow-none dark:hover:bg-gray-700 transition-shadow duration-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={item.thumbnail}
          alt={item.title}
          width="1280"
          height="720"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {item.excerpt}
        </p>
        <button className="text-primary font-medium text-sm hover:text-primary-dark transition-colors">
          {ctaLabel}
        </button>
      </div>
    </Link>
  );
};

export default EntityCard;
