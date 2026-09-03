import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechSkillLogo = ({ tech }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="tech-skill-media-fallback" aria-hidden="true">
        <span className="tech-skill-media-fallback-initials">
          {tech.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <img
      src={tech.imgPath}
      alt={`${tech.name} logo`}
      className="tech-skill-media-image"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};


const TechStack = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".tech-skill-card",
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
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
    <div
      id="skills"
      ref={sectionRef}
      className="flex-center section-padding"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="tech-stack-grid">
          {techStackImgs.map((tech) => (
            <article
              key={tech.name}
              className="tech-skill-card card-border group"
              title={tech.name}
            >
              <div className="tech-skill-card-bg" aria-hidden="true" />
              <div className="tech-skill-card-inner">
                <div className="tech-skill-media-shell">
                  <div className="tech-skill-media-frame">
                    <div className="tech-skill-media-inner">
                      <TechSkillLogo tech={tech} />
                    </div>
                  </div>
                </div>

                <header className="tech-skill-card-header">
                  <h3 className="tech-skill-card-title">{tech.name}</h3>
                </header>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
