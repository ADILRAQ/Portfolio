import Button from "./Button";

const Navbar = () => {
  return (
    <div className="right-4 flex gap-5">
      <Button onClick={() => ''} variant='normal' sz="md" >Projects</Button>
      <Button onClick={() => ''} variant='normal' sz="md" >Articles</Button>
      <Button onClick={() => ''} variant='normal' sz="md" ><div className="text-orange">Resume {'>'}</div></Button>
    </div>
  );
}

export default Navbar;