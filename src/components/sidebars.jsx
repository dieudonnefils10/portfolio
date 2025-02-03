"use client"
import { useEffect } from "react";
import { hello } from "../../public/lib/script";

const Sidebars = () => {
  useEffect(() => {
    hello()
     }, []);
    return ( 
        <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src="./images/fils.jpg" alt="Fils" style={{width: "80px",height: "auto", borderRadius: "50px"}} />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Dieudonné Fils">Dieudonné Fils</h1>
            <p className="title">Web developer</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
          </button>
        </div>
        <div className="sidebar-info_more">
        <button className="close" data-sidebar-btnc>
            <span>Fermer</span>
          </button>
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <span className="bi bi-envelope-at-fill"></span>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:nomenjanaharydieudonnefils@gmail.com" className="contact-link">nomenjanaharydieudonnefils@gmail.com</a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <span className="bi bi-telephone-fill"></span>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
  
                <a href="tel:+261333530964" className="contact-link">+261 33 35 309 64</a>
              </div>
  
            </li>
  
            <li className="contact-item">
  
              <div className="icon-box">
                <span className="bi bi-cake2-fill"></span>
              </div>
  
              <div className="contact-info">
                <p className="contact-title">Birthday</p>
  
                <time dateTime="1982-06-23">Avril 24, 2003</time>
              </div>
  
            </li>
  
            <li className="contact-item">
  
              <div className="icon-box">
                <span className="bi bi-map"></span>
              </div>
  
              <div className="contact-info">
                <p className="contact-title">Location</p>
  
                <address>Soavina, Antsimondrano, Madagascar</address>
              </div>
  
            </li>
  
          </ul>
  
          <div className="separator"></div>
  
          <ul className="social-list">
  
            <li className="social-item">
              <a href="#" className="social-link">
                <span name="logo-facebook"></span>
              </a>
            </li>
  
            <li className="social-item">
              <a href="#" className="social-link">
                <span name="logo-twitter"></span>
              </a>
            </li>
  
            <li className="social-item">
              <a href="#" className="social-link">
                <span name="logo-instagram"></span>
              </a>
            </li>
  
          </ul>
  
        </div>
  
      </aside>
  
  
  
     );
}
 
export default Sidebars;