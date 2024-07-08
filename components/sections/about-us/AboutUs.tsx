import { Check, Container, Heading, Section, SubTitle } from "@/components";
import { getHomepage } from "@/sanity/queries/page";
import AboutUsCarousel from "./AboutUsCarousel";

export const AboutUs = async () => {
  const data = await getHomepage();

  const { aboutUs } = data;

  return (
    <Section className="bg-secondary-950">
      <Container>
        <SubTitle subTitle={aboutUs.tagline} />
        <div className="grid gap-12 md:gap-36 xl:grid-cols-2">
          <div className="flex flex-col justify-center gap-6">
            <Heading as="h2" className="text-section leading-none text-white">
              {aboutUs.heading}
            </Heading>
            <p className="text-white">{aboutUs.excerpt}</p>
            <ul className="mt-4 grid grid-cols-2 gap-4 xl:grid-cols-1">
              <li className="flex items-center gap-3 text-white">
                <Check />
                Competent
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Reliable
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Proactive
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Honorable
              </li>
              <li className="flex items-center gap-3 text-white">
                <Check />
                Professionalism
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <AboutUsCarousel images={aboutUs.slider} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
