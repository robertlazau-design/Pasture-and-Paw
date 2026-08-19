import { motion } from 'motion/react';
import { ArrowLeft, Leaf, Sprout, PawPrint, Heart, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const btnPrimary = "inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl border-2 border-teal-900 bg-sage text-teal-900 shadow-[4px_4px_0px_0px_#0B3B3C] hover:shadow-[2px_2px_0px_0px_#0B3B3C] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200";

interface BreedData {
  name: string;
  subtitle: string;
  heroImage: string;
  heroColor: string;
  origin: string;
  temperament: string;
  lifespan: string;
  roleOnFarm: string;
  description: string[];
  characteristics: string[];
  farmStory: string;
  fourHInfo?: string;
}

const breeds: Record<string, BreedData> = {
  'highlander-cattle': {
    name: 'Highlander Cattle',
    subtitle: 'The Hardy Heart of Our Pastures',
    heroImage: '/images/highland-cattle.png',
    heroColor: 'bg-clay',
    origin: 'Scottish Highlands',
    temperament: 'Docile, Calm, Hardy',
    lifespan: '15–20 years',
    roleOnFarm: 'Primary grazers & soil health managers',
    description: [
      'Our Highland cattle are the cornerstone of our pasture management program. Originating from the rugged Scottish Highlands, this ancient breed has evolved over centuries to thrive in harsh climates with minimal intervention — a quality that makes them perfectly suited for our regenerative approach to land stewardship.',
      'With their distinctive long, wavy coats and sweeping horns, Highlanders are often admired for their striking appearance. But beneath that iconic look is an exceptionally efficient grazer. Their broad muzzles allow them to forage on rough vegetation that other breeds avoid, making them natural land managers who improve pasture quality simply by doing what they do best.',
      'Our Highlander herd plays a critical role in our rotational grazing system. By moving them through designated paddocks on a scheduled rotation, we allow grazed areas to rest and regenerate — building topsoil, encouraging native plant diversity, and sequestering carbon naturally.',
    ],
    characteristics: [
      'Double-layered coat provides natural insulation year-round',
      'Exceptionally low-maintenance and disease-resistant',
      'Calm, gentle disposition — safe around visitors and children',
      'Efficient foragers on rough, marginal terrain',
      'Long-lived breed with strong maternal instincts',
    ],
    farmStory: 'Our founding pair arrived in 2019, and we have carefully grown the herd through selective, ethical breeding practices. Each calf born on our farm is registered, health-tracked, and raised on open pasture from day one. Several of our yearlings have gone on to seed herds at other small farms in the Pacific Northwest.',
    fourHInfo: 'We partner with local 4-H chapters to provide youth members with hands-on cattle husbandry experience. Several of our heifers have been raised and shown by 4-H participants at the county fair level.',
  },
  'dexter-cattle': {
    name: 'Dexter Cattle',
    subtitle: 'Small in Stature, Big in Purpose',
    heroImage: '/images/dexter-cattle.png',
    heroColor: 'bg-sage',
    origin: 'Southern Ireland',
    temperament: 'Friendly, Intelligent, Adaptable',
    lifespan: '18–20 years',
    roleOnFarm: 'Dual-purpose breed & pasture diversity',
    description: [
      'Dexter cattle are one of the smallest European cattle breeds, originally developed in the mountainous regions of southern Ireland. Despite their compact size — typically standing just 36 to 44 inches at the shoulder — Dexters are a true dual-purpose breed, valued for both high-quality beef and rich, creamy milk.',
      'On our farm, the Dexters serve a complementary role to our larger Highlanders. Their smaller hooves cause less soil compaction, making them ideal for grazing sensitive riparian areas and newly seeded pastures. Their efficient feed conversion ratio means they thrive on less acreage, making them a practical choice for sustainable small-farm operations.',
      'Dexters are also known for their intelligence and strong personalities. They are quick learners, respond well to routine, and form close bonds with their handlers — traits that make them excellent candidates for educational programs and farm demonstrations.',
    ],
    characteristics: [
      'One of the smallest cattle breeds — ideal for small acreage',
      'Dual-purpose: quality beef and rich, high-butterfat milk',
      'Minimal soil compaction due to smaller frame and hooves',
      'Hardy and adaptable to varied climates and terrain',
      'Strong foraging instincts reduce supplemental feeding needs',
    ],
    farmStory: 'We introduced our first Dexter trio in 2020 specifically to diversify our grazing program. Their gentle nature and manageable size have made them a favorite among our visitors and the first animals we introduce to anyone new to cattle. Our small herd has grown steadily, and we occasionally have registered calves available for other small farms.',
  },
  'norwegian-goats': {
    name: 'Norwegian Goats',
    subtitle: 'Our Natural Brush Management Team',
    heroImage: '/images/norwegian-goats.png',
    heroColor: 'bg-teal-800',
    origin: 'Norway / Scandinavia',
    temperament: 'Curious, Social, Energetic',
    lifespan: '12–15 years',
    roleOnFarm: 'Invasive species control & wooded pasture management',
    description: [
      'Norwegian goats — sometimes referred to as Norsk melkegeit — are a hardy, adaptable dairy breed developed over centuries in the mountainous terrain of Scandinavia. Their natural browsing behavior and sure-footedness make them invaluable for managing the wooded and hillside areas of our property that cattle cannot efficiently graze.',
      'On our farm, the goats serve as our primary brush management team. They target invasive species like blackberry, scotch broom, and thistle with remarkable enthusiasm, clearing areas that would otherwise require mechanical or chemical intervention. This biological approach to land management is central to our regenerative philosophy.',
      'Beyond their practical role, our Norwegian goats are some of the most personable animals on the farm. Their curiosity, playfulness, and social nature make them a highlight of every farm visit. They are often the first animals guests want to interact with — and the last ones they want to leave.',
    ],
    characteristics: [
      'Exceptional browsers — prefer woody shrubs and invasive plants over grass',
      'Sure-footed and agile on steep or uneven terrain',
      'Highly social and thrive in herd environments',
      'Cold-hardy with a dense undercoat developed for Scandinavian winters',
      'Naturally curious and interactive with humans',
    ],
    farmStory: 'Our goat program began as a practical solution to an invasive blackberry problem on our back acreage. What started as four goats has grown into a managed herd that rotates through our wooded areas on a seasonal schedule. The transformation of previously overgrown land into usable pasture has been one of the most visible success stories on the farm.',
    fourHInfo: 'We support local 4-H dairy goat projects by providing mentorship, breeding stock, and hands-on showmanship training for youth participants.',
  },
  'silver-fox-rabbits': {
    name: 'Silver Fox Rabbits',
    subtitle: 'Preserving a Heritage Breed',
    heroImage: '/images/silver-fox-rabbit.png',
    heroColor: 'bg-clay',
    origin: 'United States (Ohio, 1925)',
    temperament: 'Gentle, Docile, Even-tempered',
    lifespan: '7–10 years',
    roleOnFarm: 'Heritage breed preservation & youth agricultural education',
    description: [
      'The Silver Fox rabbit is a rare American heritage breed developed in the 1920s by Walter B. Garland of North Canton, Ohio. It is one of only a handful of rabbit breeds developed entirely in the United States and is recognized by the American Livestock Breeds Conservancy as a breed in need of conservation. Our rabbitry exists specifically to support this preservation effort.',
      'Named for their unique silver-tipped fur that closely resembles the pelt of an Arctic silver fox, these rabbits are a large, docile breed with a calm, even temperament. They are among the most handleable rabbit breeds, making them ideal for educational settings, youth programs, and therapeutic animal interactions.',
      'On our farm, the Silver Fox rabbits serve primarily as an educational and conservation project. They are raised with a focus on maintaining genetic diversity within the breed, and we work with a network of other heritage breeders to ensure healthy bloodlines are preserved for future generations.',
    ],
    characteristics: [
      'Rare heritage breed — listed as "threatened" by the Livestock Conservancy',
      'Distinctive silver-tipped fur with a unique "stand-up" quality',
      'Large breed (9–12 lbs) with a gentle, docile temperament',
      'Excellent for youth agricultural programs and 4-H shows',
      'Cold-hardy and adaptable to outdoor hutch environments',
    ],
    farmStory: 'Our Silver Fox program is a labor of love and a commitment to breed conservation. We maintain a carefully managed breeding colony with unrelated bloodlines sourced from heritage breeders across the Pacific Northwest. Each litter is pedigreed, health-screened, and either retained for our program or placed with other conservation-minded breeders.',
    fourHInfo: 'This is the heart of our 4-H partnership. We provide starter breeding trios to local 4-H rabbit project members, along with mentorship in husbandry, showmanship, and responsible breeding practices. Several of our rabbits have earned Best of Breed at the county and state fair level.',
  },
};

export default function BreedPage() {
  const { slug } = useParams<{ slug: string }>();
  const breed = slug ? breeds[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!breed) {
    return (
      <div className="min-h-screen bg-cream pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl font-bold text-teal-900 mb-6">Breed Not Found</h1>
          <p className="text-xl text-teal-900/80 font-medium mb-8">We couldn't find the breed you're looking for.</p>
          <Link to="/farm" className={btnPrimary}>Back to Farm</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream pt-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <Link to="/farm" className="inline-flex items-center text-teal-900 font-bold hover:text-sage transition-colors mb-12">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Farm
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
            <h1 className="font-display text-5xl md:text-7xl font-bold text-teal-900 mb-4 leading-tight">
              {breed.name}
            </h1>
            <p className="text-2xl text-clay font-bold mb-6">{breed.subtitle}</p>
            <p className="text-xl text-teal-900/80 font-medium leading-relaxed">
              {breed.description[0]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`aspect-square rounded-[2rem] overflow-hidden border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C] ${breed.heroColor}`}>
              <img
                src={breed.heroImage}
                alt={breed.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-teal-950 text-cream py-16 mb-24 relative overflow-hidden">
        <PawPrint className="absolute top-10 right-10 w-64 h-64 text-teal-900/30 rotate-12 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Origin', value: breed.origin },
              { label: 'Temperament', value: breed.temperament },
              { label: 'Lifespan', value: breed.lifespan },
              { label: 'Role on Farm', value: breed.roleOnFarm },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sage font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="font-display font-bold text-xl text-cream">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {breed.description.slice(1).map((paragraph, i) => (
            <p key={i} className="text-xl text-teal-900/80 font-medium leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>

      {/* Characteristics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-teal-900 mb-8 flex items-center gap-3">
              <Leaf className="w-10 h-10 text-sage" />
              Key Characteristics
            </h2>
            <ul className="space-y-5">
              {breed.characteristics.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-7 h-7 text-clay shrink-0 mt-0.5" />
                  <span className="text-lg text-teal-900/80 font-medium leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-sage-light rounded-[2rem] p-10 border-4 border-teal-900 shadow-[12px_12px_0px_0px_#0B3B3C]"
          >
            <h2 className="font-display text-3xl font-bold text-teal-900 mb-6">Our Story with {breed.name.split(' ')[0]}s</h2>
            <p className="text-lg text-teal-900/80 font-medium leading-relaxed mb-8">{breed.farmStory}</p>
            
            {breed.fourHInfo && (
              <div className="bg-cream rounded-2xl p-6 border-2 border-teal-900">
                <h3 className="font-bold text-teal-900 text-lg mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-clay" />
                  4-H Partnership
                </h3>
                <p className="text-teal-900/80 font-medium leading-relaxed">{breed.fourHInfo}</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-teal-900 rounded-[2rem] p-12 border-4 border-teal-950 shadow-[12px_12px_0px_0px_#052223]"
        >
          <h2 className="font-display text-4xl font-bold text-cream mb-4">Want to Meet Our {breed.name}?</h2>
          <p className="text-xl text-cream/80 font-medium mb-8">
            Schedule a farm visit to see our animals in person and learn about our breeding program.
          </p>
          <Link to="/contact?service=farm" className={btnPrimary}>
            Book a Farm Visit
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
