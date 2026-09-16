import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Dog, MapPin, Mail, Instagram, ChevronRight, PawPrint, Sprout, Cloud, Sun, ArrowLeft, Menu, X, Play, Camera } from 'lucide-react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import BeholdWidget from '@behold/react';
import FarmPage from './pages/FarmPage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';
import BreedPage from './pages/BreedPage';

// Reusable tactile button styles
const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";
const btnSecondary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-cream text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

function FloatingIcon({ icon: Icon, className, delay = 0, duration = 4 }: { icon: any, className: string, delay?: number, duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute pointer-events-none ${className}`}
    >
      <Icon className="w-full h-full" />
    </motion.div>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleStoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileOpen(false);
  };

  const navLinkClass = "relative text-teal-900 font-bold text-lg group overflow-hidden";
  const underline = <span className="absolute bottom-0 left-0 w-full h-1 bg-sage transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200" />;

  return (
    <nav className="fixed w-full z-50 bg-cream border-b-4 border-teal-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <motion.div 
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="bg-sage-light/70 p-1.5 rounded-2xl border-2 border-teal-900 shadow-[2px_2px_0px_0px_#0B3B3C] w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
                <img src="/images/logo-teal.png" alt="Pasture & Paw Emblem" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-2xl text-teal-900 tracking-tight">Pasture &amp; Paw</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <a href="#story" onClick={handleStoryClick} className={navLinkClass}>
              Story
              {underline}
            </a>
            <Link to="/farm" className={navLinkClass}>
              Farm
              {underline}
            </Link>
            <Link to="/training" className={navLinkClass}>
              Training
              {underline}
            </Link>
            <Link to="/contact" onClick={handleContactClick} className={navLinkClass}>
              Contact
              {underline}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border-2 border-teal-900 bg-sage-light hover:bg-sage transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6 text-teal-900" /> : <Menu className="h-6 w-6 text-teal-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-cream border-t-2 border-teal-900/20"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <a href="#story" onClick={handleStoryClick} className="text-teal-900 font-bold text-xl py-2 border-b-2 border-sage-light">
                Story
              </a>
              <Link to="/farm" onClick={() => setMobileOpen(false)} className="text-teal-900 font-bold text-xl py-2 border-b-2 border-sage-light">
                Farm
              </Link>
              <Link to="/training" onClick={() => setMobileOpen(false)} className="text-teal-900 font-bold text-xl py-2 border-b-2 border-sage-light">
                Training
              </Link>
              <Link to="/contact" onClick={handleContactClick} className="text-teal-900 font-bold text-xl py-2">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-teal-950">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/hero-main.jpg"
          alt="Pasture & Paw founder with Dexter calf and goat in front of the red farm barn"
          className="w-full h-full object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/70 via-teal-900/40 to-teal-950/85 mix-blend-multiply" />
      </motion.div>

      {/* Playful Floating Elements */}
      <FloatingIcon icon={Cloud} className="top-32 left-10 text-cream/20 w-32 h-32" delay={0} duration={6} />
      <FloatingIcon icon={Cloud} className="top-48 right-20 text-cream/10 w-48 h-48" delay={2} duration={8} />
      <FloatingIcon icon={Sun} className="top-24 right-40 text-clay/40 w-24 h-24" delay={1} duration={10} />
      <FloatingIcon icon={PawPrint} className="bottom-32 left-1/4 text-sage/30 w-16 h-16 -rotate-12" delay={0.5} />
      <FloatingIcon icon={PawPrint} className="bottom-40 right-1/3 text-sage/30 w-12 h-12 rotate-12" delay={1.5} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="inline-block mb-6 bg-cream px-6 py-2 rounded-full border-2 border-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] -rotate-2"
        >
          <span className="font-bold text-teal-900 flex items-center gap-2">
            <Sprout className="w-5 h-5 text-sage" />
            Working Farm & Canine Academy
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl font-bold text-cream mb-6 tracking-tight leading-[1.1]"
        >
          A Working Farm.<br />
          <span className="text-sage">Real-World Dog Training.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-cream/90 mb-10 leading-relaxed font-medium"
        >
          We train dogs in the middle of daily farm chores, open pastures, and livestock. When your dog learns to focus here, handling life at home becomes second nature.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/farm" className={btnPrimary}>
            See the Farm
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/training" className={btnSecondary}>
            Our Training Programs
          </Link>
        </motion.div>
      </div>
      
      {/* Wavy bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,235.9,88.94,278.43,73.5,321.39,56.44Z" className="fill-cream"></path>
        </svg>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 bg-cream relative">
      <FloatingIcon icon={Leaf} className="top-20 right-10 text-sage/40 w-12 h-12 rotate-45" delay={0} duration={5} />
      <FloatingIcon icon={Leaf} className="bottom-20 left-10 text-sage/40 w-16 h-16 -rotate-45" delay={2} duration={7} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-8 leading-tight">
              Born on the Land.<br />
              <span className="text-clay">Built for Everyday Life.</span>
            </h2>
            <div className="space-y-6 text-teal-900/80 text-xl leading-relaxed font-medium">
              <p className="border-l-4 border-sage pl-6">
                I grew up surrounded by livestock, early mornings, and the honest rhythm of family agriculture. Caring for animals and stewardship of the land has always been a daily responsibility, not a marketing tagline.
              </p>
              <p>
                In 2017, I stepped into professional dog training. It quickly became clear that indoor rooms and sterile training centers don't prepare dogs for the real world. Dogs do not live in controlled bubbles. They live in homes with distractions, open doors, neighborhood noise, and outdoor excitement.
              </p>
              <p className="border-l-4 border-sage pl-6">
                Pasture &amp; Paw brings both worlds together. We raise heritage cattle, goats, and rabbits using thoughtful pasture rotation, and we train dogs right out on the farm. Dogs learn to stay calm and listen around real livestock, open fields, and daily chores.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            {/* Organic Blob Image Mask */}
            <div className="aspect-square overflow-hidden border-4 border-teal-900 shadow-[16px_16px_0px_0px_#95C0A1] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-sage">
              <img
                src="/images/founder-story.jpg"
                alt="Pasture & Paw founder with calf on the farm in golden sunlight"
                className="w-full h-full object-cover object-[center_25%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-cream border-4 border-teal-900 p-4 rounded-3xl shadow-[8px_8px_0px_0px_#0B3B3C] hidden md:flex flex-col items-center justify-center w-40 h-40"
            >
              <img src="/images/logo-teal.png" alt="Pasture & Paw Official Crest" className="w-20 h-20 object-contain mb-1" />
              <p className="font-display font-bold text-teal-900 text-xs tracking-wider uppercase text-center">Est. 2017</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const MarqueeContent = () => (
  <div className="flex items-center gap-12 px-6">
    <span>Heritage Livestock</span>
    <PawPrint className="h-8 w-8 text-sage" />
    <span>Regenerative Pastures</span>
    <Sprout className="h-8 w-8 text-sage" />
    <span>Real-World Dog Training</span>
    <PawPrint className="h-8 w-8 text-sage" />
    <span>Youth 4-H Mentorship</span>
    <Sprout className="h-8 w-8 text-sage" />
  </div>
);

function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-teal-900 py-6 border-y-4 border-teal-950 flex shadow-inner">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex w-max whitespace-nowrap items-center text-cream font-display font-bold text-3xl uppercase tracking-wider"
      >
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </div>
  );
}

function FarmPreview() {
  const animals = [
    { name: 'Highlander Cattle', seed: 'highlandcow', color: 'bg-clay', path: '/farm/highlander-cattle' },
    { name: 'Dexter Cattle', seed: 'dextercow', color: 'bg-sage', path: '/farm/dexter-cattle' },
    { name: 'Norwegian Goats', seed: 'goat', color: 'bg-teal-800', path: '/farm/norwegian-goats' },
    { name: 'Silver Fox Rabbits', seed: 'rabbit', color: 'bg-clay', path: '/farm/silver-fox-rabbits' },
  ];

  return (
    <section id="farm" className="bg-sage-light pb-24">
      <Marquee />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-4 bg-cream rounded-full border-4 border-teal-900 shadow-[6px_6px_0px_0px_#0B3B3C] mb-8"
          >
            <Sprout className="h-10 w-10 text-teal-900" />
          </motion.div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6">
            The Farm &amp; Livestock
          </h2>
          <p className="text-2xl text-teal-900 font-bold mb-6">
            Heritage livestock, open acreage, and healthy pastures.
          </p>
          <p className="text-teal-900/80 text-xl leading-relaxed font-medium mb-8">
            Our mornings start at dawn with feeding rounds, moving herd fences, and checking on the pastures. We raise Scottish Highland and Dexter cattle, Norwegian dairy goats, and rare Silver Fox rabbits on actively managed acreage. By rotating our animals across different paddocks, the land gets time to rest and rebuild rich topsoil naturally. We also partner closely with local 4-H clubs to give young handlers practical experience raising and showing heritage stock.
          </p>
          <Link to="/farm" className={btnPrimary}>
            See the Farm
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {animals.map((animal, index) => (
            <Link to={animal.path} key={animal.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                className="bg-cream rounded-[2rem] p-4 border-4 border-teal-900 shadow-[8px_8px_0px_0px_#0B3B3C] group cursor-pointer h-full"
              >
                <div className={`aspect-square rounded-[1.5rem] overflow-hidden mb-6 border-4 border-teal-900 ${animal.color} relative`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-teal-900/20 transition-opacity z-10" />
                  <img
                    src={`/images/${animal.seed}.png`}
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display font-bold text-2xl text-teal-900 text-center pb-2">
                  {animal.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrainingPreview() {
  return (
    <section id="training" className="py-32 bg-teal-900 text-cream relative overflow-hidden">
      {/* Background organic shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-950 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/5] overflow-hidden border-4 border-cream shadow-[-16px_16px_0px_0px_#C89F7E] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-clay">
              <img
                src="/images/training-action.jpg"
                alt="Trainer with four well-trained dogs resting calmly on a forest trail"
                className="w-full h-full object-cover object-[center_35%] hover:scale-105 transition-transform duration-700"
              />
            </div>
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-sage border-4 border-teal-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_#0B3B3C] hidden md:flex flex-col items-center justify-center rotate-6"
            >
              <Dog className="h-12 w-12 text-teal-900 mb-2" />
              <p className="font-display font-bold text-teal-900 text-xl text-center leading-tight">Real-World<br/>Ready</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center justify-center p-3 bg-clay rounded-xl border-2 border-cream mb-8">
              <PawPrint className="h-8 w-8 text-cream" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Personalized Dog<br />Training
            </h2>
            <p className="text-2xl text-sage font-bold mb-8">
              Custom programs designed around your dog and your lifestyle.
            </p>
            <div className="space-y-6 text-cream/90 text-xl leading-relaxed mb-12 font-medium">
              <p>
                We do not use generic packages or rigid curriculums. Every training plan starts with an honest conversation about your dog's temperament, home habits, and where you need help.
              </p>
              <p>
                Training happens directly on our working farm. Learning to focus around grazing cattle, curious goats, open fields, and daily chores teaches dogs genuine impulse control. If your dog can listen calmly out here, walking through your neighborhood is a breeze.
              </p>
              <div className="bg-teal-950 p-6 rounded-2xl border-2 border-teal-800">
                <p className="font-bold text-sage-light">
                  From eager puppies to dogs with stubborn habits, we build each program from the ground up to fit your goals.
                </p>
              </div>
            </div>
            <Link to="/training" className={btnSecondary}>
              Tell Us Your Goals
              <ChevronRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ========================
// INSTAGRAM GALLERY
// ========================

/*
 * SETUP INSTRUCTIONS FOR BEHOLD.SO:
 * 1. Go to https://behold.so and create a free account
 * 2. Connect the @pastureandpaw Instagram account as a "Source"
 * 3. Create a new Feed → choose "Widget" as the output type
 * 4. Customize the layout in the Behold dashboard (Flexible Grid or Gallery Wall recommended)
 * 5. Copy your Feed ID from the embed code
 * 6. Replace "YOUR_FEED_ID_HERE" below with your actual Feed ID
 *
 * The widget will automatically pull and display the latest posts from @pastureandpaw.
 * It updates automatically when new content is posted.
 */
const BEHOLD_FEED_ID = 'YOUR_FEED_ID_HERE';

function InstagramGallery() {
  return (
    <section className="relative overflow-hidden">
      {/* Wavy top divider */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,235.9,88.94,278.43,73.5,321.39,56.44Z" className="fill-sage-light"></path>
        </svg>
      </div>

      <div className="bg-sage-light py-24 border-y-4 border-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-4 bg-cream rounded-full border-4 border-teal-900 shadow-[6px_6px_0px_0px_#0B3B3C] mb-8"
            >
              <Camera className="h-10 w-10 text-teal-900" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6"
            >
              Daily Life on the Farm
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-teal-900/70 font-medium max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Morning chore rounds, dogs working through real-world exercises, newborn calves, and friendly goats. Follow along on Instagram to see what daily life looks like out here.
            </motion.p>

            <motion.a
              href="https://www.instagram.com/pastureandpaw"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="inline-flex items-center gap-3 bg-cream px-6 py-3 rounded-2xl border-2 border-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 group"
            >
              <div className="p-2 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-teal-900 text-lg">@pastureandpaw</span>
              <ArrowRight className="h-5 w-5 text-teal-900 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Behold Widget */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] bg-cream p-4 md:p-6"
          >
            {BEHOLD_FEED_ID !== 'YOUR_FEED_ID_HERE' ? (
              <BeholdWidget feedId={BEHOLD_FEED_ID} />
            ) : (
              /* Placeholder shown until Behold is configured */
              <div className="py-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-sage-light rounded-full border-4 border-teal-900 mb-6">
                  <Instagram className="h-10 w-10 text-teal-900" />
                </div>
                <h3 className="font-display font-bold text-2xl text-teal-900 mb-3">
                  Instagram Feed
                </h3>
                <p className="text-teal-900/60 font-medium max-w-md mx-auto mb-8">
                  Our latest videos, training clips, and pasture updates from @pastureandpaw will display here once connected.
                </p>
                <a
                  href="https://www.instagram.com/pastureandpaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Visit Us on Instagram
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            )}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="https://www.instagram.com/pastureandpaw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-900 font-bold text-lg hover:text-clay transition-colors group"
            >
              See more videos and photos on Instagram
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-teal-950 text-cream pt-24 pb-12 relative overflow-hidden">
      {/* Massive subtle logo watermark in background */}
      <div className="absolute -bottom-20 -right-20 w-[520px] h-[520px] opacity-10 pointer-events-none select-none">
        <img src="/images/logo-light.png" alt="" className="w-full h-full object-contain -rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cream/10 p-2.5 rounded-2xl border-2 border-sage/40 backdrop-blur w-16 h-16 flex items-center justify-center overflow-hidden shrink-0 shadow-[4px_4px_0px_0px_#0B3B3C]">
                <img src="/images/logo-light.png" alt="Pasture & Paw Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-3xl sm:text-4xl text-cream tracking-tight block">Pasture & Paw</span>
                <span className="text-sage text-xs font-bold tracking-widest uppercase">Working Farm &amp; Canine Academy</span>
              </div>
            </div>
            <p className="text-2xl font-display text-sage mb-8 font-bold">
              Honest Farm Work.<br />Dependable Dog Training.
            </p>
            <p className="text-cream/70 max-w-md text-lg font-medium">
              Pasture &amp; Paw is a working family farm and private canine training facility based in Enumclaw, Washington, serving greater King County.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-2xl mb-8 text-sage">Contact Us</h4>
            <ul className="space-y-6">
              <li>
                <a href="mailto:hello@pastureandpaw.com" className="flex items-center gap-4 text-cream/90 hover:text-sage transition-colors text-lg font-medium group">
                  <div className="p-2 bg-teal-900 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-sage" />
                  </div>
                  hello@pastureandpaw.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-cream/90 text-lg font-medium">
                  <div className="p-2 bg-teal-900 rounded-lg mt-1">
                    <MapPin className="h-6 w-6 text-sage shrink-0" />
                  </div>
                  <span>Enumclaw, Washington<br />Serving greater King County</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-2xl mb-8 text-sage">Follow Along</h4>
            <a href="https://www.instagram.com/pastureandpaw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-cream/90 hover:text-sage transition-colors text-lg font-medium group">
              <div className="p-2 bg-teal-900 rounded-lg group-hover:scale-110 transition-transform">
                <Instagram className="h-6 w-6 text-sage" />
              </div>
              @pastureandpaw
            </a>
          </div>
        </div>
        
        <div className="border-t-4 border-teal-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-cream/50 font-medium">
          <p>&copy; {new Date().getFullYear()} Pasture & Paw. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sage transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sage transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Placeholder Pages ---

function PlaceholderPage({ title, description, backLink = "/" }: { title: string, description: string, backLink?: string }) {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={backLink} className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Link>
        <div className="bg-sage-light border-4 border-teal-900 rounded-[2rem] p-12 shadow-[12px_12px_0px_0px_#0B3B3C]">
          <h1 className="font-display text-5xl font-bold text-teal-900 mb-6">{title}</h1>
          <p className="text-xl text-teal-900/80 font-medium mb-8">{description}</p>
          <div className="p-8 border-4 border-dashed border-teal-900/30 rounded-2xl bg-cream/50 text-center">
            <p className="text-teal-900 font-bold text-lg">
              [ Content for this page will be built out later ]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <FarmPreview />
      <TrainingPreview />
      <InstagramGallery />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-teal-900 selection:bg-sage selection:text-teal-900 overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farm" element={<FarmPage />} />
          <Route path="/farm/:slug" element={<BreedPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
