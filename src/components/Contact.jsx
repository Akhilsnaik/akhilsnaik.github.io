import { profile } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 text-center">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
        Let's talk
      </h2>
      <p className="mx-auto mt-3 max-w-md text-base text-slate-600 dark:text-slate-400">
        Open to interesting conversations, collaborations, or just saying hi. Reach out any time.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
      >
        {profile.email}
      </a>
      <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-400">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
          GitHub
        </a>
        <span aria-hidden="true">·</span>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
          LinkedIn
        </a>
        <span aria-hidden="true">·</span>
        <a href={profile.twitter} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
          X
        </a>
        <span aria-hidden="true">·</span>
        <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
          Instagram
        </a>
      </div>
    </section>
  );
}
