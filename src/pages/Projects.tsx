import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { Projectsdata } from "../data";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [openedItem, setOpened] = useState<number>(-1);

  return (
    <div className="ml-10 w-[700px] max-sm:w-[90%] max-sm:ml-5 h-[70%] overflow-y-auto">
      <Helmet>
        <title>Projects | Adil Raqioui</title>
        <meta name="description" content="A showcase of my projects demonstrating my skills and expertise." />
      </Helmet>
      {/* Projects */}
      {Projectsdata.map((project, id) => (
        <Accordion
          id={id}
          data={project}
          openedId={openedItem}
          isOpen={setOpened}
        />
      ))}
    </div>
  );
};

export default Projects;
