import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_AREAS } from '../content/local';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

export default function AreasServed() {
  return (
    <section className="bg-cream py-24 border-t-4 border-teal-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex p-3 bg-sage rounded-xl border-2 border-teal-900 mb-6 shadow-[4px_4px_0px_0px_#0B3B3C]">
            <MapPin className="h-7 w-7 text-teal-900" />
          </div>
          <h2 className="font-display text-5xl font-bold text-teal-900 mb-4">Areas We Serve</h2>
          <p className="text-xl text-teal-900/70 font-medium max-w-2xl mx-auto mb-10">
            Pasture &amp; Paw is based on our working farm in Enumclaw, Washington. We offer dog training and farm boarding for families across the Plateau and greater King County.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mb-12">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                className="px-6 py-3 bg-sage-light rounded-2xl border-2 border-teal-900 font-bold text-lg text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]"
              >
                {area}, WA
              </li>
            ))}
            <li className="px-6 py-3 bg-cream rounded-2xl border-2 border-dashed border-teal-900/50 font-bold text-lg text-teal-900/80">
              Greater King County
            </li>
          </ul>
          <Link to="/contact" className={btnPrimary}>
            Book a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
