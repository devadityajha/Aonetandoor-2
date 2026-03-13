import FadeIn from "../ui/FadeIn";
import RevealText from "../ui/RevealText";
import { Flame, ShieldCheck, Globe, Wrench, Award, Truck } from "lucide-react";

const FEATURES = [
  {
    icon: Flame,
    title: "Authentic Heat",
    desc: "Engineered clay cores achieve the precise 480°C+ temperatures that create genuine tandoor flavour.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Certified",
    desc: "NSF, ISO 9001, and BIS certifications ensure every product meets global safety standards.",
  },
  {
    icon: Wrench,
    title: "Custom Built",
    desc: "Bespoke dimensions, finishes, and configurations built to your exact specifications.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Exported to 30+ countries with international packaging and compliance documentation.",
  },
  {
    icon: Award,
    title: "35+ Years of Expertise",
    desc: "Decades of manufacturing mastery ensure consistent quality across every batch.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    desc: "Secure, insulated packaging with on-time delivery across India and to international ports.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-14 md:py-14 bg-beige-warm">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <FadeIn>
            <p className="section-label mb-4">Why TandoorCraft</p>
          </FadeIn>
          <RevealText>
            <h2 className="section-heading">
              Built for <em className="text-brand not-italic">Excellence</em>
            </h2>
          </RevealText>
          <FadeIn delay={0.2}>
            <p className="mt-5 text-charcoal-soft leading-relaxed">
              Every tandoor we build carries the weight of tradition and the
              precision of modern engineering.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="group p-8 bg-white border border-clay-200 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-500">
                <div className="w-12 h-12 bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand transition-colors duration-300">
                  <f.icon
                    size={22}
                    className="text-brand group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-display text-lg text-charcoal mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-charcoal-soft leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
