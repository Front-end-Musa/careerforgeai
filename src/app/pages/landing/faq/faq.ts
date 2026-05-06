import { Component } from '@angular/core';
import { QA } from './faq.interface';
import { QaItem } from './qa-item/qa-item';

@Component({
  selector: 'app-faq',
  imports: [QaItem],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  qa: QA[] = [
    {
      question: 'Will my resume be ATS-friendly?',
      answer:
        'The app includes ATS-friendly templates and a simple template option built for cleaner parsing. You should still review each export against the job description before applying.',
    },
    {
      question: 'Can I edit my AI-generated resume?',
      answer:
        'Yes. Generated resume content opens in the editor, where you can adjust sections, wording, templates, and formatting.',
    },
    {
      question: 'Does ResumeCrafts AI help with cover letters?',
      answer:
        'Yes. You can generate a cover letter by providing a resume, job description, company name, position, and your preferred tone.',
    },
    {
      question: 'How many templates are available?',
      answer:
        'The current template catalog has 11 options: 3 free templates, 5 Pro templates, and 3 Premium templates.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes. Paid users can manage their subscription from account settings through the billing portal.',
    },
  ];
}
