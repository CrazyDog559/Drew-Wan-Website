const paths = {
  github: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
    />
  ),
  linkedin: (
    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5v-9h3Zm-1.5-10.75A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75ZM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66Z" />
  ),
  youtube: (
    <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12Z" />
  ),
};

const strokePaths = {
  mail: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />,
  external: <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18v4.5M17.5 6.5 10 14M16 13.5V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4.5" />,
  document: <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h5.5L18 8.5V19a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm5 0v5h5M9.5 13.5h5M9.5 16.5h3" />,
  play: <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 8.6v6.8a.6.6 0 0 0 .92.5l5.3-3.4a.6.6 0 0 0 0-1l-5.3-3.4a.6.6 0 0 0-.92.5Z" />,
  arrowRight: <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />,
  arrowLeft: <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m6 6-6-6 6-6" />,
  arrowDown: <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m6-6-6 6-6-6" />,
  download: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v11m5-5-5 5-5-5M5 19h14" />,
  sun: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36-.7-.7M6.34 6.34l-.7-.7m12.72 0-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
  image: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6Zm0 10 4.5-4.5 4 4 3-3L20 16m-6.5-6.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" />,
  spark: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />,
  code: <path strokeLinecap="round" strokeLinejoin="round" d="m9 8-4 4 4 4m6-8 4 4-4 4m-2.5-11-3 14" />,
  chip: <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h9v9h-9v-9ZM5 9.5H3m2 5H3m16-5h2m-2 5h2M9.5 5V3m5 2V3m-5 18v-2m5 2v-2M5.5 5.5h13v13h-13v-13Z" />,
  layers: <path strokeLinecap="round" strokeLinejoin="round" d="m12 3.5 8.5 4.2-8.5 4.2-8.5-4.2L12 3.5Zm8.5 8.3L12 16l-8.5-4.2m17 4.4L12 20.4l-8.5-4.2" />,
  toolbox: <path strokeLinecap="round" strokeLinejoin="round" d="M4 9.5h16v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9Zm5 0v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M4 13.5h16" />,
  badge: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 14 6l3.3-.4L17 9l2.5 2-2.5 2 .3 3.4L14 16l-2 2.5L10 16l-3.3.4L7 13l-2.5-2L7 9l-.3-3.4L10 6l2-2.5Zm-2 7.6 1.6 1.6 3.2-3.2" />,
  compass: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.2-12.2-2 4.4-4.4 2 2-4.4 4.4-2Z" />,
};

const solidOnly = new Set(Object.keys(paths));

const Icon = ({ name, className = 'h-5 w-5', title }) => {
  const isSolid = solidOnly.has(name);
  const body = isSolid ? paths[name] : strokePaths[name];
  if (!body) return null;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={isSolid ? 'currentColor' : 'none'}
      stroke={isSolid ? undefined : 'currentColor'}
      strokeWidth={isSolid ? undefined : 1.7}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : 'true'}
      aria-label={title}
    >
      {title && <title>{title}</title>}
      {body}
    </svg>
  );
};

export default Icon;
