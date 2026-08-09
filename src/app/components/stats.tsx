const Stats = () => {
  const stats = [
    { value: "223", label: "Vessels" },
    { value: "5,842", label: "Employees" },
    { value: "37", label: "Countries Served" },
    { value: "733 M€", label: "Consolidated Revenues" },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-navy-foreground/15 border border-navy-foreground/15">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center py-10 px-4 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="font-serif text-4xl md:text-5xl text-navy-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-xs tracking-[0.15em] uppercase text-navy-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
