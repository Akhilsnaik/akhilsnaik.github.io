import { profile } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-sm font-medium text-accent">Hi, I'm</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-700 dark:text-slate-300">
            {profile.title} @ {profile.company}
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
            >
              Download Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.114-4.555-4.958 0-1.096.39-1.992 1.03-2.694-.104-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.028A9.548 9.548 0 0112 6.844a9.51 9.51 0 012.504.338c1.909-1.298 2.747-1.028 2.747-1.028.546 1.378.203 2.397.1 2.65.64.702 1.028 1.598 1.028 2.694 0 3.854-2.338 4.703-4.566 4.951.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2.5 text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <img
          src={profile.avatar}
          alt={profile.name}
          className="h-40 w-40 shrink-0 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-48 sm:w-48 dark:ring-slate-900"
        />
      </div>
    </section>
  );
}
