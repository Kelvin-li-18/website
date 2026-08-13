import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import PublicationCard from "./components/PublicationCard";
import { siteData } from "./data/siteData";

export default function App() {
  const { profile, socialLinks, publications, academicService } = siteData;

  return (
    <main className="min-h-screen bg-white text-black">
      <Container>
        <Header profile={profile} socialLinks={socialLinks} />

        <Section title="Selected Publications">
          <div className="space-y-4">
            {publications.map((publication) => (
              <PublicationCard
                key={publication.id}
                publication={publication}
              />
            ))}
          </div>
        </Section>

        <Section title="Academic Service">
          <div className="space-y-1 text-sm leading-6 text-black sm:text-base">
            {academicService.map((service) => (
              <p key={`${service.venue}-${service.year}`}>
                {service.role}, {service.venue} {service.year}
              </p>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}