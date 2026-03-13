// import FadeIn from "../ui/FadeIn";
// import RevealText from "../ui/RevealText";

// export default function BrandIntroSection() {
//   return (
//     <section className="py-24 md:py-32 bg-clay-50">
//       <div className="container-site">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
//           {/* Left: Image grid */}
//           <FadeIn direction="right">
//             <div className="grid grid-cols-2 gap-4">
//               {/* Tall box */}
//               <div className="aspect-[3/4] bg-gradient-to-br from-brand-dark to-charcoal overflow-hidden flex flex-col justify-between p-6">
//                 <div className="w-8 h-8 border border-white/30 flex items-center justify-center">
//                   <div className="w-3 h-3 bg-brand" />
//                 </div>
//                 <div>
//                   <p className="text-6xl font-bold text-white">35+</p>
//                   <p className="text-sm text-white/60 mt-2 leading-relaxed">
//                     Years of authentic tandoor craftsmanship
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-4 pt-10">
//                 {/* Square box */}
//                 <div className="aspect-square bg-brand/20 overflow-hidden flex flex-col justify-between p-5">
//                   <div className="w-6 h-6 border border-brand/40 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-brand" />
//                   </div>
//                   <div>
//                     <p className="text-4xl font-bold text-brand-dark">30+</p>
//                     <p className="text-xs text-charcoal mt-1 leading-relaxed">
//                       Countries worldwide
//                     </p>
//                   </div>
//                 </div>

//                 {/* Wide box */}
//                 <div className="aspect-[4/3] bg-clay-300 overflow-hidden flex flex-col justify-between p-5">
//                   <div className="w-6 h-6 border border-charcoal/30 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-charcoal" />
//                   </div>
//                   <div>
//                     <p className="text-4xl font-bold text-brand-dark">10k+</p>
//                     <p className="text-xs text-charcoal mt-1 leading-relaxed">
//                       Happy customers
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>

//           {/* Right: Text */}
//           <div>
//             <FadeIn delay={0.1}>
//               <p className="section-label mb-4">About TandoorCraft</p>
//             </FadeIn>
//             <RevealText delay={0.2}>
//               <h2 className="section-heading">
//                 A Legacy of Fire,
//                 <br />
//                 <em className="text-brand not-italic">
//                   Perfected Over Decades
//                 </em>
//               </h2>
//             </RevealText>
//             <FadeIn delay={0.3}>
//               <p className="mt-6 text-charcoal-soft leading-relaxed">
//                 Since 1987, TandoorCraft has been at the forefront of authentic
//                 tandoor manufacturing. Every product is built from premium
//                 materials, engineered to deliver consistent heat distribution,
//                 superior durability, and an authentic cooking experience —
//                 whether you're in a home kitchen in Delhi or a Michelin-starred
//                 restaurant in London.
//               </p>
//             </FadeIn>
//             <FadeIn delay={0.4}>
//               <p className="mt-4 text-charcoal-soft leading-relaxed">
//                 Our tandoors are trusted by thousands of restaurants, home
//                 chefs, and culinary professionals across 30+ countries — a
//                 testament to uncompromising quality and craftsmanship.
//               </p>
//             </FadeIn>
//             <FadeIn delay={0.5}>
//               <div className="flex flex-wrap gap-6 mt-10">
//                 {[
//                   ["NSF Certified", "Food Safety"],
//                   ["ISO 9001", "Quality System"],
//                   ["BIS Approved", "Indian Standards"],
//                 ].map(([cert, body]) => (
//                   <div key={cert} className="flex items-center gap-3">
//                     <div className="w-1 h-8 bg-brand" />
//                     <div>
//                       <p className="text-sm font-semibold text-charcoal">
//                         {cert}
//                       </p>
//                       <p className="text-xs text-charcoal-soft">{body}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </FadeIn>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

////////////////////////////////////////////////////////////

import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";

export default function BrandIntroSection() {
  return (
    <section className="py-16 md:py-10 bg-clay-50">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14 items-center">
          {/* Left: Unbalanced Symmetrical Grid */}
          <FadeIn direction="up">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Left Column - The "Heavy" Side */}
              <div className="space-y-4 md:space-y-6">
                {/* Box 1: Dark Gradient (35+) */}
                <div className="aspect-[3/4] bg-gradient-to-br from-brand-dark to-charcoal overflow-hidden flex flex-col justify-between p-6 md:p-8 shadow-xl">
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-brand" />
                  </div>
                  <div>
                    <p className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                      20+
                    </p>
                    <p className="text-xs md:text-sm text-white/50 mt-2 leading-relaxed uppercase tracking-widest">
                      Years of Craftsmanship
                    </p>
                  </div>
                </div>

                {/* Box 2: NEW - Burnt Earth / Deep Clay (50+) */}
                <div className="aspect-square bg-brand-dark/90 overflow-hidden flex flex-col justify-between p-6 md:p-8">
                  <div className="w-6 h-6 border border-brand/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-bold text-brand-light">
                      50+
                    </p>
                    <p className="text-[10px] md:text-xs text-brand/40 mt-1 uppercase tracking-widest font-semibold">
                      Custom Designs
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - The "Light" Side (Offset for asymmetry) */}
              <div className="space-y-4 md:space-y-6 pt-12 md:pt-20">
                {/* Box 3: Pale Rose/Clay (30+) */}
                <div className="aspect-square bg-brand/10 border border-brand/5 overflow-hidden flex flex-col justify-between p-6 md:p-8">
                  <div className="w-6 h-6 border border-brand/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand/60" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-brand-dark">30+</p>
                    <p className="text-xs text-charcoal/60 mt-1 leading-relaxed font-medium">
                      Countries served
                    </p>
                  </div>
                </div>

                {/* Box 4: Warm Sand (10k+) */}
                {/* <div className="aspect-[4/5] bg-clay-300/60 overflow-hidden flex flex-col justify-between p-6 md:p-8"> */}
                <div className="aspect-[4/5] bg-clay-300 overflow-hidden flex flex-col justify-between p-6 md:p-8">
                  <div className="w-6 h-6 border border-charcoal/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-charcoal/40" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-charcoal">10k+</p>
                    <p className="text-xs text-charcoal/60 mt-1 leading-relaxed font-medium">
                      Happy customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content Section */}
          <div className="lg:pl-2">
            <FadeIn delay={0.1}>
              <p className="text-brand font-bold tracking-[0.2em] text-xs uppercase mb-6">
                Established 2005
              </p>
            </FadeIn>
            {/* <RevealText delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1]">
                A Legacy of Fire,
                <br />
                <span className="text-brand italic font-serif serif">
                  Perfected over Decades
                </span>
              </h2>
            </RevealText> */}

            <FadeIn delay={0.3}>
              <div className="mt-3 space-y-6 text-charcoal-soft text-lg leading-relaxed max-w-xl">
                <p>
                  Since 2005, TandoorCraft has been at the forefront of
                  authentic tandoor manufacturing. Every product is built from
                  premium materials, engineered for consistent heat and superior
                  durability. TandoorCraft has been at the forefront of
                  authentic tandoor manufacturing.
                </p>
                <p className="text-base opacity-80">
                  Trusted by thousands of restaurants and home chefs across 30+
                  countries — a testament to uncompromising quality.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  pt-6  ">
                {[
                  ["NSF Certified", "Food Safety"],
                  ["ISO 9001", "Quality System"],
                  ["BIS Approved", "Indian Standards"],
                ].map(([cert, body]) => (
                  <div key={cert} className="flex items-center gap-3">
                    <div className="w-1 h-8 bg-brand" />
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        {cert}
                      </p>
                      <p className="text-xs text-charcoal-soft">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
