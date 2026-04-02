import React from "react";

interface ContactRowProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  className?: string;
  iconBoxClassName?: string;
  labelClassName?: string;
}

export default function ContactRow({
  icon,
  label,
  children,
  className = "",
  iconBoxClassName = "border-white/20 text-white/60",
  labelClassName = "text-gray-400",
}: ContactRowProps) {
  return (
    <div className={`flex items-start gap-6 ${className}`}>
      <div
        className={`w-12 h-12 flex-shrink-0 flex items-center justify-center border ${iconBoxClassName}`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span
          className={`text-[9px] uppercase tracking-[0.2em] ${labelClassName} mb-1`}
        >
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}
