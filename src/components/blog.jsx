const Blog = () => {
    return ( 
        <article className="blog" data-page="blog">
          <header>
            <h2 className="h2 article-title">Blog</h2>
          </header>

          <section className="blog-posts">
            <ul className="blog-posts-list">
              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./images/angularjs.png"
                      alt="Design conferences in 2022"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Mes projet en tant que développeur web junior</p>
                    </div>

                    <h3 className="h3 blog-item-title">
                      Portfolio, chat, clone d'un site e-commerce, clone youtube
                    </h3>

                    <p className="blog-text">
                      Quand j'ai commencé mon parcours en développement web, j'avais soif de créer des projets qui me permettaient
                      de tester mes compétences .
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./images/reactjs.jpeg"
                      alt="Best fonts every designer"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Choix technologie</p>
                    </div>

                    <h3 className="h3 blog-item-title">
                      React, Angular, Next, Node
                    </h3>

                    <p className="blog-text">
                     En tant que développeur web junior, j'ai exploré plusieurs framework mais React, Next, Node et Angular sont 
                     celles qui m'a le plus convaincu .
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./images/nodejs.jpeg"
                      alt="Design digest #80"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Erreur de débutant</p>
                    </div>

                    <h3 className="h3 blog-item-title">Planification, Negligence, Ingorance</h3>

                    <p className="blog-text">
                      Le parcours d'un développeur web est rempli d'essais et d'erreur. Et les voici les erreurs 
                      que j'ai commises en tant que développeur web débutant mais tous cela m'a servis de leçon .
                    </p>
                  </div>
                </a>
              </li>

              <li className="blog-post-item">
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src="./images/nextjs.png"
                      alt="UI interactions of the week"
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">Prémier projet Full Stack</p>
                    </div>

                    <h3 className="h3 blog-item-title">
                      Planification, creation du backend, développement du frontend et connexion entre eux.
                    </h3>

                    <p className="blog-text">
                      Créer un projet full stack était un défi que je voulais relever. J'ai choisi React pour le frontend et 
                      Nodejs pour le backend et les voilà comment j'ai realisé ce projet étape par étape
                    </p>
                  </div>
                </a>
              </li>

              
            </ul>
          </section>
        </article>
     );
}
 
export default Blog;