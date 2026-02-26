"use client";

interface LinkItemProps {
  href: string;
  title: string;
  description?: string;
  /** "project" = main card, "muted" = softer card, "playful" = text link */
  variant?: "default" | "project" | "muted" | "playful";
}

export function LinkItem({
  href,
  title,
  description,
  variant = "default",
}: LinkItemProps) {
  const isProject = variant === "project";
  const isMuted = variant === "muted";
  const isPlayful = variant === "playful";
  const isCard = isProject || isMuted;

  const projectClasses = [
    "group relative block w-full rounded-xl border-l-2 border-transparent px-5 py-6",
    "bg-white/[0.03] transition-all duration-200 ease-out",
    "hover:translate-x-0.5 hover:bg-white/[0.07] hover:border-white/[0.12] hover:ring-1 hover:ring-white/[0.1]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0C]",
    "active:scale-[0.99] active:bg-white/[0.05]",
    "cursor-pointer",
  ].join(" ");

  const mutedClasses = [
    "group relative block w-full rounded-xl border-l-2 border-transparent px-4 py-4",
    "bg-white/[0.015] transition-all duration-200 ease-out",
    "hover:translate-x-0.5 hover:bg-white/[0.04] hover:border-white/[0.06] hover:ring-1 hover:ring-white/[0.06]",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0C]",
    "active:scale-[0.99] active:bg-white/[0.025]",
    "cursor-pointer",
  ].join(" ");

  const defaultClasses = [
    "group block py-4 transition-all duration-150 ease-out",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0C]",
    isPlayful ? "joke-link-hover" : "",
  ].join(" ");

  const baseClasses = isProject
    ? projectClasses
    : isMuted
      ? mutedClasses
      : defaultClasses;

  const titleClasses = isMuted
    ? "inline-block text-sm font-medium text-zinc-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-zinc-300"
    : "inline-block font-medium text-white transition-transform duration-200 group-hover:translate-x-0.5";

  const arrowClasses = isCard
    ? "shrink-0 text-zinc-500 transition-all duration-200 group-hover:translate-x-2 group-hover:text-zinc-400"
    : "shrink-0 text-zinc-500 transition-all duration-200 group-hover:text-zinc-400";

  const descriptionClasses = isMuted
    ? "mt-1 text-xs text-zinc-600 transition-colors duration-200 group-hover:text-zinc-500"
    : "mt-1 text-sm text-zinc-500 transition-colors duration-200 group-hover:text-zinc-400";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClasses}
      aria-label={description ? `${title}: ${description}` : title}
    >
      <span className="flex flex-1 flex-col">
        <span className="flex items-baseline gap-1.5">
          <span className={titleClasses}>{title}</span>
          <span className={arrowClasses}>→</span>
        </span>
        {description && (
          <p className={descriptionClasses}>{description}</p>
        )}
      </span>
      {!isCard && (
        <span className="mt-1 block h-px w-0 bg-zinc-600 transition-all duration-150 ease-out group-hover:w-full" />
      )}
    </a>
  );
}
