import { Cpu, Heart, Lightbulb, Users } from "lucide-react";
import damienPhoto from "@/assets/damien-photo.png";

const highlights = [
  {
    icon: Heart,
    title: "People-First",
    description: "Solutions that genuinely support people",
  },
  {
    icon: Lightbulb,
    title: "Clarity",
    description: "Transforming complexity into simplicity",
  },
  {
    icon: Cpu,
    title: "Practical AI",
    description: "Technology that works for your team",
  },
  {
    icon: Users,
    title: "Alignment",
    description: "Bringing teams and technology together",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white-section">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="lg:sticky lg:top-24">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Creating <span className="text-gradient">Clarity, Alignment</span> & Flow
            </h2>
            
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Hi, I'm <span className="text-foreground font-semibold">Damien</span>.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I've worked across industries, systems, and technologies in digital health, care services, training, assessment, and large-scale transformation. This experience has shown me what creates effective outcomes.
              </p>
            </div>

            {/* Mission Section */}
            <div className="mb-8 p-6 glass-white rounded-2xl border border-white/30">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                My Mission
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                I transform existing knowledge into practical, people-first AI that creates clarity, alignment, and flow for organisations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My solutions support people by reducing friction, simplifying complexity, and making every interaction more intuitive for staff, customers, and communities.
              </p>
            </div>

            {/* Focus Areas */}
            <div className="p-6 glass rounded-2xl border border-border/30">
              <p className="text-base text-muted-foreground leading-relaxed">
                My bespoke AI solutions focus on <span className="text-foreground font-semibold">two core areas</span> that help organisations move from complexity and overwhelm to clarity, alignment, and flow.
              </p>
            </div>
          </div>

          {/* Right Column - Photo & Highlights Grid */}
          <div className="space-y-8">
            {/* Damien's Photo - Round Frame */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[60px] scale-110" />
                
                {/* Round Photo Frame */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-white border-4 border-primary/20">
                  <img 
                    src={damienPhoto} 
                    alt="Damien - AI Consultant" 
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-white rounded-2xl p-6 hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
