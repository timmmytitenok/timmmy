import type { ReactNode } from "react";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  variant?: "primary" | "secondary" | "muted";
  children?: ReactNode;
}

export function LinkCard({
  href,
  title,
  description,
  variant = "secondary",
  children,
}: LinkCardProps) {
  const baseStyles =
    "group block w-full rounded-xl border text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]";

  const variantStyles = {
    primary:
      "border-white bg-white px-6 py-4 text-[#0A0A0A] hover:bg-zinc-100 hover:border-zinc-200",
    secondary:
      "border-zinc-600 bg-transparent px-6 py-4 text-white hover:border-white hover:bg-white/5",
    muted:
      "border-zinc-700/50 bg-transparent px-4 py-3 text-sm text-zinc-500 hover:border-zinc-500 hover:text-zinc-300",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title}${description ? `: ${description}` : ""}`}
    >
      {children ?? (
        <>
          <span
            className={`block ${variant === "muted" ? "font-medium" : "font-semibold"}`}
          >
            {title}
          </span>
          {description && (
            <span className="mt-0.5 block text-sm opacity-90">{description}</span>
          )}
        </>
      )}
    </a>
  );
}
