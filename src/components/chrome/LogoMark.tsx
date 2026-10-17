/** The favicon's two waves (src/app/icon.svg), drawn inline so it matches the header ink. */
export function LogoMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden className={className}>
      <rect width="64" height="64" rx="14" fill="var(--color-paper)" stroke="var(--color-ink)" strokeOpacity={0.18} />
      <path d="M6 24c8-6 14 6 22 0s14-6 22 0 8 2 8 2" fill="none" stroke="var(--color-blue-ink)" strokeWidth={5} strokeLinecap="round" />
      <path d="M6 40c8-6 14 6 22 0s14-6 22 0 8 2 8 2" fill="none" stroke="var(--color-water)" strokeWidth={4} strokeLinecap="round" opacity={0.7} />
    </svg>
  );
}
