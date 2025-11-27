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
    <section id="why-me" className="py-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 left-0 w-1/4 h-1/2 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-10 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text & Image */}
          <div className="space-y-8">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Why Work With Me
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Experience That{" "}
                <span className="text-gradient">Makes the Difference</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Deep technical understanding meets genuine empathy. Whether you're exploring AI or scaling solutions, 
                I help you navigate with confidence.
              </p>
            </div>

            {/* MultipleAI Image & Partner Badge Combined */}
            <div className="space-y-4">
              <div className="relative max-w-sm">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur-lg" />
                <div className="relative card-elevated p-2">
                  <img 
                    src={multipleAILogo} 
                    alt="MultipleAI Australia - Enterprise AI Solutions" 
                    className="w-full h-auto rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Partner Badge */}
              <div className="card-elevated p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-0.5">Official Partner</p>
                    <p className="text-sm font-bold text-foreground">MultipleAI Australia</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Enterprise AI Solutions & Implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Reasons Grid */}
          <div className="lg:pt-16">
            <div className="grid sm:grid-cols-2 gap-3">
              {reasons.map((reason, index) => {
                const isPrimary = index % 2 === 0;
                
                return (
                  <div
                    key={reason.title}
                    className={`group hover-lift ${
                      isPrimary 
                        ? "card-elevated bg-gradient-to-br from-primary/5 to-transparent border-primary/20" 
                        : "card-minimal"
                    }`}
                  >
                    <div className="p-5 space-y-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isPrimary
                          ? "bg-primary/10 group-hover:bg-primary/20"
                          : "bg-muted group-hover:bg-primary/10"
                      }`}>
                        <reason.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-base">{reason.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
