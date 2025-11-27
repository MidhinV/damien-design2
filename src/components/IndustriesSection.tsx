import { Building2, GraduationCap, Heart, Stethoscope, Users, Briefcase, Building } from "lucide-react";

const industries = [
  { icon: Heart, name: "Health, Disability & Aged Care" },
  { icon: Stethoscope, name: "Allied Health" },
  { icon: Users, name: "Not-for-profits" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: GraduationCap, name: "Education & Training" },
  { icon: Building2, name: "Member-based Organisations" },
  { icon: Building, name: "Small to Medium Businesses" },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-card/20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Who I Work With
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Organisations That Care{" "}
            <span className="text-gradient">Deeply About People</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Organisations ready to modernise while keeping people at the centre.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`rounded-xl p-6 text-center hover-lift group ${
                index % 3 === 0 ? "glass-white" : "glass"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ${
                index % 3 === 0
                  ? "bg-white/20 group-hover:bg-white/30"
                  : "bg-primary/10 group-hover:bg-primary/20"
              }`}>
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-foreground leading-tight">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
