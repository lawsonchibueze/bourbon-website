interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  wideTitle?: boolean;
  hideTitle?: boolean;
}

/**
 * Shared short header band for interior pages (as opposed to the full-bleed
 * homepage Hero). Sits directly under the fixed Navigation bar.
 */
const PageHeader = ({
  eyebrow,
  title,
  description,
  wideTitle,
  hideTitle,
}: PageHeaderProps) => {
  return (
    <section className="pt-40 pb-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-6">
          <p className="md:col-span-2 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            {eyebrow}
          </p>
          {!hideTitle && (
            <h1
              className={`${wideTitle ? "md:col-span-10" : "md:col-span-7"} font-serif text-4xl md:text-5xl text-foreground`}
            >
              {title}
            </h1>
          )}
          {description && (
            <p className="md:col-span-3 text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
