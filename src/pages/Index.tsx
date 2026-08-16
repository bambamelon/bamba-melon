import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToyCard from "@/components/ToyCard";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/bamba-melon-logo.jpeg";
import bambaImg from "@/assets/bamba-melon-poodle.jpeg";
import ellieImg from "@/assets/ellie-elephant.jpeg";
import chloeImg from "@/assets/chloe-cow.jpeg";
import bambaWithMelon from "@/assets/bamba-with-melon.jpeg";

const toys = [
  { name: "Bamba the Poodle", image: bambaImg, description: "The original fluffy poodle that started it all", price: "£19.99", tag: "Best Seller", paypalLink: "#" },
  { name: "Ellie the Elephant", image: ellieImg, description: "A soft navy elephant with a cute bow", price: "£29.99", tag: "New" },
  { name: "Chloe the Cow", image: chloeImg, description: "Adorable cowgirl with a tiny hat", price: "£29.99", tag: "New" },
];

const videos = [
  { title: "Bamba meets Ellie 🐘" },
  { title: "Chloe's first adventure 🤠" },
  { title: "Bedtime with Bamba 🌙" },
];

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-accent/50 text-accent-foreground text-xs font-display font-semibold px-3 py-1 rounded-full mb-4">
              <Sparkles className="h-3.5 w-3.5" /> New friends arriving!
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Meet the fluffiest<br />friends ever
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto md:mx-0">
              Handcrafted plush toys that bring joy, warmth, and endless cuddles. Each one has a personality of their own!
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/toys"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-warm"
              >
                Shop Toys <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/videos"
                className="inline-flex items-center gap-2 bg-card text-foreground font-display font-semibold px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors"
              >
                Watch Videos
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={bambaWithMelon}
              alt="Bamba the Poodle holding a melon"
              className="w-72 h-72 md:w-96 md:h-96 rounded-3xl object-cover shadow-warm animate-float"
            />
          </div>
        </div>
      </section>

      {/* Featured Toys */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Fluffy Friends" subtitle="Each toy is made with love" linkTo="/toys" linkLabel="See all toys" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toys.map((toy) => (
              <ToyCard key={toy.name} {...toy} />
            ))}
          </div>
        </div>
      </section>

      {/* Hoodies Teaser */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Matching Hoodies" subtitle="Dress like your favorite plush friend!" />
          <div className="max-w-lg mx-auto rounded-2xl bg-card border border-border p-10 shadow-soft">
            <img src={logo} alt="Bamba Melon" className="w-24 h-24 rounded-full mx-auto object-cover mb-4" />
            <p className="font-display text-lg font-semibold text-foreground">Coming Soon!</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Cozy hoodies that match your favorite Bamba Melon toys. Stay tuned!
            </p>
            <Link
              to="/hoodies"
              className="inline-flex items-center gap-1 mt-4 text-sm font-display font-medium text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Videos Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Watch & Play" subtitle="See our toys come to life!" linkTo="/videos" linkLabel="All videos" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <VideoPlaceholder key={v.title} title={v.title} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
