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
  const fallbackSkills = normalizeTextArray(resume?.skills, 10);
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
        href: resume.contact.linkedin.startsWith('http') ?
          resume.contact.linkedin :
          `https://${resume.contact.linkedin}`,
      } :
      null,
    resume?.contact?.github ?
      {
        icon: '\\faGithub',
        value: escapeLatex(resume.contact.github),
        href: resume.contact.github.startsWith('http') ?
          resume.contact.github :
          `https://${resume.contact.github}`,
      } :
      null,
    resume?.contact?.website ?
      {
        icon: '\\faGlobe',
        value: escapeLatex(resume.contact.website),
        href: resume.contact.website.startsWith('http') ?
          resume.contact.website :
          `https://${resume.contact.website}`,
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
      .slice(0, 5),
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
      3,
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
      3,
    ),
    certifications: toLineItems(
      resume?.certifications,
      (entry) => ({
        title: escapeLatex(entry.name),
        subtitle: joinParts([entry.issuer, entry.issueDate]),
        link: escapeLatex(entry.credentialLink),
      }),
      3,
    ),
  };
}

function renderHarshibarHeading(model: LatexResumeModel) {
  const renderedContacts = model.rawContacts
    .map((entry) => {
      if (entry.href) {
        return `${entry.icon} \\hspace{2pt} \\texttt{\\href{${entry.href}}{${entry.value}}}`;
      }

      return `${entry.icon} \\hspace{2pt} \\texttt{${entry.value}}`;
    })
    .join(' \\hspace{1pt} $|$ \\hspace{1pt}\n    ');

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
    ...entries.map((entry) =>
      [
        '    \\resumeSubheading',
        `      {${entry.title.split(' | ')[1] ?? entry.title}}{${entry.meta ?? ''}}`,
        `      {${entry.title.split(' | ')[0] ?? ''}}{}`,
        '      \\resumeItemListStart',
        ...(entry.bullets ?? []).map((bullet) => `        \\resumeItem{${bullet}}`),
        '      \\resumeItemListEnd',
        '',
      ].join('\n'),
    ),
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
        `          {\\textbf{${entry.title}}}{${entry.meta ?? ''}}`,
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
    skills.length ? `     \\textbf{Skills}    {: ${skills.join(', ')}}\\vspace{2pt} \\\\` : '',
    skillGroups.languages.length ?
      `     \\textbf{Languages} {: ${skillGroups.languages.join(', ')}}\\vspace{2pt} \\\\` :
      '',
    skillGroups.tools.length ? `     \\textbf{Tools}     {: ${skillGroups.tools.join(', ')}}` : '',
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
% Author : Harshibar
% Based off of: https://github.com/jakeryang/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage[scale=0.90,lf]{FiraMono}
\\definecolor{light-grey}{gray}{0.83}
\\definecolor{dark-grey}{gray}{0.3}
\\definecolor{text-grey}{gray}{.08}
\\DeclareRobustCommand{\\ebseries}{\\fontseries{eb}\\selectfont}
\\DeclareTextFontCommand{\\texteb}{\\ebseries}
\\usepackage{contour}
\\usepackage[normalem]{ulem}
\\renewcommand{\\ULdepth}{1.8pt}
\\contourlength{0.8pt}
\\newcommand{\\myuline}[1]{%
  \\uline{\\phantom{#1}}%
  \\llap{\\contour{white}{#1}}%
}
\\usepackage{tgheros}
\\renewcommand*\\familydefault{\\sfdefault}
\\usepackage[T1]{fontenc}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
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

\\titleformat {\\section}{
    \\bfseries \\vspace{2pt} \\raggedright \\large
}{}{0em}{}[\\color{light-grey} {\\titlerule[2pt]} \\vspace{-4pt}]

\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-1pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-1pt}\\item
    \\begin{tabular*}{\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & {\\color{dark-grey}\\small #2}\\vspace{1pt}\\\\
      \\textit{#3} & {\\color{dark-grey} \\small #4}\\\\
    \\end{tabular*}\\vspace{-4pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
      #1 & {\\color{dark-grey} #2} \\\\
    \\end{tabular*}\\vspace{-4pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
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
    skillGroups.languages.length ?
      `     \\textbf{Languages}{: ${skillGroups.languages.join(', ')}} \\\\` :
      '',
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
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{}
\\fancyfoot{}
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

\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\pdfgentounicode=1

\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

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

\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

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

function renderList(items: string[]) {
  if (!items.length) {
    return '';
  }

  return [
    '\\begin{itemize}[leftmargin=*, itemsep=2pt, topsep=3pt]',
    ...items.map((item) => `\\item ${item}`),
    '\\end{itemize}',
  ].join('\n');
}

function renderSection(title: string, entries: LatexLineItem[]) {
  if (!entries.length) {
    return '';
  }

  return [
    `\\section*{${title}}`,
    ...entries.map((entry) =>
      [
        '\\noindent',
        `\\textbf{${entry.title}}${entry.meta ? ` \\hfill \\textit{${entry.meta}}` : ''}\\\\`,
        entry.subtitle ? `${entry.subtitle}\\\\` : '',
        entry.link ? `\\href{${entry.link}}{${entry.link}}\\\\` : '',
        renderList(entry.bullets ?? []),
        '\\vspace{3pt}',
      ]
        .filter(Boolean)
        .join('\n'),
    ),
  ].join('\n');
}

function renderSkills(skills: string[]) {
  if (!skills.length) {
    return '';
  }

  return `\\section*{Skills}\n${skills.join(' \\quad|\\quad ')}`;
}

function renderContacts(contacts: string[]) {
  return contacts.join(' \\quad\\textbar\\quad ');
}

function buildSharedDocument(
  model: LatexResumeModel,
  options: {
    accentColor: string;
    headerAfterName?: string;
    nameCommand?: (viewModel: LatexResumeModel) => string;
  },
) {
  const nameBlock =
    options.nameCommand?.(model) ?? [`{\\LARGE \\textbf{${model.fullName}}}\\\\`, model.jobTitle].join('\n');

  return `
\\documentclass[11pt]{article}
\\usepackage[margin=0.7in]{geometry}
\\usepackage[dvipsnames]{xcolor}
\\usepackage[hidelinks]{hyperref}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\pagestyle{empty}
\\setlength{\\parindent}{0pt}
\\titleformat{\\section}{\\large\\bfseries\\color{${options.accentColor}}}{}{0pt}{}[\\titlerule]
\\begin{document}
${nameBlock}
${options.headerAfterName ?? ''}
${renderContacts(model.contacts)}

${model.summary ? `\\section*{Summary}\n${model.summary}` : ''}

${renderSection('Experience', model.experience)}

${renderSection('Education', model.education)}

${renderSkills(model.skills)}

${renderSection('Projects', model.projects)}

${renderSection('Certifications', model.certifications)}
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
    return buildSharedDocument(model, {
      accentColor: 'ForestGreen',
      nameCommand: (viewModel) =>
        [`{\\LARGE \\textbf{${viewModel.fullName}}}\\\\`, `{\\large ${viewModel.jobTitle}}\\\\`, '\\vspace{2pt}'].join(
          '\n',
        ),
    });
  }

  if (templateId === 'overleaf-executive') {
    return buildSharedDocument(model, {
      accentColor: 'BrickRed',
      nameCommand: (viewModel) =>
        [
          `{\\fontsize{22}{24}\\selectfont\\textbf{${viewModel.fullName}}}\\\\`,
          `{\\large\\itshape ${viewModel.jobTitle}}\\\\`,
        ].join('\n'),
    });
  }

  return buildSharedDocument(model, {
    accentColor: 'MidnightBlue',
    headerAfterName: '\\vspace{4pt}\\\\',
  });
}
