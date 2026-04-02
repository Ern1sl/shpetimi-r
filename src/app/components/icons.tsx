interface IconProps {
  size?: number;
  className?: string;
}

// ─── ENVELOPE (Email) ───────────────────────────────────────
export function EmailIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 20 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M1 1L10 8L19 1" />
      <rect x="1" y="1" width="18" height="14" rx="1" />
    </svg>
  );
}

// ─── PHONE (Handset) ────────────────────────────────────────
export function PhoneIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

// ─── LOCATION (Map Pin) ─────────────────────────────────────
export function LocationIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── CLOCK (Office Hours) ───────────────────────────────────
export function ClockIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

// ─── ARROW RIGHT ────────────────────────────────────────────
export function ArrowRightIcon({ size = 12, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ─── CHEVRON DOWN (Open in Maps) ────────────────────────────
export function ChevronDownIcon({ size = 14, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      <path d="M7 13l5 5 5-5M12 18V6" />
    </svg>
  );
}

// ─── BACK ARROW ─────────────────────────────────────────────
export function BackArrowIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className || "w-7 h-7 md:w-10 md:h-10"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <path
        d="M3 8H16.5C18.9853 8 21 10.0147 21 12.5C21 14.9853 18.9853 17 16.5 17H3M3 8L6 5M3 8L6 11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── LAYERS (Navbar Menu Toggle) ────────────────────────────
export function LayersIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className={className || "w-4 h-4"}
    >
      <path
        fill="rgb(255, 255, 255)"
        d="M428.2 380.7L231.7 478.5c-2.3 1-4.8 1.5-7.3 1.5s-5-.5-7.3-1.5L20.5 380.7c-4-2-4-5.3 0-7.3L67.6 350c2.3-1 4.8-1.5 7.3-1.5s5 .5 7.3 1.5l134.8 67c2.3 1 4.8 1.5 7.3 1.5s5-.5 7.3-1.5l134.8-67c2.3-1 4.8-1.5 7.3-1.5s5 .5 7.3 1.5l47.1 23.4c4 2 4 5.2 0 7.2zm0-136.5l-47.1-23.4c-2.3-1-4.8-1.5-7.3-1.5s-5 .5-7.3 1.5L231.7 287.8c-2.3 1-4.8 1.5-7.3 1.5s-5-.5-7.3-1.5L82.3 220.7c-2.3-1-4.8-1.5-7.3-1.5s-5 .5-7.3 1.5L20.5 244.1c-4 2-4 5.3 0-7.3l196.5 97.8c2.3 1 4.8 1.5 7.3 1.5s5-.5 7.3-1.5l196.5-97.8c4-2 4-5.3 0-7.3zM20.5 130.4L217 220.7c4.7 1.9 10 1.9 14.7 0l196.5-90.3c4-1.9 4-4.9 0-6.7L231.7 33.4c-4.7-1.9-10-1.9-14.7 0L20.5 123.7c-4 1.8-4 4.9 0 6.7z"
      />
    </svg>
  );
}
