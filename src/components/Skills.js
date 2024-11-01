import React from "react";
import { NavLink } from "react-router-dom";
import Button from './Button';

const Skills = () => {
  return (
    <>
    <div className="content">
      <div className="cards py-10">
        <div className="container">
          <div className="card shadow-sm text-center">
              <NavLink to="/" className="icon"><i className="bi bi-layout-wtf"></i></NavLink>
              <h4>User Interface Design</h4>
              <p>Clarity, Consistency, Feedback, Efficiency, Aesthetics, Accessibility, User-Centered Design will help Creating visually appealing and user-friendly interfaces.</p>
              <NavLink to="/works">Learn More <span className="bi bi-chevron-right"></span></NavLink>
          </div>
          <div className="card shadow-sm text-center">
              <NavLink to="/" className="icon"><i className="bi bi-window"></i></NavLink>
              <h4>Website Design</h4>
              <p>A unique website design is crucial for effective branding and achieving your goals, those key elements are branding, typography, layout, visualization, interaction.</p>
              <NavLink to="/works">Learn More <span className="bi bi-chevron-right"></span></NavLink>
          </div>
          <div className="card shadow-sm text-center">
              <NavLink to="/" className="icon"><i className="bi bi-globe"></i></NavLink>
              <h4>Web Development</h4>
              <p>It encompasses several aspects, including web design, web content development, client-side & server-side scripting, and network security configuration.</p>
              <NavLink to="/works">Learn More <span className="bi bi-chevron-right"></span></NavLink>
          </div>
        </div>
      </div>

      <div className="hero-banner skills mb-5">
        <div className="headings">
          <h2 className="text-center">USER INTERFACE DESIGN</h2>
          <h3 className="text-center">WEB DEVELOPMENT</h3>
          <h4 className="text-center">eCOMMERCE FRONTEND</h4>
          <h5 className="text-center">WEB DESIGN</h5>
        </div>
        <div className="overlay"></div>
        <div className="pic"></div>
      </div>

      <div className="container">
        <div className="blockquote text-center my-10 px-10">
          <h2 className="mb-3 text-center text-uppercase"><strong>Around the world <br />the most <span className="text-blue">innovative</span></strong></h2>
          <p>Throughout my 21 years of experience in design & creative field I have been providing innovative and unique design approaches using the latest technologies.</p>
          <p>Hire me to achieve your goals and scale your business.</p>
          <Button btnlink='contact' btnstyle='btn-primary' label='CONTACT' />
        </div>
      </div>

    </div>

    <div className="color-bg blue py-8">
      <div className="container text-center">
        <h3 className="text-white text-uppercase mb-3"><strong>Consistency . Excellence</strong></h3>
        <p className="text-white px-10">
        User-centric web applications focus on the needs, preferences, and behaviors of users throughout the design and development process. This approach ensures that the final product is intuitive, accessible, and highly usable. eCommerce stores use user-centered design to create seamless shopping experiences, leading to higher conversion rates and customer satisfaction.</p>
        <Button btnlink='works' btnstyle='btn-outline' label='VIEW RECENT WORKS' />
      </div>
      <div className="slant black top"></div>
    </div>
    </>
  );
}

export default Skills;