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
    description: 'The heart of our pastures. Known for their calm temperament and thick double coats, our Scottish Highlands thrive on rough forage, help rebuild healthy topsoil as we rotate paddocks, and handle Pacific Northwest weather with ease.',
  },
  {
    name: 'Dexter Cattle',
    image: '/images/dexter-cattle.png',
    color: 'bg-sage',
    slug: 'dexter-cattle',
    description: 'A small-framed heritage breed from Ireland known for friendly personalities and rich milk. Because they are lighter on their feet, they graze our hillside pastures and newly planted paddocks without packing down the soil.',
  },
  {
    name: 'Norwegian Goats',
    image: '/images/norwegian-goats.png',
    color: 'bg-teal-800',
    slug: 'norwegian-goats',
    description: 'Our natural brush clearing team and farm favorites. These hardy Scandinavian goats love munching on wild blackberry vines, thistle, and woody shrubs, opening up overgrown ground naturally while delighting every visitor who stops by.',
  },
  {
    name: 'Silver Fox Rabbits',
    image: '/images/silver-fox-rabbit.png',
    color: 'bg-clay',
    slug: 'silver-fox-rabbits',
    description: 'A gentle American heritage breed with silver-tipped fur and a docile disposition. We maintain a pedigreed breeding line to help protect this rare breed, while mentoring local 4-H students in animal husbandry and showmanship.',
  },
];

const wellnessIncludes = [
  { icon: Sun, text: 'Morning pasture walk and hands-on morning chore rounds' },
  { icon: Heart, text: 'Up-close time grooming and feeding our Scottish Highlands, goats, and rabbits' },
  { icon: Utensils, text: 'Fresh seasonal farm lunch prepared with locally sourced ingredients' },
  { icon: Flower2, text: 'Relaxed afternoon pasture walkthrough and regenerative farming discussion' },
  { icon: Leaf, text: 'Basket of seasonal farm goods to take home' },
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
              Rotational grazing, heritage livestock, and healthy soil are part of our everyday chores. We work with the land so it stays rich and productive for years to come.
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
              className="absolute -bottom-8 -left-8 bg-cream border-4 border-teal-900 p-3 rounded-full shadow-[8px_8px_0px_0px_#0B3B3C] w-36 h-36 flex flex-col items-center justify-center"
            >
              <img src="/images/logo-teal.png" alt="Pasture & Paw Emblem" className="w-16 h-16 object-contain mb-1" />
              <p className="font-display font-bold text-teal-900 text-xs text-center leading-tight uppercase tracking-wider">Working<br/>Farm</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-teal-950 text-cream py-24 mb-24 relative overflow-hidden">
         <div className="absolute top-6 right-6 w-80 h-80 opacity-10 pointer-events-none select-none">
           <img src="/images/logo-light.png" alt="" className="w-full h-full object-contain rotate-12" />
         </div>
         
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Working With the Land</h2>
            <div className="space-y-6 text-xl text-cream/90 font-medium leading-relaxed">
              <p>
                Good pasture does not happen by accident. We rotate our cattle and goats through designated paddocks on a steady schedule, giving grazed grass ample time to rest and grow deep root systems. This natural cycle builds dark, rich topsoil, brings back native grasses, and keeps the fields healthy without synthetic fertilizers.
              </p>
              <p>
                Each animal here has an important job. The Highland and Dexter cattle keep open fields grazed down evenly. The Norwegian goats work along tree lines and slopes to clean up invasive blackberry and brush. Our Silver Fox rabbits give local youth a hands-on introduction to heritage livestock through 4-H. Bringing these animals together keeps the entire property thriving.
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

      {/* Farm Immersion Experience */}
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
                  <span className="font-bold text-sm uppercase tracking-wider">Farm Visits &amp; Days</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-6 leading-tight">
                  The Full Farm<br/>
                  <span className="text-clay">Experience</span>
                </h2>
                <p className="text-2xl text-teal-900 font-bold mb-6">
                  Spend an unhurried day out on the acreage getting your boots dirty, meeting the herds, and experiencing life on a working family farm.
                </p>
                <div className="space-y-6 text-xl text-teal-900/80 font-medium leading-relaxed mb-8">
                  <p>
                    This is an authentic, hands-on day in the open air. You will join our team out in the fields, help with morning feeding, learn how rotational grazing works up close, and spend relaxed time with our Scottish Highland cattle, dairy goats, and rabbits.
                  </p>
                  <p>
                    Taking a break from screens to work with your hands and be around animals clears the head in a way few other things can. We welcome individuals, families, small private groups, and team retreats looking for an honest, refreshing day on the land.
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
                  Available for individuals, small groups (up to 8), and private bookings.
                </p>
                <p className="text-teal-900/70 font-medium mt-2">
                  Contact us for seasonal scheduling and group rates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
