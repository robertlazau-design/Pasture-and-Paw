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
    lifespan: '15 to 20 years',
    roleOnFarm: 'Primary grazers & soil health managers',
    description: [
      'Our Scottish Highland cattle form the foundation of our pasture rotation. Developed over centuries in the Scottish Highlands, this ancient breed thrives in cold, wet weather with very little intervention. That natural toughness makes them ideal partners for managing Pacific Northwest land.',
      'Beyond their iconic wavy coats and wide horns, Highlanders are remarkably efficient foragers. They readily graze coarse brush, weeds, and rough grasses that other cattle leave behind, clearing pastures naturally and improving soil health as they move.',
      'We rotate our Highlanders across dedicated paddocks on a planned schedule. Moving the herd gives previously grazed fields time to rest and rebuild deep root systems, which increases native plant diversity and enriches topsoil without commercial fertilizers.',
    ],
    characteristics: [
      'Double-layered coat provides natural insulation year-round',
      'Exceptionally low-maintenance and disease-resistant',
      'Gentle, steady disposition that makes them calm around guests and visitors',
      'Efficient foragers on rough, brushy terrain',
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
    lifespan: '18 to 20 years',
    roleOnFarm: 'Dual-purpose breed & pasture diversity',
    description: [
      'Dexters are one of the smallest traditional cattle breeds, originating in the rugged hills of southern Ireland. Standing roughly 36 to 44 inches at the shoulder, these compact animals are a classic dual-purpose breed, prized for both rich milk and quality beef.',
      'Our Dexters graze right alongside our pasture management goals. Because they are light on their feet, they can graze tender replanted areas and damp ground without crushing the soil structure. They convert grass into milk and body condition efficiently on smaller acreage.',
      'Dexters are curious, smart, and quick to learn farm routines. They form close bonds with their handlers, which makes them wonderful candidates for youth education, farm demonstrations, and beginner livestock owners.',
    ],
    characteristics: [
      'Compact breed well suited for homesteads and small-acreage farms',
      'Dual-purpose: quality beef and rich, high-butterfat milk',
      'Minimal soil compaction due to smaller frame and lighter hooves',
      'Hardy and adaptable to varied climates and terrain',
      'Strong foraging instincts reduce supplemental feeding needs',
    ],
    farmStory: 'We introduced our first Dexter trio in 2020 specifically to diversify our grazing program. Their gentle nature and manageable size have made them a favorite among our visitors and the first animals we introduce to anyone new to cattle. Our small herd has grown steadily, and we occasionally have registered calves available for other small farms.',
  },
  'norwegian-goats': {
    name: 'Norwegian Goats',
    subtitle: 'Our Natural Brush Clearing Team',
    heroImage: '/images/norwegian-goats.png',
    heroColor: 'bg-teal-800',
    origin: 'Norway / Scandinavia',
    temperament: 'Curious, Social, Energetic',
    lifespan: '12 to 15 years',
    roleOnFarm: 'Invasive species control & wooded pasture management',
    description: [
      'Norwegian dairy goats, historically known as Norsk melkegeit, were bred for harsh Scandinavian mountain pastures. Their sure footing and natural appetite for brush make them ideal for cleaning up wooded hillsides and steep slopes where cattle cannot easily walk.',
      'Our goats target Himalayan blackberry, scotch broom, and thistle with unmatched enthusiasm. They clear dense overgrowth without gas-powered mowers or chemical sprays, transforming wild thickets back into sunny, usable pasture.',
      'They are also the friendliest characters on the farm. Playful, inquisitive, and eager for chin scratches, the goats are usually the first to greet visitors at the pasture gate and the hardest to leave at the end of a tour.',
    ],
    characteristics: [
      'Natural browsers that relish invasive wild blackberries, thistle, and woody brush',
      'Sure-footed and agile on steep or uneven hillside terrain',
      'Highly social and thrive in herd environments',
      'Cold-hardy with a dense undercoat developed for Scandinavian winters',
      'Naturally curious and friendly with handlers and guests',
    ],
    farmStory: 'Our goat program began as a practical solution to an invasive blackberry problem on our back acreage. What started as four goats has grown into a managed herd that rotates through our wooded areas on a seasonal schedule. The transformation of previously overgrown land into usable pasture has been one of the most visible success stories on the farm.',
    fourHInfo: 'We support local 4-H dairy goat projects by providing mentorship, breeding stock, and hands-on showmanship training for youth participants.',
  },
  'silver-fox-rabbits': {
    name: 'Silver Fox Rabbits',
    subtitle: 'Preserving an American Heritage Breed',
    heroImage: '/images/silver-fox-rabbit.png',
    heroColor: 'bg-clay',
    origin: 'United States (Ohio, 1925)',
    temperament: 'Gentle, Docile, Even-tempered',
    lifespan: '7 to 10 years',
    roleOnFarm: 'Heritage breed preservation & youth agricultural education',
    description: [
      'Developed in Ohio during the 1920s, the Silver Fox is one of the few rabbit breeds created entirely in the United States. Today it is recognized by the Livestock Conservancy as a threatened heritage breed. Our breeding program works to preserve these genetics and keep strong bloodlines thriving.',
      'Named for their silver-tipped dark fur that stands upright when stroked toward the head, Silver Foxes are exceptionally docile. Their relaxed nature makes them easy to hold and handle, which makes them ideal for children, first-time 4-H members, and hands-on farm visits.',
      'We work with a network of heritage breeders across the Pacific Northwest to exchange breeding stock and protect genetic diversity. Each litter is handled daily from a young age so they grow up calm, friendly, and well-socialized.',
    ],
    characteristics: [
      'Rare heritage breed protected through active conservation breeding',
      'Distinctive silver-tipped fur with a unique "stand-up" coat texture',
      'Substantial size (9 to 12 pounds) paired with a sweet, quiet personality',
      'Exceptional candidate for youth agricultural programs and 4-H shows',
      'Cold-hardy and well adapted to outdoor housing in the Pacific Northwest',
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
        <div className="absolute top-4 right-6 w-72 h-72 opacity-10 pointer-events-none select-none">
          <img src="/images/logo-light.png" alt="" className="w-full h-full object-contain rotate-12" />
        </div>
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
