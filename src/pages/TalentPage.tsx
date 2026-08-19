import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Dog, Film, Camera, Star, Shield, CheckCircle2, Clapperboard, Tv, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";
const btnSecondary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-cream text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const talentDogs = [
  {
    name: 'Valor',
    breed: 'Belgian Malinois',
    age: '4 years',
    skills: ['Off-leash precision work', 'Mark-to-mark movement', 'Controlled aggression on cue', 'Vehicle work', 'High-energy action sequences'],
    image: '/images/hero-main.png',
    color: 'bg-teal-800',
    description: 'Our lead production dog. Valor brings a rare combination of intensity and control to every set. Trained in advanced obedience, protection sport foundations, and on-command behavioral sequences, he is equally capable of high-energy chase scenes and calm, patient close-up work.',
  },
  {
    name: 'Summit',
    breed: 'German Shepherd',
    age: '5 years',
    skills: ['Steady temperament on busy sets', 'Companion/family dog portrayal', 'Scent detection mimicry', 'Stay-on-mark reliability', 'Low-stress with crowds and equipment'],
    image: '/images/training-hero.png',
    color: 'bg-clay',
    description: 'Summit is our most versatile production dog. His calm, steady temperament makes him the ideal choice for scenes requiring a composed, intelligent companion dog. He excels at portraying family pets, service dogs, and working K9s with equal conviction.',
  },
];

const productionTypes = [
  { icon: Film, title: 'Feature Film', description: 'Trained dogs for narrative feature films requiring precision behavioral sequences and on-set reliability.' },
  { icon: Tv, title: 'Television', description: 'Recurring or episodic television roles. Our dogs adapt quickly to the pace of series production.' },
  { icon: Camera, title: 'Commercial & Print', description: 'Branded content, advertising campaigns, and editorial photography with photogenic, well-behaved dogs.' },
  { icon: Megaphone, title: 'Live Events', description: 'Demonstrations, brand activations, and live appearances with trained handler supervision.' },
];

const credentials = [
  'Professional dog trainer since 2017',
  'Experienced with on-set protocols and production schedules',
  'Full liability insurance for production environments',
  'Available for location work throughout the Pacific Northwest',
  'Comfortable working with talent, crew, and complex rigging',
  'Trained in animal safety compliance for film sets',
];

export default function TalentPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream pt-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <Link to="/" className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-12">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-teal-900 text-cream px-5 py-2 rounded-full border-2 border-teal-950 mb-6 shadow-[4px_4px_0px_0px_#052223]">
              <Clapperboard className="h-5 w-5 text-sage" />
              <span className="font-bold text-sm uppercase tracking-wider">Professional Animal Talent</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-teal-900 mb-6 leading-tight">
              Available for<br/>
              <span className="text-clay">Production.</span>
            </h1>
            <p className="text-2xl text-teal-900/80 font-medium mb-8 leading-relaxed">
              Professionally trained dogs and experienced handler available for film, television, commercial, and editorial productions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact?service=talent" className={btnPrimary}>
                Inquire About Availability
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="#talent-roster" className={btnSecondary}>
                Meet the Dogs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] bg-teal-800">
              <img
                src="/images/talent-hero.jpg"
                alt="Professional dog handler with trained dogs on a film production set"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-cream border-4 border-teal-900 p-5 rounded-2xl shadow-[8px_8px_0px_0px_#0B3B3C] hidden md:flex items-center gap-3 rotate-3"
            >
              <Star className="h-8 w-8 text-clay" />
              <div>
                <p className="font-display font-bold text-teal-900 text-lg leading-tight">Set<br/>Ready</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Handler Credentials */}
      <section className="bg-teal-900 text-cream py-24 mb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-950 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-clay rounded-xl border-2 border-cream mb-6">
                <Shield className="h-8 w-8 text-cream" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Professional Handler.<br/>
                <span className="text-sage">Production Experienced.</span>
              </h2>
              <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
                <p>
                  Every animal on our roster is owner-trained, owner-handled, and works exclusively under the direct supervision of their primary handler. This ensures the highest level of behavioral reliability, animal welfare, and on-set safety.
                </p>
                <p>
                  With a background in professional dog training and a working knowledge of on-set protocols, we bring more than just trained animals — we bring a team that understands the pace, pressure, and precision of professional production environments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-teal-950 rounded-[2rem] p-8 border-2 border-teal-800"
            >
              <h3 className="font-display font-bold text-2xl text-sage mb-6">Handler Credentials</h3>
              <ul className="space-y-4">
                {credentials.map((cred, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-cream/80 font-medium"
                  >
                    <CheckCircle2 className="w-6 h-6 text-sage shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dog Roster */}
      <section id="talent-roster" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 scroll-mt-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-4 bg-cream rounded-full border-4 border-teal-900 shadow-[6px_6px_0px_0px_#0B3B3C] mb-8"
          >
            <Dog className="h-10 w-10 text-teal-900" />
          </motion.div>
          <h2 className="font-display text-5xl font-bold text-teal-900 mb-4">Meet the Talent</h2>
          <p className="text-xl text-teal-900/70 font-medium max-w-2xl mx-auto">
            Each dog in our roster is professionally trained, production-tested, and handler-supervised at all times.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {talentDogs.map((dog, index) => (
            <motion.div
              key={dog.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-sage-light rounded-[2rem] border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] overflow-hidden"
            >
              <div className={`aspect-[16/9] overflow-hidden border-b-4 border-teal-900 ${dog.color}`}>
                <img
                  src={dog.image}
                  alt={`${dog.name} — ${dog.breed}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display font-bold text-3xl text-teal-900">{dog.name}</h3>
                  <span className="text-clay font-bold">{dog.age}</span>
                </div>
                <p className="text-sage font-bold text-lg mb-4 uppercase tracking-wider">{dog.breed}</p>
                <p className="text-teal-900/80 text-lg font-medium leading-relaxed mb-6">{dog.description}</p>
                <div>
                  <h4 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-clay" />
                    Production Skills
                  </h4>
                  <ul className="space-y-2">
                    {dog.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3 text-teal-900/70 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-teal-900/40 shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Production Types */}
      <section className="bg-sage-light py-24 mb-24 border-y-4 border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl font-bold text-teal-900 mb-4 text-center">Types of Production</h2>
          <p className="text-xl text-teal-900/70 font-medium text-center mb-16 max-w-2xl mx-auto">
            We are equipped for a variety of professional production formats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productionTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2 }}
                className="bg-cream rounded-[2rem] p-8 border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C] text-center"
              >
                <div className="inline-flex items-center justify-center p-4 bg-teal-900 rounded-2xl mb-6">
                  <type.icon className="h-8 w-8 text-sage" />
                </div>
                <h3 className="font-display font-bold text-2xl text-teal-900 mb-3">{type.title}</h3>
                <p className="text-teal-900/70 font-medium leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-teal-900 rounded-[2rem] p-12 border-4 border-teal-950 shadow-[12px_12px_0px_0px_#052223] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-800 rounded-full blur-3xl opacity-40 translate-x-1/3 -translate-y-1/2 pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">Ready to Book?</h2>
            <p className="text-xl text-cream/80 font-medium mb-8 max-w-xl mx-auto">
              Contact us with your production details, timeline, and requirements. We'll respond within 24 hours with availability and a custom quote.
            </p>
            <Link to="/contact?service=talent" className={btnPrimary}>
              Submit a Talent Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
