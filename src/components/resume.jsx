const Resume = () => {
    return ( 
        <article className="resume" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <span className="bi bi-stack"></span>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Ecole Nationale d'Informatique Fianarantsoa
              </h4>

              <span>2023 — 2024</span>

              <p className="timeline-text">
                Obtention du diplôme de licence professionnelle en Informatique,
                dans le parcours Génie Logiciel et Base de données
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">ONG Fianarantsoa</h4>

              <span>2022 — 2023</span>

              <p className="timeline-text">
                Formation pour devenir développeur web avec javascript et ses 
                framework
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Lycée Notre Dame de Lourdes
              </h4>

              <span>2020 — 2021</span>

              <p className="timeline-text">
                Obtention du diplôme de baccalaureat serie C
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <span className="bi bi-award-fill"></span>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur full stack</h4>

              <span>2023 — 2024</span>

              <p className="timeline-text">
                Développeur full stack chez Assemblée Nationnale Malagasy.
                Charger de développer une application pour les parlements avec Nextjs.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Développeur full stack</h4>

              <span>2022 — 2023</span>

              <p className="timeline-text">
              Développeur full stack chez ONG Fianarantsoa.
              Charger de développer une application pour les ressources humaines avec ReactJs et NodeJs.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Integrateur web</h4>

              <span>2022 — 2023</span>

              <p className="timeline-text">
                Charger de réaliser des maquettes avec HTML, CSS, JavaScript, Bootstrap, tailwind, ReactJs, et NextJs en freelance.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">Spécialités</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">ReactJs</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: '90%'}}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">NodeJs</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: '80%'}}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">NextJs</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: '90%'}}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Angular</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{width: '50%'}}></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
     );
}
 
export default Resume;