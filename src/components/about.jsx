const About = () => {
    return ( 
        <article className="about active" data-page="about">
        <header>
          <h2 className="h2 article-title">A propos </h2>
        </header>

        <section className="about-text">
          <p>
          Je suis Développeur Web basé à Antananarivo, Madagascar, spécialisé dans
           la création de sites modernes et d'application web, performants et adaptés aux besoins 
           de mes clients. J'aime transformer des idées en solutions web concrètes 
           et fonctionnelles.
          </p>

          <p>
          Mon rôle est de développer des sites et des applications web qui allient performance, 
          simplicité d'utilisation et design attrayant. J'accorde une grande
         importance à l'expérience utilisateur tout en veillant à ce que chaque 
         projet réponde aux exigences techniques et esthétiques.
          Mon objectif est de donner vie à vos projets en ligne, 
          qu'il s'agisse de vitrines, d'applications ou de plateformes interactives.
           J'ai eu l'opportunité de collaborer avec de nombreuses entreprises 
           pour concevoir des applications et des sites web innovants et adaptés à leur vision.
          </p>
        </section>


        <section className="service">
          <h3 className="h3 service-title">Qu'est-ce-que je fais ?</h3>

          <ul className="service-list">
            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./images/icon-dev.svg
              "
                  alt="design icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Développeur frontend</h4>

                <p className="service-item-text">
                 je peux être un développer des interfaces utilisateur qui répond au besoin des clients.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Développer backend</h4>

                <p className="service-item-text">
                je peux être un développer des fonctionnalités d'une application ou site web.
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./images/icon-dev.svg"
                  alt="mobile app icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Développeur Full Stack</h4>

                <p className="service-item-text">
                je peux aussi être un développer full stack qui occupe la partie front et back d'une application
                </p>
              </div>
            </li>

            <li className="service-item">
              <div className="service-icon-box">
                <img
                  src="./images/icon-design.svg"
                  alt="camera icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Integratteur web</h4>

                <p className="service-item-text">
                  Je peux aussi travailler comme integrateur web pour votre entreprise.
                </p>
              </div>
            </li>
          </ul>
        </section>


        <section className="testimonials">
          <h3 className="h3 testimonials-title">Témoignages</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./images/avatar-1.png"
                    alt="Daniel lewis"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                 Mr Aliravo Samoela
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Travailler avec Dieudonné Fils sur le développement de notre application 
                    a été une experience formidable. Il a pris en charge à la fois le frontend et le backend et a su nous livrer un produit parfaitement 
                    fonctionnelle dans les delais impartis.
                  </p><br />
                  <h2 className="text-red-500">Directeur du service d'Information de l'Assemblée Nationale Malgasy.</h2>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./images/avatar-2.png"
                    alt="Jessica miller"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Mme Mirana
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    Dieudonné a travaillé sur la refonte de notre site web et nous n'avons pas été déçus. 
                    Son travail en tant qu'integrateur web a permis d'optimiser le design de notre site pour 
                    qu'il soit non seulement esthétique, mais aussi extrêmement performant sur tous les appareil.
                  </p>
                  <h2 className="text-red-500">Chef de projet chez ONG Fianarantsoa</h2>
                </div>
              </div>
            </li>

            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img
                    src="./images/avatar-4.png"
                    alt="Emily evans"
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>

                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title
                >
                  Mr Novan Hardhi
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                  En tant que développeur full stack, Dieudonné a prouvé une grande maitrise des technologies
                  modernes. Il a concu et développeur une application robuste avec une architecture backend solide et un frontend intituf.
                  </p>
                  <h2 className="text-red-500">Web Master de l'Assemblée Nationale Malgasy.</h2>
                </div>
              </div>
            </li>
          </ul>
        </section>


        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <span className="bi bi-x"></span>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src="./images/avatar-1.png"
                  alt="Daniel lewis"
                  width="80"
                  data-modal-img
                />
              </figure>

              <img src="./images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

              <div data-modal-text>
                <p>
                  Richard was hired to create a corporate identity. We were
                  very pleased with the work done. She has a lot of experience
                  and is very concerned about the needs of client. Lorem ipsum
                  dolor sit amet, ullamcous cididt consectetur adipiscing
                  elit, seds do et eiusmod tempor incididunt ut laborels
                  dolore magnarels alia.
                </p>
              </div>
            </div>
          </section>
        </div>


        <section className="clients">
          <h3 className="h3 clients-title">Outils de développement</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img
                  src="./images/mysql.png"
                  alt="client logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img
                  src="./images/nextjs.png"
                  alt="client logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img
                  src="./images/tailwind.png"
                  alt="client logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img
                  src="./images/visual-studio-code.png"
                  alt="client logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img
                  src="./images/github.png"
                  alt="client logo"
                />
              </a>
            </li>
            <li className="clients-item">
            <a href="#">
                <img
                  src="./images/reactjs.jpeg"
                  alt="client logo"
                />
              </a>
            </li>
            <li className="clients-item">
            <a href="#">
                <img
                  src="./images/nodejs.jpeg"
                  alt="client logo"
                />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img
                  src="./images/angularjs.png"
                  alt="client logo"
                />
              </a>
            </li>
          </ul> 
        </section>
      </article>
     );
}
 
export default About;