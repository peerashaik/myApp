import React from "react";
import { NavLink } from "react-router-dom";
import Button from './Button';

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="text-center my-3 px-10">
          <h2 className="text-red">by PEERA SHAIK</h2>
          <p>Design is not just what it looks like! Design is how it works.</p>
          <p>Passionate about user interface designing, developing a wide range of web applications. Skills include user interface design, web design, web development, e-commerce frontend development, social media design, SEO and more.</p>
          <p>I'm trying to stay with current design trends and constantly challenge myself to learn more tools and technologies.</p>
          <p className="m-0">Happy to serve you better - <NavLink className="link" to="/contact">CONTACT</NavLink></p>
        </div>
      </div>
    </div>

    <div className="banners mt-5">
      <div className="color-bg red">
        <div>
        <h2><span className="text-black">User<br/>Interface</span><br/><span className="text-white">Design</span></h2>
        <h4>User Journey | Research | User Flow</h4>
        </div>
      </div>
      <div className="color-bg green">
        <div>
        <h2><span className="text-yellow">CSS3</span> <span className="text-white">Style</span></h2>
        <h4>Color | Theme | Beautify | Typography</h4>
        </div>
      </div>
      <div className="color-bg navy-blue">
        <div>
        <h2><span className="text-white">HTML</span><span className="text-green">5</span></h2>
        <h4>Layout | Content | Standards</h4>
        </div>
      </div>  
      <div className="color-bg purple">
        <div>
        <h2><span className="text-yellow">Javascript</span><br/><span className="text-white">jQuery</span></h2>
        <h4>User Intercation | DOM Manipulation</h4>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="blockquote text-center my-10">
        <h2 className="content-heading text-center text-uppercase mb-3"><strong><span className="text-yellow">Pixel Perfect</span> Wins</strong></h2>
        <p className="px-10">I have also become a highly valued user interface designer with 21 years of IT industry experience. I am known to push the boundaries of pixel perfect design creations with my keen eyes for details and create interfaces with emerging ideas that result cross browser compatible layouts.</p>
        <Button btnlink='skills' btnstyle='btn-primary' label='DESIGN THEME-ING' />
      </div>
    </div>

    <div className="container my-10 py-5">
      <div className="my-work-list">
        
        <div className="item">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://magnahardwoodfloors.com" target="_blank" rel="noreferrer"><img src={require("../../src/images/works/magna.png")} loading="lazy" alt="Magna Hard Wood Floors" /></a>
          </div>
          <h2><a href="https://magnahardwoodfloors.com" target="_blank" rel="noreferrer">Magnahardwoodfloors.com</a></h2>
        </div>
        <div className="item">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://eliobay.com" target="_blank" rel="noreferrer"><img src={require('../../src/images/works/eliobay.png')} loading="lazy" alt="ElioBay" /></a>
          </div>
          <h2><a href="https://eliobay.com" target="_blank" rel="noreferrer">ElioBay.com</a></h2>
        </div>

      </div>
    </div>

    <div className="color-bg water py-8">
      <blockquote className="container text-center">
        <h3 className="text-white mb-3"><strong>Clients trust in Quality</strong></h3>
        <div className="fill-white shape-right-slant"></div>
        <p className="text-white px-10">Having received over 100 esteemed, industry leading accolades my client work has consistently achieved excellence and innovation in the ever-evolving world of digital design. These recognitions not only affirm my commitment to pushing creative boundaries but also underscore the unwavering dedication to delivering cutting-edge solutions.</p>
        <Button btnlink='works' btnstyle='btn-outline' label='VIEW RECENT WORKS' />
      </blockquote>
      <div className="slant light-blue"></div>
    </div>

    <div className="cards empty py-5 mb-5">
      <div className="container">
        <div className="card shadow text-center">
            <h4>TARGET USERS</h4>
            <p>Designing an interface with your target user in mind is crucial for creating a successful and engaging user experience. Mobile-first and mobile-friendly application development are essential strategies in today’s digital landscape. </p>
        </div>
        <div className="card text-center">
            <h4>CLIENT SUCCESS</h4>
            <p>Client success in user interface design is often achieved by focusing on several key principles and practices that ensure the final product meets user needs and business goals.</p>
        </div>
        <div className="card shadow text-center">
            <h4>TEAM WORK</h4>
            <p>Teamwork is essential in user interface design, as it brings together diverse skills and perspectives to create a cohesive and user-friendly product.</p>
        </div>
      </div>
    </div>

    <div className="container key-skills">
      <div className="my-10">
      <div className="row">
        <h2 className="text-center">A journey of Commitment towards a learning process!</h2>
        <h2 className="mt-5"><strong>KEY <span className="color-darkpink">SKILLS</span> & <span className="text-blue">TECHNOLOGIES</span></strong></h2>
        <div className="col-md-6">
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>HTML5 and XHTML:</strong> Adept at crafting semantic and accessible web pages, ensuring compatibility across devices and browsers.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>CSS3 (Less and Sass):</strong> Well-versed in using CSS preprocessors to create modular, maintainable stylesheets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Responsive Web Design:</strong> Committed to delivering responsive and mobile-friendly designs for optimal user experiences.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Bootstrap:</strong> Familiar with the Bootstrap framework for building responsive and consistent UI components.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Tailwind CSS:</strong> Expereinced at a utility-first CSS framework for building raid user interfaces.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>JavaScript and jQuery:</strong> Proficient in enhancing frontend functionality through dynamic scripting and interactivity.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>React SPA:</strong> Mid-level expertise in developing cross-browser single page applications and mobile friendly user centred applications using ReactJS.</li>
          </ul>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>Magento2 Frontend:</strong> Proficient in developing custom themes, templates, and layouts using Magento’s frontend architecture.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Version Control (Git):</strong> Skilled in collaborating with development teams using Git for code versioning.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Performance Optimization:</strong> Dedicated to improving website speed, minimizing HTTP requests, and optimizing assets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Cross-Browser Compatibility:</strong> Ensuring seamless rendering across various browsers and devices.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Adobe XD, Figma, Sketch, Photoshop, Illustrator.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Programming Skills:</strong> HTML5, XHTML, XML, CSS3(Less & Sass), Tailwind CSS, Bootstrap, Responsive Web Design, Semantic UI, W3c Standards, PHP, mySQL, JavaScript, jQuery, WordPress, October CMS.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Home;