import { profile } from '../data.js';
import SocialLinks from './SocialLinks.jsx';

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
            <SocialLinks />
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
