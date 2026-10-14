// Local SEO content shared by the page sections and the structured data in seo.ts.

export const SERVICE_AREAS = ['Enumclaw', 'Buckley', 'Auburn', 'Maple Valley', 'Black Diamond'];

export const TRAINING_FAQS: { question: string; answer: string }[] = [
  {
    question: 'Where is Pasture & Paw located?',
    answer: `We are a working family farm in Enumclaw, Washington. We work with dogs and families from ${SERVICE_AREAS.slice(0, -1).join(', ')}, and ${SERVICE_AREAS[SERVICE_AREAS.length - 1]}, and across greater King County.`,
  },
  {
    question: 'How does dog training get started?',
    answer: 'Every program starts with a free phone consultation. You tell us about your dog, where you struggle, and what you want daily life to look like, and we build a custom training plan around it.',
  },
  {
    question: 'Where does the training happen?',
    answer: 'Right on the farm. Dogs practice around cattle, goats, open fields, and daily chores, which builds focus and impulse control that holds up at home, on walks, and on the trail.',
  },
  {
    question: 'What kinds of problems can you help with?',
    answer: 'Leash pulling, unreliable recall, reactivity and anxiety, household manners like jumping and door bolting, socialization and confidence, and advanced off-leash obedience.',
  },
  {
    question: 'Do you work with puppies?',
    answer: 'Yes. Puppies and timid dogs get thoughtful, structured exposure to new sights, sounds, footing, and friendly farm animals to build lasting confidence.',
  },
  {
    question: 'Do you offer dog boarding?',
    answer: 'Yes. Farm boarding is available for overnight stays, extended trips, and recurring weekly schedules, with care from the same experienced trainers. See our dog boarding page for details.',
  },
  {
    question: 'How do I book?',
    answer: 'Use the booking form on our contact page to pick a service and a preferred date and time. We will reply by email to confirm the details.',
  },
];

export const BOARDING_FAQS: { question: string; answer: string }[] = [
  {
    question: 'Where is your dog boarding located?',
    answer: `On our working family farm in Enumclaw, Washington. Families board with us from ${SERVICE_AREAS.slice(0, -1).join(', ')}, and ${SERVICE_AREAS[SERVICE_AREAS.length - 1]}, and across greater King County.`,
  },
  {
    question: 'What kinds of stays do you offer?',
    answer: 'Overnight stays, extended trips, and recurring weekly schedules.',
  },
  {
    question: 'Who takes care of my dog?',
    answer: 'Every boarding dog is watched and handled directly by experienced, professional trainers, not temporary kennel staff.',
  },
  {
    question: 'Where do boarding dogs sleep?',
    answer: 'In spacious, clean indoor runs with natural light, heating, and cooling. No stacked wire crates or concrete warehouse cages.',
  },
  {
    question: 'How much exercise will my dog get?',
    answer: 'Multiple outdoor sessions every day on open farm pastures, with structured exercise, fresh air, and mental enrichment on the acreage.',
  },
  {
    question: 'How many dogs do you board at once?',
    answer: 'We keep our guest count small on purpose so every dog gets personal attention, quiet rest, and a calm, low-stress stay.',
  },
  {
    question: 'How do I reserve a stay?',
    answer: 'Use the booking form on our contact page, choose Farm Boarding, and pick your preferred dates. We will reply by email to confirm.',
  },
];
