import { motion } from 'motion/react';
import { Leaf, Sprout, PawPrint, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

const animals = [
  {
    name: 'Highlander Cattle',
    seed: 'highlandcow',
    color: 'bg-clay',
    description: 'Known for their docile nature and hardiness, our Highlander herd is the heart of our pasture management, contributing to soil health and sustainable grazing.',
  },
  {
    name: 'Dexter Cattle',
    seed: 'dextercow',
    color: 'bg-sage',
    description: 'A smaller, dual-purpose breed that thrives on our diverse pastures. They are efficient foragers and perfect for our regenerative agriculture model.',
  },
  {
    name: 'Norwegian Goats',
    seed: 'goat',
    color: 'bg-teal-800',
    description: 'Our primary brush management team. These goats help clear invasive species and maintain the delicate balance of our wooded pasture areas.',
  },
  {
    name: 'Silver Fox Rabbits',
    seed: 'rabbit',
    color: 'bg-clay',
    description: 'A heritage breed we raise with a focus on preserving genetic diversity and supporting local 4-H youth agricultural programs.',
  },
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
            <Link to="/booking" className={btnPrimary}>
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
                src="https://picsum.photos/seed/farmfield/800/600"
                alt="Lush green pastures on the farm"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-5xl font-bold text-teal-900 mb-16 text-center">Meet the Herds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {animals.map((animal, index) => (
            <motion.div
              key={animal.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-sage-light rounded-[2rem] p-8 border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] flex flex-col h-full"
            >
              <div className={`aspect-[16/9] rounded-xl overflow-hidden mb-8 border-4 border-teal-900 ${animal.color}`}>
                 <img
                    src={`https://picsum.photos/seed/${animal.seed}/800/450`}
                    alt={animal.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
              </div>
              <h3 className="font-display font-bold text-3xl text-teal-900 mb-4">
                {animal.name}
              </h3>
              <p className="text-teal-900/80 text-lg font-medium leading-relaxed flex-grow">
                {animal.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
