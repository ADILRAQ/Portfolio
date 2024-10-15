import Button from "./Button";

const Navbar = () => {
    return (
        <div className="right-4 h-16 flex gap-5">
            <Button onClick={() => ''} variant='styled' sz="sm" >Projects</Button>
            <Button onClick={() => ''} variant='styled' sz="md" >Articles</Button>
            <Button onClick={() => ''} variant='styled' sz="lg" >Resume {'>'}</Button>
            <Button onClick={() => ''} variant='dark' sz="lg" >Resume {'>'}</Button>
        </div>
    );
}

export default Navbar;