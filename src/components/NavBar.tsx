import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="right-4 flex gap-5 max-sm:gap-2">
      <Button onClick={() => navigate('/projects')} variant='normal' sz="sm" >Projects</Button>
      <Button onClick={() => navigate('/Articles')} variant='normal' sz="sm" >Articles</Button>
      <Button onClick={() => window.open('resume.pdf', '_blanh', 'noopener,noreferrer')} variant='normal' sz="sm" ><div className="text-orange">Resume {'>'}</div></Button>
    </div>
  );
}

export default Navbar;