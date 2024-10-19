import React from "react";
import Accordion from "../components/AccordionItem";
import { Projectsdata } from "../data";

const Projects = () => {

  return (
    <div className="mx-auto w-[50%] h-[60%] bg-slate-200 overflow-y-auto">
      {/* Projects */}
      {
        Projectsdata.map(project => <Accordion data={project}/>)
      }
      {
        Projectsdata.map(project => <Accordion data={project}/>)
      }
      {
        Projectsdata.map(project => <Accordion data={project}/>)
      }
    </div>
  );
}

export default Projects;