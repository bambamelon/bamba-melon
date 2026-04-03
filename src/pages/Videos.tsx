import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import SectionHeading from "@/components/SectionHeading";

const videos = [
  { title: "Bamba meets Ellie 🐘" },
  { title: "Chloe's first adventure 🤠" },
  { title: "Bedtime with Bamba 🌙" },
  { title: "Playground fun 🎉" },
  { title: "Tea party time 🍵" },
  { title: "Bamba's day out ☀️" },
  { title: "Ellie learns to dance 💃" },
  { title: "Hide and seek 👀" },
  { title: "Rainy day cuddles 🌧️" },
  { title: "Bamba & friends picnic 🧺" },
  { title: "Chloe goes shopping 🛍️" },
  { title: "Goodnight friends 🌟" },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <SectionHeading title="Videos" subtitle="Watch our fluffy friends play together" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <VideoPlaceholder key={v.title} title={v.title} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
