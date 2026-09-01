import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ProjectShowcaseCard from "../components/ProjectShowcaseCard";
import TitleHeader from "../components/TitleHeader";
import { projectCards } from "../constants";

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".showcase-shell",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcase-shell">
          <div className="showcase-copy">
            <TitleHeader
              title="Selected Projects & Product Builds"
              sub="🚀 Things I’ve Built"
            />
            <p className="text-white-50 md:text-lg max-w-3xl text-center">
              A curated selection of product-focused builds with modern UI,
              scalable architecture, and thoughtful implementation details.
            </p>
          </div>

          <div className="showcase-grid">
            {projectCards.map((project, index) => (
              <ProjectShowcaseCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
