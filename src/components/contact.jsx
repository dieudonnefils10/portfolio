const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.747009776507!2d47.506917434675586!3d-18.956309371464922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e978fb227db%3A0x5a69d07ecb15f5d7!2sAnkeniheny%20Miray%20Hina%2C%20Tananarive!5e0!3m2!1sfr!2smg!4v1737996690454!5m2!1sfr!2smg"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <span className="bi bi-envelope-at-fill"></span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:nomenjanaharydieudonnefils@gmail.com"
                className="contact-link"
              >
                nomenjanaharydieudonnefils@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <span className="bi bi-telephone-fill"></span>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+261333530964" className="contact-link">
                +261 33 35 309 64
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <span className="bi bi-linkedin"></span>
            </div>

            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>

              <time dateTime="1982-06-23">Dieudonné Fils NOMENJANAHARY</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <span className="bi bi-facebook"></span>
            </div>

            <div className="contact-info">
              <p className="contact-title">Facebook</p>

              <address>Dieudonné Fils</address>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Contact;
