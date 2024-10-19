import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="right-4 flex gap-5">
      <Button onClick={() => navigate('/projects')} variant='normal' sz="md" >Projects</Button>
      <Button onClick={() => navigate('/Articles')} variant='normal' sz="md" >Articles</Button>
      <Button onClick={() => window.open('resume.pdf', '_blanh', 'noopener,noreferrer')} variant='normal' sz="md" ><div className="text-orange">Resume {'>'}</div></Button>
    </div>
  );
}

export default Navbar;