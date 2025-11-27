import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/energy-of-now-logo.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              From Static Content to{" "}
              <span className="text-gradient">Smart Conversations</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Transform your knowledge into intelligent AI agents that understand your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button variant="hero" size="xl">
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 animate-fade-in-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Availability</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient">90%</div>
                <div className="text-xs text-muted-foreground mt-1">Query Resolution</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient">Days</div>
                <div className="text-xs text-muted-foreground mt-1">To Deploy</div>
              </div>
            </div>
          </div>

          {/* Right Column - Logo & Visual Elements */}
          <div className="order-1 lg:order-2 flex flex-col items-center justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            {/* Logo - Prominent */}
            <img 
              src={logo} 
              alt="Energy of Now" 
              className="w-48 md:w-64 lg:w-72 h-auto mb-8 animate-float"
            />
            
            {/* AI Visual Element */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[60px] scale-110" />
              
              {/* AI Icon Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-strong border-4 border-primary/20 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Sparkles className="w-24 h-24 md:w-32 md:h-32 text-primary/50 animate-pulse" />
                  <span className="text-sm mt-4 text-primary/70 font-semibold">AI Solutions</span>
                </div>
              </div>

              {/* Partnership Badge - Floating with White */}
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-xl px-4 py-3 shadow-elegant animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-foreground">Bespoke AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
