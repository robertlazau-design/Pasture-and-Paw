import { motion } from 'motion/react';
import { PawPrint, Dog, ArrowRight, ArrowLeft, CheckCircle2, Home, Sun, Moon, Shield, Heart, Target, MessageCircleHeart, Sparkles, Users, Clock, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const goalAreas = [
  {
    icon: Compass,
    title: 'Leash Manners & Walking',
    description: `Tired of getting dragged down the street or dreading walks? We teach your dog calm, loose-leash focus so walks feel relaxing for both of you.`,
  },
  {
    icon: PawPrint,
    title: 'Recall & Off-Leash Freedom',
    description: `Whether you want to explore hiking trails or enjoy open fields, we build a dependable recall so your dog comes back the first time you call.`,
  },
  {
    icon: Shield,
    title: 'Reactivity & Anxiety',
    description: `If your dog barks, lunges, or panics around other dogs, guests, or sudden noises, we work on confidence and emotional control in real settings.`,
  },
  {
    icon: Home,
    title: 'Household Manners',
    description: 'Jumping on guests, stealing food from the counter, and bolting out the door. We build reliable household boundaries that make daily life peaceful.',
  },
  {
    icon: Users,
    title: 'Socialization & Confidence',
    description: 'For puppies and timid dogs who need thoughtful, structured exposure to new sights, sounds, footing, and friendly farm animals.',
  },
  {
    icon: Target,
    title: 'Advanced Obedience',
    description: `Take your dog's training to a higher level with off-leash control, distance cues, extended stays, and focus through heavy distractions.`,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Tell Us About Your Dog',
    description: 'We start with a thorough phone consultation. Tell us about your dog\'s temperament, daily habits, where you struggle, and what you love about them. Every detail helps us understand what is really going on.',
  },
  {
    number: '02',
    title: 'Share Your Goals',
    description: `Tell us what your ideal day together looks like. Maybe you want calm neighborhood strolls, off-leash trail adventures, or peaceful evenings without constant barking. Your lifestyle sets our targets.`,
  },
  {
    number: '03',
    title: 'We Build Your Program',
    description: 'We design a custom training plan specifically for your dog. We set the timeline, training milestones, and routines around your dog\'s temperament and the real-world skills you need most.',
  },
  {
    number: '04',
    title: 'Training on the Farm',
    description: `Your dog works with us right on the farm. Practicing obedience around cattle, goats, open fields, and daily chores builds deep focus and impulse control that holds up anywhere.`,
  },
];

const boardingFeatures = [
  { icon: Home, title: 'Farm-Style Accommodations', description: 'Spacious, clean indoor runs with natural light, heating, and cooling. No stacked wire crates or concrete warehouse cages.' },
  { icon: Sun, title: 'Daily Structured Activity', description: 'Multiple outdoor sessions every day on open farm pastures. Dogs get genuine exercise, fresh air, and enrichment.' },
  { icon: Shield, title: 'Experienced Trainer Care', description: 'Every boarding dog is watched and handled directly by professional trainers who understand dog behavior, body language, and daily care.' },
  { icon: Heart, title: 'Small Capacity', description: 'We limit our guest count so every dog gets personal attention, quiet rest, and a calm, low-stress stay.' },
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
              Every dog learns differently, and every owner needs something different.
            </p>
            <p className="text-lg text-teal-900/70 font-medium mb-8 leading-relaxed">
              Tell us what challenges you are facing and what you want life with your dog to look like. We build a personalized program around you and your dog.
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Why We Train on a Working Farm</h2>
            <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
              <p>
                Training inside a quiet, empty room only prepares a dog for quiet, empty rooms. Out in the real world, dogs encounter squirrels, delivery drivers, bicycles, and barking neighborhood dogs.
              </p>
              <p>
                Our dogs train directly on our working farm. Working around cattle in the pasture, goats along the fence line, tractor sounds, and open fields gives dogs authentic proofing. When a dog learns to keep their head and listen here, going home to a busy suburban neighborhood or city sidewalk feels simple.
              </p>
            </div>
         </div>
      </section>

      {/* Personalized Approach Section */}
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
              Personalized Training<br/>
              <span className="text-clay">Built Around You</span>
            </h2>
            <div className="space-y-6 text-xl text-teal-900/80 font-medium leading-relaxed">
              <p>
                We do not push dogs into rigid, pre-packaged programs. A fearful rescue, an energetic adolescent retriever, and a reactive terrier each need completely different handling, pacing, and motivation.
              </p>
              <p>
                That's why every training program at Pasture &amp; Paw starts with <strong className="text-teal-900">you</strong>. We sit down, listen to your daily challenges, and learn what drives your dog. We want to know where things feel frustrating and what your ideal routine looks like.
              </p>
              <p>
                From there, we build a program specifically for you. The length of training, the specific milestones, and the hands-on owner coaching sessions are all arranged to give you lasting results at home.
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
                  'Custom plans created for your specific dog and household goals',
                  'Real farm acreage with natural distractions instead of an indoor box',
                  'Training around livestock, open trails, and practical daily scenarios',
                  'Direct updates and video check-ins throughout your dog\'s stay',
                  'Thorough owner handoff lessons so good habits transfer smoothly to your home',
                  'Ongoing support to ensure long-term consistency and success',
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
              From fundamental puppy foundations to complex behavioral struggles, tell us what matters most to your family. We will build your dog's training around those exact priorities.
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
                Have a unique situation or specific goal? <span className="text-clay">Just let us know during your consultation.</span>
              </p>
              <p className="text-teal-900/70 font-medium mt-1">
                Every program is custom. If it is important for your household, we can address it.
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
            From your initial phone consultation through your final handoff lesson, here is how our training process works.
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
                    If you are heading out of town and need a safe, engaging place for your dog, our farm boarding gives them plenty of room to breathe. Unlike commercial kennel warehouses, dogs staying with us enjoy fresh country air, large outdoor turnouts, and quiet rest.
                  </p>
                  <p>
                    Our boarding dogs are cared for directly by experienced trainers rather than temporary kennel staff. Your dog gets structured daily exercise, mental enrichment on the acreage, and attentive care in a peaceful setting.
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
