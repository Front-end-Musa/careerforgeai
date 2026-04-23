import { Resume } from '../../../../core/interfaces/resumes.interface';

type LatexLineItem = {
  title: string;
  subtitle?: string;
  meta?: string;
  link?: string;
  bullets?: string[];
};

type LatexResumeModel = {
  fullName: string;
  jobTitle: string;
  summary: string;
  contacts: string[];
  rawContacts: Array<{ icon: string; value: string; href?: string }>;
  skills: string[];
  skillGroups: {
    languages: string[];
    tools: string[];
  };
  experience: LatexLineItem[];
  education: LatexLineItem[];
  projects: LatexLineItem[];
  certifications: LatexLineItem[];
};

function escapeLatex(value?: string | null) {
  if (!value) {
    return '';
  }

  return value
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([{}%$#&_])/g, '\\$1')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/~/g, '\\textasciitilde{}');
}

function toHref(value?: string | null) {
  if (!value?.trim()) {
    return undefined;
  }

  return value.startsWith('http') || value.startsWith('mailto:') ? value : `https://${value}`;
}

function normalizeTextArray(value: unknown, limit: number) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((entry): entry is string => typeof entry === 'string')
    .map((entry) => escapeLatex(entry.trim()))
    .filter(Boolean)
    .slice(0, limit);
}

function joinParts(parts: Array<string | undefined | null>, separator = ' | ') {
  return parts.map((part) => escapeLatex(part)).filter(Boolean).join(separator);
}

function formatDateRange(startDate?: string, endDate?: string) {
  const normalizedStart = escapeLatex(startDate);
  const normalizedEnd = escapeLatex(endDate);

  if (normalizedStart && normalizedEnd) {
    return `${normalizedStart} -- ${normalizedEnd}`;
  }

  return normalizedStart || normalizedEnd;
}

function toLineItems<T>(entries: T[] | undefined, mapper: (entry: T) => LatexLineItem, limit = 4) {
  return (entries ?? []).map(mapper).filter((entry) => Boolean(entry.title)).slice(0, limit);
}

function mapResumeToLatexModel(resume?: Partial<Resume>): LatexResumeModel {
  const fallbackSkills = normalizeTextArray(resume?.skills, 12);
  const groupedLanguages = normalizeTextArray(resume?.skillGroups?.languages, 10);
  const groupedTools = normalizeTextArray(resume?.skillGroups?.tools, 10);

  const rawContacts = [
    resume?.contact?.phone ?
      {
        icon: '\\faPhone*',
        value: escapeLatex(resume.contact.phone),
      } :
      null,
    resume?.contact?.email ?
      {
        icon: '\\faEnvelope',
        value: escapeLatex(resume.contact.email),
        href: `mailto:${resume.contact.email}`,
      } :
      null,
    resume?.contact?.linkedin ?
      {
        icon: '\\faLinkedin',
        value: escapeLatex(resume.contact.linkedin),
        href: toHref(resume.contact.linkedin),
      } :
      null,
    resume?.contact?.github ?
      {
        icon: '\\faGithub',
        value: escapeLatex(resume.contact.github),
        href: toHref(resume.contact.github),
      } :
      null,
    resume?.contact?.website ?
      {
        icon: '\\faGlobe',
        value: escapeLatex(resume.contact.website),
        href: toHref(resume.contact.website),
      } :
      null,
    resume?.contact?.location ?
      {
        icon: '\\faMapMarker*',
        value: escapeLatex(resume.contact.location),
      } :
      null,
  ].filter((entry): entry is { icon: string; value: string; href?: string } => Boolean(entry));

  return {
    fullName: escapeLatex(resume?.personalInfo?.fullName || 'Resume Candidate'),
    jobTitle: escapeLatex(resume?.personalInfo?.jobTitle || 'Professional'),
    summary: escapeLatex(resume?.summary || ''),
    contacts: [
      resume?.contact?.email,
      resume?.contact?.phone,
      resume?.contact?.location,
      resume?.contact?.linkedin,
      resume?.contact?.github,
      resume?.contact?.website,
    ]
      .map((value) => escapeLatex(value))
      .filter(Boolean)
      .slice(0, 6),
    rawContacts,
    skills: fallbackSkills,
    skillGroups: {
      languages: groupedLanguages,
      tools: groupedTools,
    },
    experience: toLineItems(resume?.experience, (entry) => ({
      title: joinParts([entry.role, entry.company]),
      meta: formatDateRange(entry.startDate, entry.endDate),
      bullets: normalizeTextArray(entry.description, 4),
    })),
    education: toLineItems(
      resume?.education,
      (entry) => ({
        title: escapeLatex(entry.school),
        subtitle: escapeLatex(entry.degree),
        meta: formatDateRange(entry.startDate, entry.endDate),
        bullets: normalizeTextArray(entry.description, 2),
      }),
      4,
    ),
    projects: toLineItems(
      resume?.projects,
      (entry) => ({
        title: escapeLatex(entry.name),
        subtitle: escapeLatex(entry.role),
        link: escapeLatex(entry.link),
        bullets: normalizeTextArray(
          Array.isArray(entry.description) ? entry.description : `${entry.description ?? ''}`.split(/\n+/),
          3,
        ),
      }),
      4,
    ),
    certifications: toLineItems(
      resume?.certifications,
      (entry) => ({
        title: escapeLatex(entry.name),
        subtitle: joinParts([entry.issuer, entry.issueDate], ' | '),
        link: escapeLatex(entry.credentialLink),
      }),
      4,
    ),
  };
}

function renderLinkedContact(entry: { icon: string; value: string; href?: string }) {
  if (entry.href) {
    return `${entry.icon} \\hspace{2pt} \\texttt{\\href{${entry.href}}{${entry.value}}}`;
  }

  return `${entry.icon} \\hspace{2pt} \\texttt{${entry.value}}`;
}

function renderHarshibarHeading(model: LatexResumeModel) {
  const renderedContacts = model.rawContacts.map((entry) => renderLinkedContact(entry)).join(
    ' \\hspace{1pt} $|$ \\hspace{1pt}\n    ',
  );

  return [
    '\\begin{center}',
    `    \\textbf{\\Huge ${model.fullName}} \\\\ \\vspace{5pt}`,
    renderedContacts ? `    \\small ${renderedContacts}` : '',
    '    \\\\ \\vspace{-3pt}',
    '\\end{center}',
  ]
    .filter(Boolean)
    .join('\n');
}

function renderHarshibarExperience(entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    '\\section{EXPERIENCE}',
    '  \\resumeSubHeadingListStart',
    ...entries.map((entry) => {
      const [role = '', company = entry.title] = entry.title.split(' | ');

      return [
        '    \\resumeSubheading',
        `      {${company}}{${entry.meta ?? ''}}`,
        `      {${role}}{}`,
        '      \\resumeItemListStart',
        ...(entry.bullets ?? []).map((bullet) => `        \\resumeItem{${bullet}}`),
        '      \\resumeItemListEnd',
        '',
      ].join('\n');
    }),
    '  \\resumeSubHeadingListEnd',
  ].join('\n');
}

function renderHarshibarProjects(entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    '\\section{PROJECTS}',
    '    \\resumeSubHeadingListStart',
    ...entries.map((entry) =>
      [
        '      \\resumeProjectHeading',
        `          {\\textbf{${entry.title}}}{${entry.subtitle ?? ''}}`,
        '          \\resumeItemListStart',
        ...(entry.bullets ?? []).map((bullet) => `            \\resumeItem{${bullet}}`),
        '          \\resumeItemListEnd',
        '',
      ].join('\n'),
    ),
    '    \\resumeSubHeadingListEnd',
  ].join('\n');
}

function renderHarshibarEducation(entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    '\\section {EDUCATION}',
    '  \\resumeSubHeadingListStart',
    ...entries.map((entry) =>
      [
        '    \\resumeSubheading',
        `      {${entry.title}}{${entry.meta ?? ''}}`,
        `      {${entry.subtitle ?? ''}}{}`,
        '      \\resumeItemListStart',
        ...(entry.bullets ?? []).map((bullet) => `        \\resumeItem{${bullet}}`),
        '      \\resumeItemListEnd',
      ].join('\n'),
    ),
    '  \\resumeSubHeadingListEnd',
  ].join('\n');
}

function renderHarshibarSkills(skills: string[], skillGroups: LatexResumeModel['skillGroups']) {
  if (!skills.length && !skillGroups.languages.length && !skillGroups.tools.length) {
    return '';
  }

  return [
    '\\section{SKILLS}',
    ' \\begin{itemize}[leftmargin=0in, label={}]',
    '    \\small{\\item{',
    skills.length ? `     \\textbf{Skills} {: ${skills.join(', ')}}\\vspace{2pt} \\\\` : '',
    skillGroups.languages.length ?
      `     \\textbf{Languages} {: ${skillGroups.languages.join(', ')}}\\vspace{2pt} \\\\` :
      '',
    skillGroups.tools.length ? `     \\textbf{Tools} {: ${skillGroups.tools.join(', ')}}` : '',
    '    }}',
    ' \\end{itemize}',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildHarshibarTemplate(model: LatexResumeModel) {
  return `
%-------------------------
% Resume in Latex
% Style : Compact Overleaf-inspired
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage[scale=0.90,lf]{FiraMono}
\\usepackage{tgheros}
\\renewcommand*\\familydefault{\\sfdefault}
\\usepackage[T1]{fontenc}

\\definecolor{light-grey}{gray}{0.83}
\\definecolor{dark-grey}{gray}{0.3}
\\definecolor{text-grey}{gray}{.08}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{0in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

\\titleformat{\\section}{\\bfseries\\large}{}{0em}{}[\\color{light-grey}{\\titlerule[2pt]}\\vspace{-4pt}]

\\newcommand{\\resumeItem}[1]{\\item\\small{{#1 \\vspace{-1pt}}}}
\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & {\\color{dark-grey}\\small #2}\\\\
      \\textit{#3} & {\\color{dark-grey}\\small #4}\\\\
    \\end{tabular*}\\vspace{-4pt}
}
\\newcommand{\\resumeProjectHeading}[2]{
  \\item
  \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
    #1 & {\\color{dark-grey} #2} \\\\
  \\end{tabular*}\\vspace{-4pt}
}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{0pt}}

\\color{text-grey}

\\begin{document}

${renderHarshibarHeading(model)}

${model.summary ? `\\section{SUMMARY}\n${model.summary}` : ''}

${renderHarshibarExperience(model.experience)}

${renderHarshibarProjects(model.projects)}

${renderHarshibarEducation(model.education)}

${renderHarshibarSkills(model.skills, model.skillGroups)}

\\end{document}`.trim();
}

function renderJakeHeading(model: LatexResumeModel) {
  const renderedContacts = model.rawContacts
    .map((entry) => {
      if (entry.href) {
        return `\\href{${entry.href}}{\\underline{${entry.value}}}`;
      }

      return entry.value;
    })
    .join(' $|$ ');

  return [
    '\\begin{center}',
    `    \\textbf{\\Huge \\scshape ${model.fullName}} \\\\ \\vspace{1pt}`,
    renderedContacts ? `    \\small ${renderedContacts}` : '',
    '\\end{center}',
  ]
    .filter(Boolean)
    .join('\n');
}

function renderJakeEducation(entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    '\\section{Education}',
    '  \\resumeSubHeadingListStart',
    ...entries.map((entry) =>
      [
        '    \\resumeSubheading',
        `      {${entry.title}}{${entry.meta ?? ''}}`,
        `      {${entry.subtitle ?? ''}}{}`,
      ].join('\n'),
    ),
    '  \\resumeSubHeadingListEnd',
  ].join('\n');
}

function renderJakeExperience(entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    '\\section{Experience}',
    '  \\resumeSubHeadingListStart',
    ...entries.map((entry) => {
      const [role = entry.title, company = ''] = entry.title.split(' | ');

      return [
        '    \\resumeSubheading',
        `      {${role}}{${entry.meta ?? ''}}`,
        `      {${company}}{}`,
        '      \\resumeItemListStart',
        ...(entry.bullets ?? []).map((bullet) => `        \\resumeItem{${bullet}}`),
        '      \\resumeItemListEnd',
      ].join('\n');
    }),
    '  \\resumeSubHeadingListEnd',
  ].join('\n');
}

function renderJakeProjects(entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    '\\section{Projects}',
    '    \\resumeSubHeadingListStart',
    ...entries.map((entry) => {
      const projectMeta = [entry.subtitle, entry.link].filter(Boolean).join(', ');

      return [
        '      \\resumeProjectHeading',
        `          {\\textbf{${entry.title}}${projectMeta ? ` $|$ \\emph{${projectMeta}}` : ''}}{${entry.meta ?? ''}}`,
        '          \\resumeItemListStart',
        ...(entry.bullets ?? []).map((bullet) => `            \\resumeItem{${bullet}}`),
        '          \\resumeItemListEnd',
      ].join('\n');
    }),
    '    \\resumeSubHeadingListEnd',
  ].join('\n');
}

function renderJakeSkills(skills: string[], skillGroups: LatexResumeModel['skillGroups']) {
  if (!skills.length && !skillGroups.languages.length && !skillGroups.tools.length) {
    return '';
  }

  return [
    '\\section{Technical Skills}',
    ' \\begin{itemize}[leftmargin=0.15in, label={}]',
    '    \\small{\\item{',
    skillGroups.languages.length ? `     \\textbf{Languages}{: ${skillGroups.languages.join(', ')}} \\\\` : '',
    skillGroups.tools.length ? `     \\textbf{Developer Tools}{: ${skillGroups.tools.join(', ')}} \\\\` : '',
    skills.length ? `     \\textbf{Frameworks \\& Libraries}{: ${skills.join(', ')}}` : '',
    '    }}',
    ' \\end{itemize}',
  ]
    .filter(Boolean)
    .join('\n');
}

function buildJakeTemplate(model: LatexResumeModel) {
  return `
%-------------------------
% Resume in Latex
% Style : Jake Gutierrez inspired
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}
\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}
\\pdfgentounicode=1

\\titleformat{\\section}{\\vspace{-4pt}\\scshape\\raggedright\\large}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\newcommand{\\resumeItem}[1]{\\item\\small{{#1 \\vspace{-2pt}}}}
\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & #2 \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}
\\newcommand{\\resumeProjectHeading}[2]{
  \\item
  \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\small#1 & #2 \\\\
  \\end{tabular*}\\vspace{-7pt}
}
\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

\\begin{document}

${renderJakeHeading(model)}

${renderJakeEducation(model.education)}

${renderJakeExperience(model.experience)}

${renderJakeProjects(model.projects)}

${renderJakeSkills(model.skills, model.skillGroups)}

\\end{document}`.trim();
}

function renderItemizedBullets(bullets: string[], options?: { leftMargin?: string; itemSep?: string }) {
  if (!bullets.length) {
    return '';
  }

  return [
    `\\begin{itemize}[leftmargin=${options?.leftMargin ?? '1.2em'}, itemsep=${options?.itemSep ?? '2pt'}, topsep=3pt]`,
    ...bullets.map((bullet) => `  \\item ${bullet}`),
    '\\end{itemize}',
  ].join('\n');
}

function renderAcademicContacts(model: LatexResumeModel) {
  return model.rawContacts
    .map((entry) => {
      if (entry.href) {
        return `\\href{${entry.href}}{${entry.value}}`;
      }

      return entry.value;
    })
    .join(' \\quad\\textbar\\quad ');
}

function renderAcademicSection(title: string, entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    `\\section*{${title}}`,
    ...entries.map((entry) =>
      [
        '\\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}',
        `  \\textbf{${entry.title}} & ${entry.meta ?? ''} \\\\`,
        entry.subtitle ? `  \\textit{${entry.subtitle}} & \\\\` : '',
        '\\end{tabular*}',
        entry.link ? `\\textit{${entry.link}}\\\\` : '',
        renderItemizedBullets(entry.bullets ?? [], { leftMargin: '1.35em', itemSep: '2pt' }),
        '\\vspace{4pt}',
      ]
        .filter(Boolean)
        .join('\n'),
    ),
  ].join('\n');
}

function renderAcademicSkills(model: LatexResumeModel) {
  const lines = [
    model.skills.length ? `\\textbf{Core Areas}: ${model.skills.join(', ')}` : '',
    model.skillGroups.languages.length ?
      `\\textbf{Languages}: ${model.skillGroups.languages.join(', ')}` :
      '',
    model.skillGroups.tools.length ? `\\textbf{Tools}: ${model.skillGroups.tools.join(', ')}` : '',
  ].filter(Boolean);

  if (!lines.length) {
    return '';
  }

  return ['\\section*{Capabilities}', ...lines.map((line) => `${line}\\\\`)].join('\n');
}

function buildAcademicTemplate(model: LatexResumeModel) {
  return `
%-------------------------
% Resume in Latex
% Style : Academic Overleaf-inspired
%------------------------

\\documentclass[11pt]{article}
\\usepackage[margin=0.78in]{geometry}
\\usepackage[dvipsnames]{xcolor}
\\usepackage[hidelinks]{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{tabularx}
\\usepackage{setspace}
\\pagestyle{empty}
\\setlength{\\parindent}{0pt}
\\definecolor{academicblue}{HTML}{264653}
\\definecolor{academicmuted}{HTML}{5B7184}
\\titleformat{\\section}{\\large\\bfseries\\color{academicblue}}{}{0pt}{}[\\titlerule]
\\begin{document}
{\\color{academicblue}\\rule{\\textwidth}{1.2pt}}\\\\[10pt]
{\\LARGE \\textbf{${model.fullName}}}\\\\
{\\large ${model.jobTitle}}\\\\[4pt]
{\\small ${renderAcademicContacts(model)}}\\\\[8pt]

${model.summary ? `\\section*{Research Profile}\n\\setstretch{1.08}${model.summary}\n\\setstretch{1}` : ''}

${renderAcademicSection('Academic Appointments', model.experience)}

${renderAcademicSection('Education', model.education)}

${renderAcademicSection('Selected Projects', model.projects)}

${renderAcademicSection('Certifications', model.certifications)}

${renderAcademicSkills(model)}
\\end{document}`.trim();
}

function renderExecutiveContacts(model: LatexResumeModel) {
  return model.contacts.join(' \\quad\\bullet\\quad ');
}

function renderExecutiveHighlights(model: LatexResumeModel) {
  const highlights = model.experience.flatMap((entry) => entry.bullets ?? []).slice(0, 3);

  if (!highlights.length) {
    return '';
  }

  return [
    '\\section*{Selected Wins}',
    '\\begin{tabularx}{\\textwidth}{X X X}',
    ...highlights.map((highlight, index) => {
      const suffix = index === highlights.length - 1 ? '' : ' &';
      return `\\fbox{\\parbox[t][2.4cm][t]{0.29\\textwidth}{\\raggedright \\small ${highlight}}}${suffix}`;
    }),
    '\\end{tabularx}',
  ].join('\n');
}

function renderExecutiveSection(title: string, entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    `\\section*{${title}}`,
    ...entries.map((entry) => {
      const [role = entry.title, company = ''] = entry.title.split(' | ');

      return [
        '\\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}',
        `  \\textbf{${role}} & ${entry.meta ?? ''} \\\\`,
        company ? `  \\textsc{${company}} & \\\\` : '',
        '\\end{tabular*}',
        entry.subtitle ? `\\textit{${entry.subtitle}}\\\\` : '',
        renderItemizedBullets(entry.bullets ?? [], { leftMargin: '1.35em', itemSep: '3pt' }),
        '\\vspace{5pt}',
      ]
        .filter(Boolean)
        .join('\n');
    }),
  ].join('\n');
}

function renderExecutiveProfile(model: LatexResumeModel) {
  const profileLines = [
    model.skills.length ? `\\textbf{Leadership Areas}: ${model.skills.join(', ')}` : '',
    model.skillGroups.languages.length ?
      `\\textbf{Languages}: ${model.skillGroups.languages.join(', ')}` :
      '',
    model.skillGroups.tools.length ? `\\textbf{Operating Tools}: ${model.skillGroups.tools.join(', ')}` : '',
    model.certifications.length ?
      `\\textbf{Credentials}: ${model.certifications.map((entry) => entry.title).join(', ')}` :
      '',
  ].filter(Boolean);

  if (!profileLines.length) {
    return '';
  }

  return [
    '\\section*{Board-Ready Profile}',
    '\\begin{minipage}[t]{0.48\\textwidth}',
    profileLines.slice(0, Math.ceil(profileLines.length / 2)).map((line) => `${line}\\\\`).join('\n'),
    '\\end{minipage}\\hfill',
    '\\begin{minipage}[t]{0.48\\textwidth}',
    profileLines.slice(Math.ceil(profileLines.length / 2)).map((line) => `${line}\\\\`).join('\n'),
    '\\end{minipage}',
  ].join('\n');
}

function buildExecutiveTemplate(model: LatexResumeModel) {
  return `
%-------------------------
% Resume in Latex
% Style : Executive Overleaf-inspired
%------------------------

\\documentclass[11pt]{article}
\\usepackage[margin=0.72in]{geometry}
\\usepackage[dvipsnames]{xcolor}
\\usepackage[hidelinks]{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{tabularx}
\\pagestyle{empty}
\\setlength{\\parindent}{0pt}
\\definecolor{executivebrown}{HTML}{5B3A28}
\\definecolor{executivegold}{HTML}{A56B3F}
\\titleformat{\\section}{\\large\\bfseries\\color{executivebrown}}{}{0pt}{}[\\color{executivegold}\\titlerule]
\\begin{document}
{\\color{executivegold}\\rule{\\textwidth}{1.4pt}}\\\\[10pt]
{\\fontsize{24}{26}\\selectfont\\textbf{${model.fullName}}}\\\\
{\\large\\itshape ${model.jobTitle}}\\\\[4pt]
{\\small ${renderExecutiveContacts(model)}}\\\\[10pt]

${model.summary ? `\\fcolorbox{executivegold}{executivegold!8}{\\parbox{0.97\\textwidth}{\\small ${model.summary}}}\\\\[12pt]` : ''}

${renderExecutiveHighlights(model)}

${renderExecutiveSection('Executive Experience', model.experience)}

${renderExecutiveSection('Education', model.education)}

${renderExecutiveProfile(model)}
\\end{document}`.trim();
}

export function buildLatexPreviewSource(templateId: string, resume?: Partial<Resume>) {
  const model = mapResumeToLatexModel(resume);

  if (templateId === 'overleaf-compact') {
    return buildHarshibarTemplate(model);
  }

  if (templateId === 'overleaf-jake') {
    return buildJakeTemplate(model);
  }

  if (templateId === 'overleaf-academic') {
    return buildAcademicTemplate(model);
  }

  if (templateId === 'overleaf-executive') {
    return buildExecutiveTemplate(model);
  }

  return buildJakeTemplate(model);
}
