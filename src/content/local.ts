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
    answer: 'Yes. Farm boarding is available for overnight stays, extended trips, and recurring weekly schedules. Boarding dogs are cared for directly by experienced trainers, get daily outdoor time on open pasture, and stay in clean indoor runs with natural light, heating, and cooling. We keep our guest count small so every dog gets personal attention.',
  },
  {
    question: 'How do I book?',
    answer: 'Use the booking form on our contact page to pick a service and a preferred date and time. We will reply by email to confirm the details.',
  },
];
