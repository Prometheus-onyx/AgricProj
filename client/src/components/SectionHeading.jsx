const SectionHeading = ({ eyebrow, title, description, centered = false }) => {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-white">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-slate-600">{description}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
