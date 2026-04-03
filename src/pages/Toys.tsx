import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToyCard from "@/components/ToyCard";
import SectionHeading from "@/components/SectionHeading";
import bambaImg from "@/assets/bamba-melon-poodle.jpeg";
import ellieImg from "@/assets/ellie-elephant.jpeg";
import chloeImg from "@/assets/chloe-cow.jpeg";
import bambaAngles from "@/assets/bamba-angles.jpeg";

const toys = [
  { name: "Bamba the Poodle", image: bambaImg, description: "The original fluffy poodle that started it all. Super soft curly fur and the cutest face.", price: "$29.99", tag: "Best Seller", paypalLink: "#" },
  { name: "Ellie the Elephant", image: ellieImg, description: "A soft navy elephant wearing a sweet light blue bow. Perfect for cuddles.", price: "$29.99", tag: "New", paypalLink: "#" },
  { name: "Chloe the Cow", image: chloeImg, description: "An adorable cowgirl with a tiny brown cowboy hat. Yeehaw!", price: "$29.99", tag: "New", paypalLink: "#" },
];

export default function ToysPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <SectionHeading title="All Toys" subtitle="Find your new fluffy best friend" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toys.map((toy) => (
              <ToyCard key={toy.name} {...toy} />
            ))}
          </div>

          {/* Extra gallery */}
          <div className="mt-16">
            <SectionHeading title="More Angles" subtitle="See Bamba from every side" />
            <div className="max-w-2xl mx-auto">
              <img
                src={bambaAngles}
                alt="Bamba the Poodle from multiple angles"
                className="w-full rounded-2xl shadow-warm"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
