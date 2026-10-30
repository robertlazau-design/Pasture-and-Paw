import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Moon, Home, Sun, Shield, Heart, Dog, Plus, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Picture from '../components/Picture';
import { useEffect } from 'react';
import AreasServed from '../components/AreasServed';
import { BOARDING_FAQS } from '../content/local';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";
const btnSecondary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-cream text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const boardingFeatures = [
  { icon: Home, title: 'Farm-Style Accommodations', description: 'Spacious, clean indoor runs with natural light, heating, and cooling. No stacked wire crates or concrete warehouse cages.' },
  { icon: Sun, title: 'Daily Structured Activity', description: 'Multiple outdoor sessions every day on open farm pastures. Dogs get genuine exercise, fresh air, and enrichment.' },
  { icon: Shield, title: 'Experienced Trainer Care', description: 'Every boarding dog is watched and handled directly by professional trainers who understand dog behavior, body language, and daily care.' },
  { icon: Heart, title: 'Small Capacity', description: 'We limit our guest count so every dog gets personal attention, quiet rest, and a calm, low-stress stay.' },
];

export default function BoardingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <Link to="/training" className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors py-3 -mt-3 mb-9">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Training
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-clay rounded-xl border-2 border-teal-900 mb-6 shadow-[4px_4px_0px_0px_#0B3B3C]">
              <Moon className="h-8 w-8 text-cream" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-teal-900 mb-6 leading-tight">
              Farm Dog <br/>
              <span className="text-sage">Boarding</span>
            </h1>
            <p className="text-2xl text-teal-900/80 font-medium mb-4 leading-relaxed">
              A safe, engaging place for your dog while you are away, on a working farm in Enumclaw, WA.
            </p>
            <p className="text-lg text-teal-900/70 font-medium mb-8 leading-relaxed">
              Unlike commercial kennel warehouses, dogs staying with us enjoy fresh country air, large outdoor turnouts, and quiet rest.
            </p>
            <Link to="/contact?service=boarding" className={btnPrimary}>
              Inquire About Boarding
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            {/* Holiday notice: remove after the new year */}
            <div className="mt-8 flex items-start gap-4 bg-sage-light rounded-2xl border-2 border-teal-900 p-5 shadow-[4px_4px_0px_0px_#0B3B3C]">
              <div className="p-2 bg-clay rounded-lg border-2 border-teal-900 shrink-0">
                <Calendar className="h-5 w-5 text-cream" />
              </div>
              <p className="text-teal-900 font-medium leading-relaxed">
                <span className="font-bold">Now booking Thanksgiving and Christmas stays.</span> We keep our guest count small, so holiday dates fill early.{' '}
                <Link to="/contact?service=boarding" className="font-bold underline underline-offset-4 decoration-2 hover:text-sage">Request your dates</Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] bg-clay">
              <Picture
                src="/images/boarding.jpg"
                alt="Dogs resting calmly in the clean, spacious farm boarding kennel at Pasture & Paw"
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Care Section */}
      <section className="relative overflow-hidden">
        <div className="w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,235.9,88.94,278.43,73.5,321.39,56.44Z" className="fill-teal-950"></path>
          </svg>
        </div>

        <div className="bg-teal-950 text-cream py-24 relative">
          <div className="absolute bottom-6 right-6 w-96 h-96 opacity-10 pointer-events-none select-none">
            <img src="/images/logo-light.png" alt="" loading="lazy" className="w-full h-full object-contain -rotate-12" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Cared For by Trainers, Not Kennel Staff</h2>
              <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
                <p>
                  Our boarding dogs are cared for directly by experienced trainers rather than temporary kennel staff. Your dog gets structured daily exercise, mental enrichment on the acreage, and attentive care in a peaceful setting.
                </p>
                <p className="text-sage font-bold">
                  Available for overnight stays, extended trips, and recurring weekly schedules.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {boardingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-teal-900 rounded-2xl p-8 border-2 border-teal-800 flex items-start gap-6"
                >
                  <div className="p-3 bg-sage rounded-xl border-2 border-teal-900 shrink-0">
                    <feature.icon className="h-7 w-7 text-teal-900" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-cream mb-2">{feature.title}</h3>
                    <p className="text-cream/70 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training cross-link */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-sage-light rounded-[2rem] p-8 md:p-12 border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C] flex flex-col md:flex-row items-start md:items-center gap-8"
        >
          <div className="p-3 bg-clay rounded-xl border-2 border-teal-900 shrink-0 shadow-[4px_4px_0px_0px_#0B3B3C]">
            <Dog className="h-8 w-8 text-cream" />
          </div>
          <div className="flex-1">
            <h2 className="font-display font-bold text-3xl text-teal-900 mb-2">Working on Manners Too?</h2>
            <p className="text-teal-900/80 text-lg font-medium leading-relaxed">
              Our Canine Academy offers personalized, real-world training on the farm, from leash manners and recall to reactivity and puppy socialization.
            </p>
          </div>
          <Link to="/training" className={btnSecondary}>
            Dog Training
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* New boarding home */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-cream rounded-[2rem] p-8 md:p-12 border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C]"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-teal-900 mb-4">Looking for a New Boarding Home Near Enumclaw?</h2>
          <p className="text-teal-900/80 text-lg font-medium leading-relaxed mb-4">
            If the place your dog has stayed for years is closing or booked up, we would love to meet your dog. Boarding here means a quiet farm, daily time on open pasture, and care from experienced trainers.
          </p>
          <p className="text-teal-900/80 text-lg font-medium leading-relaxed mb-8">
            Send us your dog's details and your travel dates, and we will reply to plan the first stay.
          </p>
          <Link to="/contact?service=boarding" className={btnPrimary}>
            Tell Us About Your Dog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold text-teal-900 mb-4">Boarding Questions</h2>
          <p className="text-xl text-teal-900/70 font-medium max-w-2xl mx-auto">
            What to expect when your dog stays with us.
          </p>
        </div>
        <div className="space-y-4">
          {BOARDING_FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group bg-cream rounded-2xl border-4 border-teal-900 shadow-[6px_6px_0px_0px_#0B3B3C] open:bg-sage-light transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 md:p-8 font-display font-bold text-xl md:text-2xl text-teal-900 [&::-webkit-details-marker]:hidden">
                <h3>{faq.question}</h3>
                <span className="shrink-0 w-9 h-9 rounded-xl border-2 border-teal-900 bg-sage flex items-center justify-center" aria-hidden="true">
                  <Plus className="h-5 w-5 text-teal-900 transition-transform group-open:rotate-45" />
                </span>
              </summary>
              <p className="px-6 md:px-8 pb-6 md:pb-8 -mt-2 text-teal-900/80 text-lg font-medium leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact?service=boarding" className={btnPrimary}>
            Reserve a Boarding Stay
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <AreasServed />
    </div>
  );
}
