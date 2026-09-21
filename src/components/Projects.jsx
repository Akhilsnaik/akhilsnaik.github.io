import Section from './Section.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-xl border border-slate-200 p-5 transition hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{project.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm font-medium">
              <a href={project.link} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                Live site ↗
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="text-slate-600 hover:underline dark:text-slate-400"
              >
                Source ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
