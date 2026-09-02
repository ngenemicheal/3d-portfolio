import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".experience-card",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div ref={listRef} className="mt-20 md:mt-28 relative">
          <div className="timeline-shell">
            <div className="timeline-track">
              <div className="timeline-core" />
              <div className="timeline-gradient" />
            </div>

            <ul className="timeline-list">
              {expCards.map((card, index) => (
                <li key={`${card.company}-${card.title}`} className="timeline-entry">
                  <span className="timeline-dot" aria-hidden="true" />
                  <article className="experience-card card-border">
                    <header className="experience-card-header">
                      <div>
                        <h3 className="experience-card-title">{card.title}</h3>
                        <p className="experience-card-subtitle">
                          {card.company}
                          {card.location ? ` · ${card.location}` : ""}
                        </p>
                        <p className="experience-card-date">
                          🗓️&nbsp;{card.date}
                        </p>
                      </div>
                      <span className="experience-card-badge">
                        Role {String(index + 1).padStart(2, "0")}
                      </span>
                    </header>

                    {card.summary ? (
                      <div className="experience-card-section">
                        <p className="experience-card-section-title">
                          Overview
                        </p>
                        <p className="experience-card-summary">{card.summary}</p>
                      </div>
                    ) : null}

                    {card.responsibilities.length ? (
                      <div className="experience-card-section">
                        <p className="experience-card-section-title">
                          {card.summary ? "Highlights" : "Responsibilities"}
                        </p>
                        <ul className="experience-card-list">
                          {card.responsibilities.map((responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
