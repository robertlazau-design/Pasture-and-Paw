import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Leaf, Dog, MapPin, Mail, Instagram, ChevronRight, PawPrint, Sprout, Cloud, Sun, ArrowLeft, Menu, X } from 'lucide-react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import FarmPage from './pages/FarmPage';
import TrainingPage from './pages/TrainingPage';
import BookingPage from './pages/BookingPage';

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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinkClass = "relative text-teal-900 font-bold text-lg group overflow-hidden";
  const underline = <span className="absolute bottom-0 left-0 w-full h-1 bg-sage transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200" />;

  return (
    <nav className="fixed w-full z-50 bg-cream border-b-4 border-teal-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="bg-teal-900 p-2 rounded-xl shadow-[2px_2px_0px_0px_#95C0A1]">
                <Dog className="h-6 w-6 text-cream" />
              </div>
              <span className="font-display font-bold text-2xl text-teal-900 tracking-tight">Pasture & Paw</span>
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
            <a href="#contact" onClick={handleContactClick} className={navLinkClass}>
              Contact
              {underline}
            </a>
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
              <a href="#contact" onClick={handleContactClick} className="text-teal-900 font-bold text-xl py-2">
                Contact
              </a>
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
          src="https://picsum.photos/seed/wolfdogfarm/1920/1080"
          alt="Wolf-like dog sitting calmly on a farm"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-teal-900/40 mix-blend-multiply" />
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
          Cultivating the Land.<br />
          <span className="text-sage">Shaping Confident Dogs.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-cream/90 mb-10 leading-relaxed font-medium"
        >
          We believe the active rhythm of daily agricultural life creates the ultimate real-world environment for building true obedience.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/farm" className={btnPrimary}>
            Explore the Farm
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/training" className={btnSecondary}>
            Discover Our Training
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
              Rooted in Reality.<br />
              <span className="text-clay">Driven by Discipline.</span>
            </h2>
            <div className="space-y-6 text-teal-900/80 text-xl leading-relaxed font-medium">
              <p className="italic border-l-4 border-sage pl-6">
                &ldquo;Raised between pasture and production, my life has always been shaped by early mornings and the realities of agriculture. Stewardship isn&rsquo;t just a slogan here&mdash;it is a responsibility lived daily.
              </p>
              <p>
                While my foundation was built on the discipline of family-run agricultural operations, my focus expanded to professional dog training in 2017. Pasture & Paw is the culmination of these two lifelong pursuits.
              </p>
              <p className="italic border-l-4 border-sage pl-6">
                By bringing my training program to a working farm environment, I am able to offer an experience that goes beyond traditional livestock production and standard obedience classes.&rdquo;
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
                src="https://picsum.photos/seed/wolfpack/800/800"
                alt="Founder with her dogs on the farm"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-cream border-4 border-teal-900 p-6 rounded-full shadow-[8px_8px_0px_0px_#0B3B3C] hidden md:flex flex-col items-center justify-center w-40 h-40"
            >
              <Leaf className="h-10 w-10 text-sage mb-2" />
              <p className="font-display font-bold text-teal-900 text-xl text-center leading-none">Est.<br/>2017</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const MarqueeContent = () => (
  <div className="flex items-center gap-12 px-6">
    <span>Ethical Breeding</span>
    <PawPrint className="h-8 w-8 text-sage" />
    <span>Land Stewardship</span>
    <Sprout className="h-8 w-8 text-sage" />
    <span>Community Connection</span>
    <PawPrint className="h-8 w-8 text-sage" />
    <span>Real-World Obedience</span>
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
            The Farm & Livestock
          </h2>
          <p className="text-2xl text-teal-900 font-bold mb-6">
            Ethical breeding, land stewardship, and community connection.
          </p>
          <p className="text-teal-900/80 text-xl leading-relaxed font-medium mb-8">
            As a dedicated working farm, our daily focus is the health of our land and the quality of our animals. Our pastures are actively managed and home to a diverse range of livestock. We proudly support youth involvement through breeding for local 4-H programs.
          </p>
          <Link to="/farm" className={btnPrimary}>
            Explore the Farm
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
                    src={`https://picsum.photos/seed/${animal.seed}/400/400`}
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
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
                src="https://picsum.photos/seed/wolfdogtraining/800/1000"
                alt="Wolf-like dog in training on the farm"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
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
              Premier Dog<br />Training
            </h2>
            <p className="text-2xl text-sage font-bold mb-8">
              Real-world obedience for every lifestyle.
            </p>
            <div className="space-y-6 text-cream/90 text-xl leading-relaxed mb-12 font-medium">
              <p>
                Because our training program operates in the heart of a working farm, our philosophy is entirely grounded in reality. The sights, sounds, and active movement of agricultural life provide the ultimate environment for proofing behavior.
              </p>
              <p>
                We don't train in sterile, controlled settings. We build clear-minded dogs with strong foundational obedience, true off-leash reliability, and dependable recall.
              </p>
              <div className="bg-teal-950 p-6 rounded-2xl border-2 border-teal-800">
                <p className="font-bold text-sage-light">
                  Every breed, every age, and every behavioral goal is welcome in our program.
                </p>
              </div>
            </div>
            <Link to="/training" className={btnSecondary}>
              View Training Programs
              <ChevronRight className="ml-2 h-6 w-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-teal-950 text-cream pt-24 pb-12 relative overflow-hidden">
      {/* Massive playful background watermark */}
      <PawPrint className="absolute -bottom-24 -right-24 w-[500px] h-[500px] text-teal-900/30 -rotate-12 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-sage p-3 rounded-2xl border-2 border-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]">
                <Dog className="h-8 w-8 text-teal-900" />
              </div>
              <span className="font-display font-bold text-4xl text-cream tracking-tight">Pasture & Paw</span>
            </div>
            <p className="text-2xl font-display text-sage mb-8 font-bold">
              Excellence in Agriculture.<br />Reliability in Training.
            </p>
            <p className="text-cream/70 max-w-md text-lg font-medium">
              Pasture & Paw is a working agricultural farm and private canine training facility.
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
                  <span>123 Farm Road<br />Seattle County, WA 98000</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-2xl mb-8 text-sage">Follow Along</h4>
            <a href="#" className="inline-flex items-center gap-4 text-cream/90 hover:text-sage transition-colors text-lg font-medium group">
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
          <Route path="/farm/highlander-cattle" element={<PlaceholderPage title="Highlander Cattle" description="Learn about our Highlander Cattle breeding program." backLink="/farm" />} />
          <Route path="/farm/dexter-cattle" element={<PlaceholderPage title="Dexter Cattle" description="Learn about our Dexter Cattle." backLink="/farm" />} />
          <Route path="/farm/norwegian-goats" element={<PlaceholderPage title="Norwegian Goats" description="Learn about our Norwegian Goats." backLink="/farm" />} />
          <Route path="/farm/silver-fox-rabbits" element={<PlaceholderPage title="Silver Fox Rabbits" description="Learn about our Silver Fox Rabbits." backLink="/farm" />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
