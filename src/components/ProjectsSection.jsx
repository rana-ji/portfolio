import React from "react";

import clove from "../assets/projects/clove.png";
import discoveringbrands from "../assets/projects/discoveringbrands.png";
import hummel from "../assets/projects/hummel.png";
import faberspa from "../assets/projects/faberspa.png";
import whistle from "../assets/projects/whistle.png";
import lnc from "../assets/projects/lnc.png";
import saralhome from "../assets/projects/saralhome.png";
import sheen from "../assets/projects/sheen.png";
import aldona from "../assets/projects/aldona.png";

const projects = [
  {
    title: "Clove Dental",
    description:
      "We developed a dynamic system that tailors web pages based on UTM parameters, enabling personalized content delivery. Additionally, we created modules for seasonal offers, allowing easy updates and targeted promotions. Our work also included handling server configurations, ensuring optimal performance and security. This comprehensive approach provided a scalable, responsive solution.",
    imageUrl: clove,
    link: "https://clovedental.in/",
  },
  {
    title: "Discovering Brands",
    description:
      "We developed a comprehensive application from scratch, encompassing both the frontend and admin interfaces. This solution is designed to help brands get listed and enhance their brand value by increasing visibility. The application includes a range of related modules that support these objectives, providing a robust platform for brand growth and exposure.",
    imageUrl: discoveringbrands,
    link: "https://discoveringbrands.com/",
  },
  {
    title: "Hummel India",
    description:
      "We developed a tailored user experience using Shopify, implementing customizations that aligned with specific client needs. By enhancing the platform's functionalities, we delivered a solution that effectively addressed the unique requirements of the project, ensuring a seamless and engaging experience for the end users.",
    imageUrl: hummel,
    link: "https://hummel.net.in/",
  },
  {
    title: "Faber S.pA",
    description:
      "Migrated a PHP-based website to Shopify by developing a middleware application that efficiently retrieves data from the existing database. The middleware seamlessly integrates the data into Shopify using APIs, ensuring a smooth transition and preserving the existing data while leveraging Shopify's platform capabilities.",
    imageUrl: faberspa,
    link: "https://www.faberspa.com/",
  },
  {
    title: "Whistle",
    description:
      "Managed a React and Laravel application, including server administration. Implemented changes to both frontend components and backend functionalities, as well as developed new APIs according to client needs, ensuring the application remained aligned with evolving requirements.",
    imageUrl: whistle,
    link: "https://whistle.in/",
  },
  {
    title: "Life n Colors",
    description:
      "Built a tailored Shopify application that allows the client to manage product groups with various pricing options and additional features. This application provides real-time capabilities for users to create custom-sized variants based on the selected options, offering a highly flexible and dynamic shopping experience.",
    imageUrl: lnc,
    link: "https://lifencolors.in/",
  },
  {
    title: "Saral Home",
    description:
      "Built a tailored Shopify application that allows the client to manage product groups with various pricing options and additional features. This application provides real-time capabilities for users to create custom-sized variants based on the selected options, offering a highly flexible and dynamic shopping experience.",
    imageUrl: saralhome,
    link: "https://saralhome.com/",
  },
  {
    title: "Sheen Couture",
    description:
      "Delivered a bespoke website tailored to enhance the unique buying experience for a fashion brand. This project involved developing custom sections and functionalities to meet specific client needs, ensuring a distinctive and engaging shopping experience that aligns with the brand's identity.",
    imageUrl: sheen,
    link: "https://sheencouture.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="content-card">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
