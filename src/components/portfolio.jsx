const Portfolio = () => {
    return ( 
        <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>
          </ul>

          <ul className="project-list">
            <li
              className="project-item active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-1.jpg"
                    alt="finance"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Parlements</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-2.png"
                    alt="orizon"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Ressource humaine</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-6.png"
                    alt="fundo"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Chat</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-3.jpg"
                    alt="brawlhalla"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Vente de vin</h3>

                <p className="project-category">web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-7.png"
                    alt="dsm."
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Soutenance.</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="web design"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-9.png"
                    alt="metaspark"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Youtube copy</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-1.jpg"
                    alt="summary"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Familly App</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="applications"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-2.png"
                    alt="task manager"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Maquette</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>

            <li
              className="project-item active"
              data-filter-item
              data-category="web development"
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                  <span className="bi bi-eye-fill"></span>
                  </div>

                  <img
                    src="./images/project-3.jpg"
                    alt="arrival"
                    loading="lazy"
                  />
                </figure>

                <h3 className="project-title">Maquette</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
     );
}
 
export default Portfolio;