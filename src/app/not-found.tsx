
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[var(--background)] flex items-center justify-center px-4 sm:px-6 lg:px-8">

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-96 w-96 rounded-full bg-amber-500/10 blur-[140px]" />
        <div className="absolute top-[50%] left-[50%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="particle top-[15%] left-[12%] w-2 h-2" />
        <span className="particle top-[70%] left-[20%] w-3 h-3" />
        <span className="particle top-[30%] right-[15%] w-2 h-2" />
        <span className="particle bottom-[20%] right-[25%] w-4 h-4" />
        <span className="particle top-[50%] right-[35%] w-2 h-2" />
      </div>

      <section className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="mb-8">
          <span className="section-label">
            Lost In Space
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-[110px] sm:text-[160px] md:text-[220px] lg:text-[280px] leading-none font-black tracking-tighter gold animate-pulse-glow select-none">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[var(--foreground)]">
          Page{' '}
          <span className="bg-gradient-to-r from-purple-400 via-amber-400 to-cyan-400 bg-clip-text text-transparent">
            Not Found
          </span>
        </h2>

        {/* Description */}
   <div className="flex justify-center w-full">
  <p className="max-w-1xl text-center text-base sm:text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed">
    The page you're looking for doesn't exist, may have been moved,
    deleted, or the URL might be incorrect. Let's get you back to
    the right place.
  </p>
</div>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            href="/"
            className="btn-primary min-w-[200px] justify-center"
          >
            Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn-outline min-w-[200px] justify-center"
          >
            Go Back
          </button>

        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-[var(--foreground-muted)] opacity-70">
          Error Code: 404 • Social Space Bar
        </p>

      </section>
    </main>
  );
}

