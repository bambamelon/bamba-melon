import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import bambaWithMelon from "@/assets/bamba-with-melon.jpeg";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <SectionHeading title="About Bamba Melon" subtitle="How it all started" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <img
              src={bambaWithMelon}
              alt="Bamba the Poodle holding a melon"
              className="w-full rounded-3xl object-cover shadow-warm"
            />
            <div className="text-muted-foreground space-y-4">
              <p>
                Bamba Melon started with a real dog: Bamba, my toy poodle, who somehow
                manages to be the fluffiest, most lovable creature in any room he's in.
              </p>
              <p>
                I wanted to bottle a little bit of that — the soft curls, the big
                personality, the feeling of a hug you don't want to let go of — into a
                toy people could actually take home. That's how Bamba the Poodle plush
                was born. From there, the family started growing: Ellie the Elephant
                with her sweet bow, Chloe the Cow in her tiny cowboy hat, and more
                fluffy friends on the way.
              </p>
              <p>
                Every toy is designed to feel huggable from the very first squeeze —
                soft fur, gentle stitching, and just enough character to make you
                smile. Bamba Melon is a small shop built on a simple idea: fluffy
                things make life better.
              </p>
              <p className="font-display font-semibold text-foreground">
                Thanks for stopping by — we hope you find a new friend here. 🍈
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
