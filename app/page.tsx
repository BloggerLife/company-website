export const revalidate = 0;

import {
  AboutUs,
  Blog,
  Features,
  Hero,
  NewLetter,
  OurExpert,
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <Features />
      </div>
      <AboutUs />
      <OurExpert />
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <Blog />
    </main>
  );
}
