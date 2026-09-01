const ProjectShowcaseCard = ({ project, index }) => {
  const { title, description, imgPath, techStack, githubUrl, liveUrl } = project;

  return (
    <article className="project-showcase-card">
      <div className="project-showcase-card-inner">
        <div className="project-media">
          <img src={imgPath} alt={`${title} preview`} />
          <div className="project-media-overlay" />
          <div className="project-media-top">
            <p className="project-index">Project {String(index + 1).padStart(2, "0")}</p>
            <span className="project-chip">Portfolio Build</span>
          </div>
        </div>

        <div className="project-copy">
          <div className="project-heading">
            <h3>{title}</h3>
            <p className="project-description">{description}</p>
          </div>

          <div className="project-meta">
            <p className="project-label">Technologies</p>
            <div className="project-tech-list">
              {techStack.map((item) => (
                <span key={`${title}-${item}`}>{item}</span>
              ))}
            </div>
          </div>

          <div className="project-links">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-secondary"
              >
                GitHub
                <span>↗</span>
              </a>
            ) : (
              <span className="project-link-disabled">GitHub Pending</span>
            )}

            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-primary"
              >
                Live Demo
                <span>↗</span>
              </a>
            ) : (
              <span className="project-link-disabled">Live Link Pending</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectShowcaseCard;