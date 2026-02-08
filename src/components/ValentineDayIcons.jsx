const size = 32;

export function RoseDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16 6c-1 2-3 4-6 4-2 0-4 1-4 4 0 4 3 7 6 10 2 2 4 4 4 8h8c0-4 2-6 4-8 3-3 6-6 6-10 0-3-2-4-4-4-3 0-5-2-6-4z" opacity={0.9} />
      <path d="M16 8c.5 1 1.5 2 3 2 1.5 0 2.5.5 2.5 2.5 0 2-1 4-3 6-1 1-2 2-2 4h4c0-1.5 1-2.5 2-4 1.5-1.5 2.5-3 2.5-5 0-1.5-1-2-2.5-2-1.5 0-2.5-1-3-2z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}

export function ProposeDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <circle cx="16" cy="16" r="7" />
      <rect x="14.5" y="6" width="3" height="5" rx="0.5" fill="currentColor" stroke="none" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ChocolateDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <rect x="7" y="9" width="18" height="14" rx="1.5" opacity={0.95} />
      <path d="M16 9v14M9 16h14" stroke="currentColor" strokeWidth="0.8" fill="none" opacity={0.5} />
      <rect x="9" y="11" width="5" height="2.5" rx="0.3" opacity={0.6} />
      <rect x="18" y="11" width="5" height="2.5" rx="0.3" opacity={0.6} />
    </svg>
  );
}

export function TeddyDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="16" cy="18" rx="10" ry="9" />
      <circle cx="10" cy="10" r="3" />
      <circle cx="22" cy="10" r="3" />
      <circle cx="12" cy="11" r="1" fill="#1a0a1e" />
      <circle cx="20" cy="11" r="1" fill="#1a0a1e" />
      <path d="M14 16c.5 1 1.5 1.5 2 1.5s1.5-.5 2-1.5" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      <ellipse cx="16" cy="21" rx="2" ry="1.5" fill="currentColor" opacity={0.5} />
    </svg>
  );
}

export function PromiseDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden>
      <rect x="8" y="12" width="16" height="12" rx="2" />
      <path d="M12 12V8a4 4 0 018 0v4" strokeLinecap="round" />
      <circle cx="16" cy="18" r="2" fill="currentColor" opacity={0.5} />
    </svg>
  );
}

export function HugDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} aria-hidden>
      <path d="M10 12c-2 1-3 3-3 6v4c0 1.5 1 3 3 3s3-1.5 3-3v-4c0-3-1-5-3-6z" />
      <path d="M22 12c2 1 3 3 3 6v4c0 1.5-1 3-3 3s-3-1.5-3-3v-4c0-3 1-5 3-6z" />
      <path d="M13 16h6" strokeLinecap="round" />
      <path d="M14 14l2-2 2 2 2-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function KissDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16 6c-4 0-8 3-8 8 0 6 6 12 8 14 2-2 8-8 8-14 0-5-4-8-8-8z" opacity={0.9} />
      <path d="M10 11c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5 1-1.5 2-1.5zM22 11c1 0 2 .5 2 1.5s-1 1.5-2 1.5-2-.5-2-1.5 1-1.5 2-1.5z" />
      <path d="M16 15.5c.5.5 1 1.5 1 2.5 0 1-.5 2-1 2.5-.5-.5-1-1.5-1-2.5 0-1 .5-2 1-2.5z" opacity={0.8} />
    </svg>
  );
}

export function ValentineDayIcon({ className = 'w-8 h-8 text-romantic-rose' }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden>
      <path d="M16 6c-4 0-8 3-8 8 0 6 6 12 8 14 2-2 8-8 8-14 0-5-4-8-8-8z" />
    </svg>
  );
}

const ICONS = {
  rose: RoseDayIcon,
  heart: ProposeDayIcon,
  chocolate: ChocolateDayIcon,
  teddy: TeddyDayIcon,
  lock: PromiseDayIcon,
  hug: HugDayIcon,
  kiss: KissDayIcon,
  valentine: ValentineDayIcon,
};

export function ValentineDayLogo({ iconKey, className }) {
  const Icon = ICONS[iconKey] || ValentineDayIcon;
  return <Icon className={className} />;
}
