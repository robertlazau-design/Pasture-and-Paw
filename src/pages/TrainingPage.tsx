import { motion } from 'motion/react';
import { PawPrint, Dog, ArrowRight, ArrowLeft, CheckCircle2, Home, Moon, Shield, Target, MessageCircleHeart, Sparkles, Users, Clock, Compass, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AreasServed from '../components/AreasServed';
import { TRAINING_FAQS } from '../content/local';

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
                src="/images/training-hero.jpg"
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

      {/* Boarding Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-teal-950 text-cream rounded-[2rem] border-4 border-teal-900 shadow-[12px_12px_0px_0px_#C89F7E] overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="p-8 md:p-12">
            <div className="inline-flex items-center gap-2 bg-clay text-cream px-5 py-2 rounded-full border-2 border-teal-900 mb-6">
              <Moon className="h-5 w-5" />
              <span className="font-bold text-sm uppercase tracking-wider">Also Available</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Farm <span className="text-sage">Boarding</span>
            </h2>
            <p className="text-xl text-cream/90 font-medium leading-relaxed mb-4">
              Heading out of town? Your dog can stay on the farm, cared for by the same experienced trainers, with daily outdoor time on open pasture.
            </p>
            <p className="text-sage font-bold text-lg mb-8">
              Overnight stays, extended trips, and recurring weekly schedules.
            </p>
            <Link to="/dog-boarding" className={btnPrimary}>
              About Farm Boarding
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="min-h-[260px] lg:min-h-0 bg-clay">
            <img
              src="/images/boarding.jpg"
              alt="Dogs resting calmly in the farm boarding kennel at Pasture & Paw"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold text-teal-900 mb-4">Common Questions</h2>
          <p className="text-xl text-teal-900/70 font-medium max-w-2xl mx-auto">
            Quick answers about training and boarding at Pasture &amp; Paw.
          </p>
        </div>
        <div className="space-y-4">
          {TRAINING_FAQS.map((faq) => (
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
      </section>

      <AreasServed />
    </div>
  );
}
