import React from "react";
import { ArticlesData } from "../data";
import Accordion from "../components/Accordion";

const Articles = () => {
  return (
    <div className="ml-10 w-[700px] max-sm:w-[90%] max-sm:ml-5 h-[70%] overflow-y-auto">
      {/* Projects */}
      {ArticlesData.map((project) => (
        <Accordion data={project} />
      ))}
    </div>
  );
};

export default Articles;
