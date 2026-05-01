import { useState, useEffect } from "react";
import appleIcon from "@/assets/apple.svg";
import { MobileCarousel } from "./MobileCarousel";
import a1 from "@/assets/avatar-1.webp";
import a2 from "@/assets/avatar-2.webp";
import a3 from "@/assets/avatar-3.webp";
import a4 from "@/assets/avatar-4.webp";
import water from "@/assets/product-water.webp";
import crackers from "@/assets/product-crackers.webp";
import bagels from "@/assets/product-bagels.webp";
import bar from "@/assets/product-bar.webp";
import chips from "@/assets/product-chips.webp";
import icecream from "@/assets/product-icecream.webp";
import { Reveal, RevealItem } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Share2 } from "lucide-react";

const products = [
  { 
    name: "Sparkling Natural Mineral Water", 
    brand: "San Pellegrino", 
    score: 52, 
    rating: "Limit", 
    img: water,
    type: "water",
    attributes: [
      { label: "Contaminants", value: "7", status: "bad", icon: "⚠️" },
      { label: "Fluoride", value: "Yes", status: "bad", icon: "🧪" },
      { label: "PFAS", value: "No", status: "good", icon: "🛡️" },
      { label: "Microplastics", value: "Minimal", status: "good", icon: "💧" },
      { label: "pH Level", value: "5.7", status: "neutral", icon: "📈" },
    ],
    detailCard: { title: "Nitrate", sub: "0.75 mg/L", badge: "5x limit" }
  },
  { name: "Organic Sea Salt", brand: "Late July", score: 85, rating: "Good", msg: "High quality ingredients, though slightly elevated sodium levels.", img: crackers },
  { name: "Whole Grain Bagels", brand: "Dave's Killer", score: 92, rating: "Excellent", msg: "Rich in fiber and protein with zero artificial preservatives.", img: bagels },
  { name: "Nut Butter Bar", brand: "LÄRABAR", score: 98, rating: "Excellent", msg: "Simple, real ingredients. A perfect clean snack option.", img: bar },
  { name: "Veggie Chips", brand: "Terra", score: 70, rating: "Fair", msg: "Real vegetables but processed in sunflower oil.", img: chips },
  { name: "Vanilla Bean", brand: "Straus Organic", score: 88, rating: "Good", msg: "Clean dairy source, but high in natural sugars.", img: icecream },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Slowed Auto-scroll logic: 10 seconds per product cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <section className="relative overflow-hidden">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center flex flex-col items-center">
        {/* Trusted Badge */}
        <RevealItem className="inline-flex items-center gap-3">
          <div className="flex -space-x-2">
            {[a1, a2, a3, a4].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
            <div className="h-6 w-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[9px] font-bold text-gray-400 shadow-sm">
              3k+
            </div>
          </div>
          <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-tight">
            Trusted by thousands of healthy families
          </span>
        </RevealItem>

        <RevealItem as="h1" className="mt-8 font-poppins font-normal text-3xl sm:text-4xl lg:text-6xl text-primary leading-[1.1] tracking-tight max-w-4xl mx-auto">
          The Safest Way to <br /> Shop for Groceries 
        </RevealItem>

        <RevealItem as="p" className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-foreground/60 leading-relaxed font-medium">
          Use the Olive Food Scanner App to Instantly Eliminate <br/>Harmful Ingredients
          from Your Family's Diet and Get <br/>Expert‑Backed Food Insights
        </RevealItem>

        <RevealItem>
          <a
            id="download"
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs sm:text-sm font-semibold hover:opacity-95 transition shadow-lg"
          >
            <img src={appleIcon} alt="" className="h-5 w-5 invert" /> Download for iOS
          </a>
        </RevealItem>
      </Reveal>

      {/* Phone + Product Interaction */}
      <div className="relative mt-8 pb-0 flex flex-col items-center">
        {/* Focused Stepped Carousel - Now behind the description/phone */}
        <div className="absolute top-[24%] w-full z-0 flex justify-center pointer-events-none">
          <div className="flex items-center gap-2 sm:gap-4 pointer-events-auto">
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (activeIndex + offset + products.length) % products.length;
              const product = products[index];
              const isCenter = offset === 0;
              const isOuter = Math.abs(offset) === 2;

              return (
                <motion.div
                  key={`${index}-${offset}`}
                  animate={{
                    opacity: isCenter ? 1 : 0.7,
                    scale: isCenter ? 1.4 : 0.9, 
                    y: isCenter ? 0 : 10,
                  }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative h-[68px] w-[68px] sm:h-[90px] sm:w-[90px] rounded-2xl bg-card shadow-sm border transition-all duration-300 flex items-center justify-center overflow-hidden ${isCenter ? 'border-primary shadow-2xl z-10 p-0' : 'border-border/60 z-0 p-2'}`}
                >
                  <img 
                    src={product.img} 
                    alt="" 
                    className={`w-full h-full object-cover transition-transform duration-700 ${isCenter ? 'scale-125' : 'scale-110'}`} 
                    loading="lazy" 
                  />
                  
                  {isCenter && (
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-2 border-primary"
                      animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Phone Preview */}
        <motion.div
          className="relative z-10 mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <MobileCarousel>
            <div className="h-full relative flex flex-col bg-transparent">
              {/* Transparent background to see the carousel behind */}
              <div className="flex-1" />
              {/* Automatic Description - Matching Reference Image */}
              <AnimatePresence mode="wait">
                {activeProduct && (
                  <motion.div 
                    key={activeProduct.name}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 bottom-0 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.08)] rounded-t-[2.5rem] p-5 pb-8 z-20 h-[72%]"
                  >
                    {/* Pull Bar */}
                    <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
                    
                    {/* Top Section: Image + Info */}
                    <div className="flex gap-4 items-center">
                      <img src={activeProduct.img} className="w-20 h-20 object-contain" alt="" />
                      <div className="flex-1">
                        <h3 className="font-poppins font-bold text-sm sm:text-base text-gray-900 leading-tight">
                          {activeProduct.name}
                        </h3>
                        <p className="text-[10px] text-gray-400 mt-1 font-medium">{activeProduct.brand}</p>
                      </div>
                    </div>

                    {/* Score Section */}
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2.5 h-2.5 rounded-full ${activeProduct.score > 70 ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]'}`} />
                        <div>
                          <span className="text-xs font-bold text-gray-900">{activeProduct.score}/100</span>
                          <span className="text-[10px] text-gray-400 font-semibold ml-2">{activeProduct.rating}</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Heart className="w-4 h-4 text-gray-300" />
                        <Share2 className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>

                    {/* Conditional Content: Attributes List or Oliver Card */}
                    {activeProduct.attributes ? (
                      <div className="mt-6 space-y-3">
                        {activeProduct.attributes.map((attr: any, i: number) => (
                          <div key={i} className="flex justify-between items-center text-[10px] sm:text-[11px]">
                            <div className="flex items-center gap-2 text-gray-500">
                              <span className="opacity-60">{attr.icon}</span>
                              <span className="font-medium">{attr.label}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="font-bold text-gray-800">{attr.value}</span>
                              <div className={`w-2 h-2 rounded-full ${attr.status === 'bad' ? 'bg-red-300' : attr.status === 'good' ? 'bg-green-300' : 'bg-gray-200'}`} />
                            </div>
                          </div>
                        ))}
                        
                        {/* Contaminants Section */}
                        <div className="mt-6">
                          <h4 className="text-[11px] font-bold text-gray-900 mb-2">Contaminants</h4>
                          <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 flex justify-between items-center">
                            <div>
                              <p className="text-[11px] font-bold text-gray-900">{activeProduct.detailCard.title}</p>
                              <p className="text-[10px] text-gray-400 mt-0.5">{activeProduct.detailCard.sub}</p>
                            </div>
                            <span className="bg-red-50 text-red-500 text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-tighter">
                              {activeProduct.detailCard.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Default Oliver Card */}
                        <div className="mt-5 bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">🥑</span>
                            <span className="text-[10px] font-bold text-gray-900 tracking-tight">Oliver Says:</span>
                          </div>
                          <p className="text-[10px] text-gray-600 leading-relaxed">
                            "{activeProduct.msg}"
                          </p>
                        </div>

                        {/* Breakdown Section */}
                        <div className="mt-5">
                          <h4 className="text-[11px] font-bold text-gray-900 mb-1">Breakdown</h4>
                          <div className="h-16 w-full bg-gray-50/50 rounded-xl border border-dashed border-gray-100" />
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </MobileCarousel>
        </motion.div>
      </div>
    </section>
  );
}
