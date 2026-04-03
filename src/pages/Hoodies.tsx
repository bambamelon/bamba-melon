import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/bamba-melon-logo.jpeg";

const hoodies = [
  { name: "Bamba Hoodie", description: "Warm brown hoodie inspired by Bamba the Poodle", status: "Coming Soon" },
  { name: "Ellie Hoodie", description: "Navy blue hoodie with elephant-ear hood details", status: "Coming Soon" },
  { name: "Chloe Hoodie", description: "Cream & brown cowgirl-themed hoodie", status: "Coming Soon" },
];

export default function HoodiesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <SectionHeading title="Matching Hoodies" subtitle="Dress like your favorite plush friend" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hoodies.map((h) => (
              <div key={h.name} className="rounded-2xl bg-card border border-border overflow-hidden shadow-soft p-6 text-center">
                <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                  <img src={logo} alt="Bamba Melon" className="w-16 h-16 rounded-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{h.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.description}</p>
                <span className="inline-block mt-4 bg-accent/50 text-accent-foreground text-xs font-display font-semibold px-3 py-1 rounded-full">
                  {h.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
