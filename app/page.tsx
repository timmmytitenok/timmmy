import { LinkItem } from "@/components/LinkItem";
import { TypewriterName } from "@/components/TypewriterName";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative min-h-screen bg-[#0B0B0C] text-white">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <main
        className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24 sm:px-8 sm:py-32"
        role="main"
        aria-label="TIMMMY Titenok portfolio"
      >
        {/* Hero Section */}
        <header className="flex flex-col items-center text-center">
          <div className="unblur-in" style={{ animationDelay: "0ms" }}>
            <TypewriterName />
          </div>

          <p
            className="mt-8 max-w-md text-base text-zinc-500 sm:text-lg unblur-in"
            style={{ animationDelay: "300ms" }}
          >
            From idea → users → revenue.
          </p>
        </header>

        {/* Link Section */}
        <nav
          className="mt-12 w-full max-w-md sm:mt-16"
          aria-label="Project links"
        >
          <div className="flex flex-col gap-3">
            <div
              className="unblur-in"
              style={{ animationDelay: "600ms" }}
            >
              <LinkItem
                href="https://sterlingdialer.com/"
                title="STERLING DIALER"
                description="AI dialer for Insurance Agents"
                variant="project"
              />
            </div>
            <div
              className="unblur-in relative rounded-xl border-l-2 border-transparent bg-white/[0.02] px-5 py-6"
              style={{ animationDelay: "750ms" }}
            >
              <span className="absolute right-4 top-4 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                COMING SOON
              </span>
              <span className="block font-medium text-white">CALBANK</span>
              <p className="mt-1 text-sm text-zinc-500">
                A better way to track calories
              </p>
            </div>
          </div>
        </nav>

        {/* Side Quest Section */}
        <section
          className="mt-12 w-full max-w-md sm:mt-16"
          aria-label="Side quest"
        >
          <p
            className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600 unblur-in"
            style={{ animationDelay: "900ms" }}
          >
            SIDE QUEST · Built at 15
          </p>
          <div
            className="mt-3 unblur-in"
            style={{ animationDelay: "1050ms" }}
          >
            <LinkItem
              href="https://apps.apple.com/us/app/limit-push/id6446508832"
              title="First mobile game"
              variant="muted"
            />
          </div>
        </section>

        {/* Footer */}
        <footer
          className="mt-28 flex flex-col items-center gap-2 text-center sm:mt-40 unblur-in"
          style={{ animationDelay: "1200ms" }}
        >
          <p className="text-xs text-zinc-600">© {currentYear} TIMMMY</p>
        </footer>
      </main>
    </div>
  );
}
