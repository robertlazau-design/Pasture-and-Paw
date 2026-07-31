import { motion } from 'motion/react';
import { PawPrint, Dog, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const programs = [
  {
    title: "Puppy Foundations",
    duration: "4 Weeks",
    description: "Start your puppy off right with critical socialization, basic obedience, and exposure to real-world sights and sounds on the farm.",
    features: ["Crate training basics", "Leash introduction", "Environmental exposure", "Confidence building"]
  },
  {
    title: "On-Leash Mastery",
    duration: "6 Weeks",
    description: "Build reliable obedience in distracting environments. We focus on clear communication and handler engagement.",
    features: ["Loose leash walking", "Reliable recall on long line", "Place command", "Polite greetings"]
  },
  {
    title: "Off-Leash Reliability",
    duration: "8 Weeks",
    description: "True freedom through discipline. Advanced obedience proofing around livestock and heavy distractions.",
    features: ["E-collar conditioning", "Off-leash recall", "Distance commands", "Public access proofing"]
  }
];

export default function TrainingPage() {
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
            <div className="inline-flex items-center justify-center p-3 bg-clay rounded-xl border-2 border-teal-900 mb-6 shadow-[4px_4px_0px_0px_#0B3B3C]">
              <Dog className="h-8 w-8 text-cream" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-teal-900 mb-6 leading-tight">
              Canine <br/>
              <span className="text-sage">Academy</span>
            </h1>
            <p className="text-2xl text-teal-900/80 font-medium mb-8 leading-relaxed">
              Real-world obedience forged in the heart of a working farm.
            </p>
            <Link to="/booking" className={btnPrimary}>
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] bg-clay">
               <img
                src="/images/training-hero.png"
                alt="Dog trainer with German Shepherd on the farm"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-teal-900 text-cream py-24 mb-24 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Why the Farm?</h2>
            <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
              <p>
                A sterile training room can only take a dog so far. The working farm environment provides natural, dynamic distractions—moving livestock, unpredictable sounds, and varying terrain.
              </p>
              <p>
                By proofing behaviors in this environment, we ensure that when you take your dog back to the suburbs, the city, or the trails, they have the clarity and confidence to listen under pressure.
              </p>
            </div>
         </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-5xl font-bold text-teal-900 mb-4 text-center">Training Programs</h2>
        <p className="text-xl text-teal-900/70 font-medium text-center mb-16 max-w-2xl mx-auto">
          We offer immersive board-and-train programs tailored to your dog's age and your behavioral goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream rounded-[2rem] p-8 border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] flex flex-col h-full relative"
            >
              <div className="absolute -top-6 -right-6 bg-sage border-4 border-teal-900 w-20 h-20 rounded-full flex items-center justify-center rotate-12 shadow-[4px_4px_0px_0px_#0B3B3C]">
                 <span className="font-display font-bold text-teal-900 text-center leading-tight">
                    {program.duration.split(' ')[0]}<br/>{program.duration.split(' ')[1]}
                 </span>
              </div>
              
              <h3 className="font-display font-bold text-3xl text-teal-900 mb-4 pr-12">
                {program.title}
              </h3>
              <p className="text-teal-900/80 text-lg font-medium leading-relaxed mb-8">
                {program.description}
              </p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
                  <PawPrint className="w-5 h-5 text-sage" /> Core Focus:
                </h4>
                <ul className="space-y-3">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-teal-900/80 font-medium">
                      <CheckCircle2 className="w-6 h-6 text-clay shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
