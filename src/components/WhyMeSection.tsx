import { Award, Handshake, MessageSquare, Puzzle, Shield } from "lucide-react";
import multipleAILogo from "@/assets/MultipleAI.png";

const reasons = [
  {
    icon: Handshake,
    title: "Bridge Two Worlds",
    description: "Connecting human-centred care with advanced digital systems.",
  },
  {
    icon: MessageSquare,
    title: "Complex to Simple",
    description: "Translating complex ideas into simple, actionable steps.",
  },
  {
    icon: Puzzle,
    title: "Balance Human & Technical",
    description: "Finding the balance for sustainable transformation.",
  },
  {
    icon: Shield,
    title: "Deep Industry Experience",
    description: "Frontline support, training, and large-scale digital transformation.",
  },
];

export function WhyMeSection() {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden bg-white-section">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Reasons */}
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className={`rounded-2xl p-5 hover-lift group ${
                    index % 2 === 0 ? "glass-white" : "glass"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                    index % 2 === 0
                      ? "bg-white/20 group-hover:bg-white/30"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <reason.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="order-1 lg:order-2">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              Why Work With Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Experience That{" "}
              <span className="text-gradient">Makes the Difference</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Deep technical understanding meets genuine empathy. Whether you're exploring AI or scaling solutions, 
              I help you navigate with confidence.
            </p>

            {/* MultipleAI Image */}
            <div className="relative rounded-2xl overflow-hidden glass-white border border-white/30 mb-8 h-64 bg-gradient-to-br from-white/5 to-primary/5">
              <img 
                src={multipleAILogo} 
                alt="MultipleAI Australia - Enterprise AI Solutions" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Partner Badge - Enhanced with White */}
            <div className="p-5 glass-white rounded-2xl border border-white/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Official Partner</p>
                  <p className="text-lg font-bold text-foreground">MultipleAI Australia</p>
                  <p className="text-sm text-muted-foreground mt-1">Enterprise AI Solutions & Implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
