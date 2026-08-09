interface AlphaMarkProps {
  className?: string;
  /**
   * "auto": green on light theme, foreground-color on dark theme — for use
   * directly on the page background (e.g. the navbar).
   * "inverted": always the light color — for use on a permanently dark
   * surface such as the footer, regardless of site theme.
   */
  variant?: "auto" | "inverted";
}

const AlphaMark = ({ className = "", variant = "auto" }: AlphaMarkProps) => {
  const toneClass =
    variant === "inverted" ? "text-surface-strong-foreground" : "text-brand dark:text-foreground";

  return (
    <span
      aria-hidden="true"
      className={`font-serif italic leading-none select-none ${toneClass} ${className}`}
      style={{ fontFamily: 'var(--font-fraunces), Georgia, "Times New Roman", serif' }}
    >
      &alpha;
    </span>
  );
};

export default AlphaMark;
