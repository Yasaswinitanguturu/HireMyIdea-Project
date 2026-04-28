import { ChevronDown, Apple, ArrowRight } from "lucide-react";
import logo from "@/assets/olive-logo.png";
import avatars from "@/assets/avatars.png";
import PhoneMockup from "@/components/PhoneMockup";

const navItems = ["Solutions", "Features", "Pricing", "Blog", "Restaurants", "Food"];

const Index = () => {
  return (
    <div className="min-h-screen bg-hero-bg">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Olive logo" className="h-9 w-9" width={36} height={36} />
          <span className="font-serif text-2xl font-bold text-primary">Olive</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {item}
              {["Solutions", "Blog", "Food"].includes(item) && <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden text-sm font-medium text-foreground hover:text-foreground/70 sm:block">
            Sign in
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            Get Olive
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6 pb-20 pt-8 text-center">
        <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-card/60 px-4 py-1.5 shadow-sm ring-1 ring-border/50">
          <img
            src={avatars}
            alt="Family avatars"
            className="h-7 w-16 rounded-full object-cover"
            width={64}
            height={28}
          />
          <span className="text-xs font-medium text-muted-foreground">Trusted by thousands of healthy families</span>
        </div>

        <h1 className="mt-8 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl">
          The Safest Way to
          <br />
          Shop for Groceries
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Use the Olive Food Scanner App to instantly Eliminate Harmful Ingredients from Your Family's Diet and Get
          Expert-Backed Food Insights
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90">
            <Apple className="h-4 w-4" />
            Download for iOS
          </button>
          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:opacity-70">
            Join the Olive Community
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Phone */}
        <div className="mt-16">
          <PhoneMockup />
        </div>
      </main>
    </div>
  );
};

export default Index;
