import React from "react";
import { ArticlesData } from "../data";
import Accordion from "../components/Accordion";
import { Helmet } from "react-helmet";

const Articles = () => {
  return (
    <div className="ml-10 w-[700px] max-sm:w-[90%] max-sm:ml-5 h-[70%] overflow-y-auto">
      <Helmet>
        <title>Articles | Your Portfolio</title>
        <meta name="description" content="Browse articles I have written about web development and tech." />
      </Helmet>
      {/* Projects */}
      {ArticlesData.map((project) => (
        <Accordion data={project} />
      ))}
    </div>
  );
};

export default Articles;
