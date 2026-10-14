import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const sections: { heading: string; body: string[] }[] = [
  {
    heading: 'What we collect',
    body: [
      'When you send a request through our booking form, we receive the details you enter: your name, email address, phone number, the service you are interested in, your preferred date and time, information about your dog or group, and any notes you include.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use this information only to reply to your request and to arrange training, boarding, or a farm visit with you. We do not sell, rent, or share your information for marketing.',
      'Booking requests are delivered to our email inbox through Web3Forms, a form delivery service.',
    ],
  },
  {
    heading: 'Site analytics',
    body: [
      'We use Vercel Web Analytics and Speed Insights to understand how the site is used and how quickly pages load. These tools collect anonymous, aggregated information such as pages visited, the referring website, device type, and country. They do not use cookies and do not identify you personally.',
    ],
  },
  {
    heading: 'Links to other sites',
    body: [
      'Our site links to our Instagram account. Instagram has its own privacy policy that applies when you visit it.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      'If you would like us to update or delete information you sent us, email mak@pasturepaw.com and we will take care of it.',
    ],
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors py-3 -mt-3 mb-9">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-4">Privacy Policy</h1>
        <p className="text-teal-900/60 font-medium mb-12">Last updated October 14, 2026</p>
        <p className="text-xl text-teal-900/80 font-medium leading-relaxed mb-12">
          Pasture &amp; Paw respects your privacy. This page explains what information we collect through pasturepaw.com and how we use it.
        </p>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-3xl font-bold text-teal-900 mb-4">{section.heading}</h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-teal-900/80 font-medium leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
