import Section from './Section.jsx';
import { about, education } from '../data.js';

function renderWithBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-slate-900 dark:text-white">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{renderWithBold(paragraph)}</p>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Education
        </p>
        <p className="mt-2 font-semibold text-slate-900 dark:text-white">{education.degree}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{education.school}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">
          {education.duration} · {education.detail}
        </p>
      </div>
    </Section>
  );
}
