const Map = () => {
  return (
    <section className="bg-[#f7f5ef] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
          <iframe
            title="Verdant Harvest Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.9161383250726!2d36.90482667496548!3d-1.2184741987699002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTMnMDYuNSJTIDM2wrA1NCcyNi43IkU!5e0!3m2!1sen!2ske!4v1783978271862!5m2!1sen!2ske"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
