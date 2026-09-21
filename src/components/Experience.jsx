import Section from './Section.jsx';
import { experience, openSource } from '../data.js';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-accent dark:border-slate-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-slate-900 dark:text-white">{job.role}</h3>
              <span className="text-sm text-slate-500 dark:text-slate-500">{job.duration}</span>
            </div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{job.company}</p>
            <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {job.points.map((point) => (
                <li key={point.slice(0, 24)} className="list-disc pl-1 marker:text-slate-400 ml-4">
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10 rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Open Source
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {openSource.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500"
            >
              <span className="font-medium">{project.name}</span>
              <span className="text-xs text-slate-400">{project.role}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
