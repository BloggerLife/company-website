export const revalidate = 0;
/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Container,
  Heading,
  LindkedlnFooter,
  NewLetter,
  Section,
} from "@/components";
import { getAboutpage } from "@/sanity/queries/page";
import { AboutUsType } from "@/sanity/schemaTypes/aboutUs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = async () => {
  const data: AboutUsType = await getAboutpage();

  const { ourExperts, ourPhilosophy, promotion, hero } = data;

  return (
    <React.Fragment>
      <Section className="bg-white">
        <Container>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2">
            <Heading as="h1" className="text-hero">
              {hero.heading}
            </Heading>
            <div>
              <p className="mb-4">{hero.tagline}</p>
              <Button variant="secondary">
                <Link href={promotion.link}>{promotion.title}</Link>
              </Button>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-xl">
            <Image
              src={hero.heroImage}
              alt="About us 1"
              width={450}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </Section>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="mb-24 text-section capitalize leading-none"
          >
            {ourPhilosophy.heading}
          </Heading>
          <div className="sticky grid gap-4">
            {ourPhilosophy.philosophys.map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="grid rounded-3xl bg-primary-300 p-4 py-12 md:grid-cols-2"
                >
                  <div>
                    <span>{item.tagline}</span>
                    <Heading as="h4" className="text-title leading-none">
                      {item.heading}
                    </Heading>
                  </div>
                  <p>{item.excerpt}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
      <div className="bg-secondary-950 p-2 sm:p-4">
        <NewLetter />
      </div>
      <Section className="bg-white">
        <Container>
          <Heading
            as="h2"
            className="mb-24 text-section capitalize leading-none"
          >
            A Team of Energy Experts
          </Heading>

          <div className="grid gap-4 md:grid-cols-3">
            {ourExperts.ourExperts.map((expert, index: number) => {
              return (
                <div
                  key={index}
                  className="relative col-span-1 overflow-hidden rounded-xl"
                >
                  <Image
                    src={expert.image}
                    alt="Member"
                    width={450}
                    height={320}
                    className="h-full w-full object-cover"
                  />
                  <div className="group absolute bottom-2 w-full overflow-hidden  px-2 backdrop-blur-2xl">
                    <div className="flex h-0 min-h-10 flex-col justify-between rounded-xl bg-primary-300 px-6  py-2 duration-300 group-hover:h-[70px]">
                      <div className="flex items-center justify-between">
                        <Heading
                          as="h4"
                          className="text-label font-semibold leading-none"
                        >
                          {expert.heading}
                        </Heading>
                        <Link href="/">
                          <LindkedlnFooter />
                        </Link>
                      </div>
                      <ul className="my-4 h-0 translate-y-3 duration-300 group-hover:h-full group-hover:translate-y-0">
                        <li className="text-sub-title">{expert.excerpt}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default AboutUs;
