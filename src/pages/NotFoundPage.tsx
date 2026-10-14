import { Link } from 'react-router-dom';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";
const btnSecondary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-cream text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-5xl font-bold text-teal-900 mb-6">Page Not Found</h1>
        <p className="text-xl text-teal-900/80 font-medium mb-8">
          This trail doesn't lead anywhere. Let's get you back to the farm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className={btnPrimary}>Back to Home</Link>
          <Link to="/training" className={btnSecondary}>Dog Training</Link>
        </div>
      </div>
    </div>
  );
}
