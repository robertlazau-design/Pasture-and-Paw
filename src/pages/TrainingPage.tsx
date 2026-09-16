import { motion } from 'motion/react';
import { PawPrint, Dog, ArrowRight, ArrowLeft, CheckCircle2, Home, Sun, Moon, Shield, Heart, Target, MessageCircleHeart, Sparkles, Users, Clock, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const goalAreas = [
  {
    icon: Compass,
    title: 'Leash Manners & Walking',
    description: `Pulling, lunging, or just general chaos on the leash — we'll build calm, connected walks you actually enjoy.`,
  },
  {
    icon: PawPrint,
    title: 'Recall & Off-Leash Freedom',
    description: `Dream of hiking or adventuring without the worry? We'll build a recall you can actually trust.`,
  },
  {
    icon: Shield,
    title: 'Reactivity & Anxiety',
    description: `Whether it's other dogs, strangers, or loud noises — we'll help your dog find confidence and calm.`,
  },
  {
    icon: Home,
    title: 'Household Manners',
    description: 'Jumping, counter-surfing, door-dashing — the everyday stuff that makes life with your dog harder than it should be.',
  },
  {
    icon: Users,
    title: 'Socialization & Confidence',
    description: 'For puppies or under-socialized dogs who need safe, structured exposure to the world around them.',
  },
  {
    icon: Target,
    title: 'Advanced Obedience',
    description: `Already have a solid foundation? We'll push the boundaries with distance work, duration, and distraction proofing.`,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Tell Us About Your Dog',
    description: 'Start with a free phone consultation. We want to hear about your dog — their personality, their quirks, the things that frustrate you, and the things you love about them. No detail is too small.',
  },
  {
    number: '02',
    title: 'Share Your Goals',
    description: `What does life with your dog look like in your perfect world? Whether it's a calm walk through the neighborhood, reliable off-leash hiking, or just being able to have guests over without chaos — we want to know.`,
  },
  {
    number: '03',
    title: 'We Build Your Program',
    description: 'Based on everything you share, we design a training plan from the ground up — just for your dog. The duration, the focus areas, the methods — all of it is built around who they are and where you want to go.',
  },
  {
    number: '04',
    title: 'Training on the Farm',
    description: `Your dog joins us on our working farm, where they'll train alongside moving livestock, open pastures, and the unpredictable rhythm of agricultural life. It's real-world proofing you simply can't replicate in a facility.`,
  },
];

const boardingFeatures = [
  { icon: Home, title: 'Farm-Style Accommodations', description: 'Spacious, climate-controlled kennels with access to covered outdoor runs. No stacked crates, no concrete floors.' },
  { icon: Sun, title: 'Daily Structured Activity', description: 'Multiple supervised outdoor sessions per day on our acreage. Your dog gets real exercise — not just a quick yard turnout.' },
  { icon: Shield, title: 'Experienced Supervision', description: 'Every boarding dog is under the direct care of professional trainers. We monitor behavior, appetite, and temperament daily.' },
  { icon: Heart, title: 'Small Group Sizes', description: 'We limit boarding capacity to ensure each dog receives individual attention and a low-stress environment.' },
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
            <p className="text-2xl text-teal-900/80 font-medium mb-4 leading-relaxed">
              No two dogs are the same — and neither are our training programs.
            </p>
            <p className="text-lg text-teal-900/70 font-medium mb-8 leading-relaxed">
              Tell us about your dog, share your goals, and we'll build a program from the ground up that's as unique as the bond you share.
            </p>
            <Link to="/contact?service=training" className={btnPrimary}>
              Start Your Consultation
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
                alt="Well-trained pack of dogs demonstrating focus and obedience"
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
                A sterile training room can only take a dog so far. Our dogs train on a working farm — surrounded by grazing cattle, free-roaming goats, the sounds of daily chores, and the unpredictable rhythm of agricultural life. This isn't simulated distraction. It's the real thing.
              </p>
              <p>
                By proofing behaviors alongside moving livestock and the honest chaos of daily farm operations, we ensure that when your dog goes home — whether that's the suburbs, the city, or a rural homestead — they have the clarity, confidence, and composure to listen when it matters most.
              </p>
            </div>
         </div>
      </section>

      {/* "Your Dog Is One of a Kind" - Personalized Approach Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-sage-light text-teal-900 px-5 py-2 rounded-full border-2 border-teal-900 mb-6 shadow-[4px_4px_0px_0px_#0B3B3C]">
              <MessageCircleHeart className="h-5 w-5" />
              <span className="font-bold text-sm uppercase tracking-wider">Our Approach</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6 leading-tight">
              Your Dog Is<br/>
              <span className="text-clay">One of a Kind</span>
            </h2>
            <div className="space-y-6 text-xl text-teal-900/80 font-medium leading-relaxed">
              <p>
                We don't believe in cookie-cutter programs or one-size-fits-all packages. Every dog that comes through our gate is an individual — with their own temperament, their own history, and their own way of seeing the world.
              </p>
              <p>
                That's why every training program at Pasture & Paw starts with <strong className="text-teal-900">you</strong>. We sit down, we listen, and we learn everything we can about your dog and your goals. What drives them? What scares them? What does your ideal day together look like?
              </p>
              <p>
                From there, we design a program from scratch — built entirely around your dog's needs and your vision for life together. The timeline, the focus, the methods — all of it tailored, all of it intentional.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-sage-light rounded-[2rem] p-10 border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C]">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-clay" />
                <h3 className="font-display font-bold text-2xl text-teal-900">What makes us different</h3>
              </div>
              <ul className="space-y-5">
                {[
                  'No preset packages — your program is designed from the ground up',
                  'We train on a real working farm, not in a sterile facility',
                  'Every program is shaped around your lifestyle and goals',
                  'Your dog trains alongside livestock, terrain, and real-world distractions',
                  'We stay in close communication throughout the entire process',
                  'You receive a comprehensive handoff so the training carries home',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-clay shrink-0 mt-0.5" />
                    <span className="text-lg text-teal-900/80 font-medium leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal Areas - What We Can Help With */}
      <section className="bg-sage-light py-24 mb-24 border-y-4 border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-teal-900 mb-4">What Are Your Goals?</h2>
            <p className="text-xl text-teal-900/70 font-medium max-w-3xl mx-auto leading-relaxed">
              Whether you're working through a specific challenge or just want to build a stronger foundation, tell us what matters to you — and we'll make it the heart of your dog's program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goalAreas.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-cream rounded-[2rem] p-8 border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C] flex flex-col h-full hover:-translate-y-1 transition-transform"
              >
                <div className="inline-flex items-center justify-center p-3 bg-sage rounded-xl border-2 border-teal-900 mb-6 w-fit shadow-[3px_3px_0px_0px_#0B3B3C]">
                  <goal.icon className="h-7 w-7 text-teal-900" />
                </div>
                <h3 className="font-display font-bold text-2xl text-teal-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-teal-900/75 text-lg font-medium leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-cream rounded-2xl px-8 py-5 border-2 border-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]">
              <p className="text-teal-900 font-bold text-lg">
                Don't see your specific goal listed? <span className="text-clay">That's okay — just tell us.</span>
              </p>
              <p className="text-teal-900/70 font-medium mt-1">
                Every program is built from scratch. If it matters to you, it matters to us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-teal-900 mb-4">How It Works</h2>
          <p className="text-xl text-teal-900/70 font-medium max-w-2xl mx-auto">
            From the first conversation to the final handoff, here's what the journey looks like.
          </p>
        </div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream rounded-[2rem] p-8 md:p-10 border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C] flex flex-col md:flex-row items-start gap-6 md:gap-10"
            >
              <div className="bg-clay text-cream w-16 h-16 rounded-2xl border-2 border-teal-900 flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_#0B3B3C]">
                <span className="font-display font-bold text-2xl">{step.number}</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-teal-900 mb-3">{step.title}</h3>
                <p className="text-teal-900/80 text-lg font-medium leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact?service=training" className={btnPrimary}>
            Start With a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Boarding Section */}
      <section className="relative overflow-hidden">
        {/* Wavy divider */}
        <div className="w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,235.9,88.94,278.43,73.5,321.39,56.44Z" className="fill-teal-950"></path>
          </svg>
        </div>

        <div className="bg-teal-950 text-cream py-24 relative">
          <div className="absolute bottom-6 right-6 w-96 h-96 opacity-10 pointer-events-none select-none">
            <img src="/images/logo-light.png" alt="" className="w-full h-full object-contain -rotate-12" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-clay text-cream px-5 py-2 rounded-full border-2 border-teal-900 mb-6">
                  <Moon className="h-5 w-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Also Available</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Farm<br/>
                  <span className="text-sage">Boarding</span>
                </h2>
                <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
                  <p>
                    Not every stay needs to be a training program. For dogs that simply need a safe, stimulating place to stay while you're away, our farm boarding provides an experience that goes far beyond a standard kennel.
                  </p>
                  <p>
                    Your dog will spend their days on open acreage under the supervision of professional trainers — not kennel attendants. They'll get real exercise, structured outdoor time, and the kind of environmental enrichment that only a working farm can provide.
                  </p>
                  <p className="text-sage font-bold">
                    Available for overnight stays, extended trips, and recurring weekly schedules.
                  </p>
                </div>
                <div className="mt-8">
                  <Link to="/contact?service=boarding" className={btnPrimary}>
                    Inquire About Boarding
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-cream shadow-[-12px_12px_0px_0px_#C89F7E] bg-clay">
                  <img
                    src="/images/boarding.jpg"
                    alt="Dogs resting calmly in our clean, spacious farm boarding kennel facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Boarding Features Grid */}
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
    </div>
  );
}
