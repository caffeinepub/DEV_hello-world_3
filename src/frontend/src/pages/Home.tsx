import { Zap, Shield, Globe, ArrowDown, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FeatureCard } from "@/components/FeatureCard";

const FEATURES = [
  {
    icon: Zap,
    title: "Fast",
    description:
      "Served directly from the blockchain at web speed. No centralized servers, no CDN dependency — just pure edge performance.",
  },
  {
    icon: Shield,
    title: "Secure",
    description:
      "Cryptographically verified execution on every request. Your app runs in a tamper-proof environment by design.",
  },
  {
    icon: Globe,
    title: "Decentralized",
    description:
      "Deployed on the Internet Computer — a public blockchain running on data centers worldwide with no single point of failure.",
  },
];

function HeroOrb({ className }: { className: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-20 ${className}`}
      aria-hidden="true"
    />
  );
}

function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6 pt-16"
    >
      {/* Decorative orbs */}
      <HeroOrb className="w-96 h-96 bg-primary -top-24 -left-24" />
      <HeroOrb className="w-80 h-80 bg-accent top-1/3 -right-32 animate-float" />
      <HeroOrb className="w-64 h-64 bg-primary/60 bottom-24 left-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Running on the Internet Computer
        </div>

        {/* Main heading */}
        <h1
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <span className="gradient-text">Hello,</span>
          <br />
          <span className="text-foreground">World!</span>
        </h1>

        {/* Subtitle */}
        <p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.35s", animationFillMode: "both" }}
        >
          Welcome to your first app on the Internet Computer — the blockchain that hosts
          full-stack web applications with no servers.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "both" }}
        >
          <Button
            size="lg"
            onClick={scrollToAbout}
            data-ocid="hero-cta"
            className="gradient-primary text-primary-foreground font-semibold rounded-full px-8 h-12 shadow-elevated hover:scale-105 transition-smooth border-0"
          >
            Discover More
            <ArrowDown className="ml-2 w-4 h-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            data-ocid="hero-cta-secondary"
            className="border-border text-foreground rounded-full px-8 h-12 hover:bg-muted/40 hover:border-primary/40 transition-smooth"
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-smooth animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-muted/30 border-y border-border/60 py-24 md:py-32 px-6">
      <div className="container max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            About
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
            Built for the next generation
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            The Internet Computer rewrites the rules of web development — your frontend,
            backend, and data all live on one cryptographic platform with no cloud
            provider in the middle.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-background">
      <div className="container max-w-xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Contact
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-foreground mb-4">
            Say hello
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Questions about building on the Internet Computer? We&rsquo;d love to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-8 shadow-card space-y-6 animate-fade-up"
          style={{ animationDelay: "0.15s", animationFillMode: "both" }}
        >
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="Ada Lovelace"
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
              data-ocid="contact-name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="ada@example.com"
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary"
              data-ocid="contact-email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message" className="text-sm font-medium text-foreground">
              Message
            </Label>
            <Textarea
              id="contact-message"
              placeholder="Tell us what you're building..."
              rows={4}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary resize-none"
              data-ocid="contact-message"
            />
          </div>
          <Button
            type="submit"
            className="w-full gradient-primary text-primary-foreground rounded-full h-12 font-semibold hover:scale-[1.02] transition-smooth shadow-subtle border-0"
            data-ocid="contact-submit"
          >
            <Send className="mr-2 w-4 h-4" aria-hidden="true" />
            Send Message
          </Button>
        </form>

        <div className="flex items-center justify-center gap-2 mt-8 text-muted-foreground text-sm">
          <Mail className="w-4 h-4 text-primary" />
          <span>We typically respond within 24 hours</span>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
