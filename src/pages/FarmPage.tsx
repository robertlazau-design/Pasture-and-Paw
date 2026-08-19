import { motion } from 'motion/react';
import { Leaf, Sprout, PawPrint, ArrowRight, ArrowLeft, Sun, Heart, CheckCircle2, Utensils, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";
const btnSecondary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-cream text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const animals = [
  {
    name: 'Highlander Cattle',
    image: '/images/highland-cattle.png',
    color: 'bg-clay',
    slug: 'highlander-cattle',
    description: 'Known for their docile nature and hardiness, our Highlander herd is the heart of our pasture management, contributing to soil health and sustainable grazing.',
  },
  {
    name: 'Dexter Cattle',
    image: '/images/dexter-cattle.png',
    color: 'bg-sage',
    slug: 'dexter-cattle',
    description: 'A smaller, dual-purpose breed that thrives on our diverse pastures. They are efficient foragers and perfect for our regenerative agriculture model.',
  },
  {
    name: 'Norwegian Goats',
    image: '/images/norwegian-goats.png',
    color: 'bg-teal-800',
    slug: 'norwegian-goats',
    description: 'Our primary brush management team. These goats help clear invasive species and maintain the delicate balance of our wooded pasture areas.',
  },
  {
    name: 'Silver Fox Rabbits',
    image: '/images/silver-fox-rabbit.png',
    color: 'bg-clay',
    slug: 'silver-fox-rabbits',
    description: 'A heritage breed we raise with a focus on preserving genetic diversity and supporting local 4-H youth agricultural programs.',
  },
];

const wellnessIncludes = [
  { icon: Sun, text: 'Guided morning farm walk and animal feeding rounds' },
  { icon: Heart, text: 'Hands-on interaction with Highlander cattle, Norwegian goats, and Silver Fox rabbits' },
  { icon: Utensils, text: 'A seasonal farm-to-table lunch prepared with ingredients from our garden' },
  { icon: Flower2, text: 'Afternoon mindfulness session in the pasture' },
  { icon: Leaf, text: 'Take-home farm goods basket' },
];

export default function FarmPage() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-sage rounded-xl border-2 border-teal-900 mb-6 shadow-[4px_4px_0px_0px_#0B3B3C]">
              <Sprout className="h-8 w-8 text-teal-900" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl font-bold text-teal-900 mb-6 leading-tight">
              The Working <br/>
              <span className="text-clay">Farm</span>
            </h1>
            <p className="text-2xl text-teal-900/80 font-medium mb-8 leading-relaxed">
              Where ethical breeding, land stewardship, and regenerative agriculture meet daily practice.
            </p>
            <Link to="/contact?service=farm" className={btnPrimary}>
              Book a Farm Visit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] bg-sage">
               <img
                src="/images/farm-hero.png"
                alt="Aerial view of Pasture & Paw working farm"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div 
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-cream border-4 border-teal-900 p-6 rounded-full shadow-[8px_8px_0px_0px_#0B3B3C] w-32 h-32 flex flex-col items-center justify-center"
            >
              <Leaf className="h-8 w-8 text-sage mb-1" />
              <p className="font-display font-bold text-teal-900 text-sm text-center leading-tight">100%<br/>Pasture</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-teal-950 text-cream py-24 mb-24 relative overflow-hidden">
         <PawPrint className="absolute top-10 right-10 w-64 h-64 text-teal-900/30 rotate-12 pointer-events-none" />
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Stewardship as a Lifestyle</h2>
            <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
              <p>
                Our pastures are more than just open space; they are actively managed ecosystems. We practice rotational grazing, utilizing different species to naturally manage the land, build soil health, and reduce reliance on synthetic inputs.
              </p>
              <p>
                Every animal on our farm serves a distinct purpose, from our heavy-grazing cattle to our brush-clearing goats. This symbiotic relationship between livestock and land is the foundation of Pasture & Paw.
              </p>
            </div>
         </div>
      </section>

      {/* Our Animals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-display text-5xl font-bold text-teal-900 mb-4 text-center">Meet the Herds</h2>
        <p className="text-xl text-teal-900/70 font-medium text-center mb-16 max-w-2xl mx-auto">
          Click on any breed to learn about their history, temperament, and role on our farm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {animals.map((animal, index) => (
            <Link to={`/farm/${animal.slug}`} key={animal.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-sage-light rounded-[2rem] p-8 border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] flex flex-col h-full group cursor-pointer"
              >
                <div className={`aspect-[16/9] rounded-xl overflow-hidden mb-8 border-4 border-teal-900 ${animal.color} relative`}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-teal-900/20 transition-opacity z-10 flex items-center justify-center">
                    <span className="bg-cream px-6 py-3 rounded-xl border-2 border-teal-900 font-bold text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C]">
                      Learn More
                    </span>
                  </div>
                   <img
                      src={animal.image}
                      alt={animal.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <h3 className="font-display font-bold text-3xl text-teal-900 mb-4">
                  {animal.name}
                </h3>
                <p className="text-teal-900/80 text-lg font-medium leading-relaxed flex-grow">
                  {animal.description}
                </p>
                <div className="mt-6 inline-flex items-center text-teal-900 font-bold group-hover:text-clay transition-colors">
                  View Breed Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Farm Wellness Experience */}
      <section className="relative overflow-hidden mb-24">
        {/* Wavy top divider */}
        <div className="w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,192.27,101.5,235.9,88.94,278.43,73.5,321.39,56.44Z" className="fill-sage-light"></path>
          </svg>
        </div>

        <div className="bg-sage-light py-24 border-y-4 border-teal-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-clay text-cream px-5 py-2 rounded-full border-2 border-teal-900 mb-6 shadow-[4px_4px_0px_0px_#0B3B3C]">
                  <Flower2 className="h-5 w-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">New Offering</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6 leading-tight">
                  Farm Wellness<br/>
                  <span className="text-clay">Experience</span>
                </h2>
                <p className="text-2xl text-teal-900 font-bold mb-6 italic">
                  A full-day immersion on our working farm designed to reset your nervous system and reconnect you to the land.
                </p>
                <div className="space-y-6 text-xl text-teal-900/80 font-medium leading-relaxed mb-8">
                  <p>
                    The Farm Wellness Experience is not a spa day — it's something deeper. Spend the morning with your hands in the soil alongside our team, participate in guided animal interactions with our heritage livestock, and learn the rhythms of regenerative agriculture firsthand.
                  </p>
                  <p>
                    Grounded in the belief that proximity to animals, open land, and purposeful physical work has a measurable impact on human well-being, this experience was designed for individuals, small groups, and corporate teams seeking something more meaningful than a conference room retreat.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact?service=wellness" className={btnPrimary}>
                    Book Your Experience
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
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] bg-clay">
                  <img
                    src="/images/farm-wellness.jpg"
                    alt="Guests interacting with Highland cattle and goats during a Farm Wellness Experience"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 bg-cream border-4 border-teal-900 p-5 rounded-2xl shadow-[8px_8px_0px_0px_#0B3B3C] hidden md:block"
                >
                  <p className="font-display font-bold text-teal-900 text-center">
                    <span className="text-3xl text-clay">Full</span><br/>
                    <span className="text-lg">Day Experience</span>
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-cream rounded-[2rem] p-10 md:p-12 border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C]"
            >
              <h3 className="font-display text-3xl font-bold text-teal-900 mb-10 text-center">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wellnessIncludes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-sage-light rounded-xl border-2 border-teal-900 shrink-0">
                      <item.icon className="h-6 w-6 text-teal-900" />
                    </div>
                    <p className="text-lg text-teal-900/80 font-medium leading-relaxed pt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-sage-light rounded-2xl border-2 border-teal-900 text-center">
                <p className="text-teal-900 font-bold text-lg">
                  Available for individuals, small groups (up to 8), and private corporate bookings.
                </p>
                <p className="text-teal-900/70 font-medium mt-2">
                  Contact us for seasonal availability and group rates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
