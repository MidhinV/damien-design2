import { Bot, Brain, Rocket, Settings, Target, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents Using Your Knowledge",
    description:
      "Agents that use your existing information to reduce friction across onboarding, support, and customer journeys.",
    features: ["Knowledge Integration", "24/7 Availability", "Natural Conversations"],
  },
  {
    icon: Target,
    title: "Customer Interaction Transformation",
    description:
      "Modern engagement where customers simply ask and get what they need immediately, without searching or waiting.",
    features: ["Reduced Wait Times", "Better Experience", "Lower Workload"],
  },
  {
    icon: Brain,
    title: "AI Agent Design",
    description:
      "Identify where AI helps most, then design agents that handle routine tasks. Free your people for what truly needs them.",
    features: ["Custom Design", "Workflow Integration", "Task Automation"],
  },
  {
    icon: Zap,
    title: "AI Readiness & Strategy",
    description:
      "Clarify priorities, find quick wins, and create a roadmap that aligns technology, teams, and governance.",
    features: ["Priority Mapping", "Quick Wins", "Strategic Roadmap"],
  },
  {
    icon: Settings,
    title: "Implementation & Support",
    description:
      "From pilot to rollout, I work alongside your team to configure and refine AI agents for reliable outcomes.",
    features: ["Hands-on Support", "Team Training", "Continuous Refinement"],
  },
  {
    icon: Rocket,
    title: "Rapid Proof of Concepts",
    description:
      "Deliver proof-of-concepts in days, helping you see value quickly and measure ROI through reduced manual workload.",
    features: ["Fast Delivery", "ROI Measurement", "Scalable Solutions"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-card/15">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We Can Do For Your{" "}
            <span className="text-gradient">Organisation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From complexity to clarity, alignment, and flow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            // Add images to specific service cards
            const hasImage = index === 0 || index === 2 || index === 4;
            const serviceImages = [
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&auto=format&q=80", // AI/Brain
              null,
              "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&auto=format&q=80", // Team collaboration
              null,
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&auto=format&q=80", // Business meeting
              null,
            ];
            
            return (
            <div
              key={service.title}
              className={`rounded-2xl overflow-hidden hover-lift group relative ${
                index % 2 === 0 ? "glass-white" : "glass"
              }`}
            >
              {/* Service Image */}
              {hasImage && serviceImages[index] && (
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={serviceImages[index]} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              )}
              
              <div className="p-6 relative z-10">
                {/* Hover Glow */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index % 2 === 0 
                    ? "bg-gradient-to-br from-white/10 to-primary/5" 
                    : "bg-gradient-to-br from-primary/5 to-secondary/5"
                }`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${
                    index % 2 === 0
                      ? "bg-white/20 group-hover:bg-white/30"
                      : "bg-gradient-to-br from-primary/20 to-secondary/20"
                  }`}>
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features - More Visual */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          index % 2 === 0
                            ? "bg-white/15 text-foreground border border-white/30"
                            : "bg-primary/10 text-primary border border-primary/20"
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
