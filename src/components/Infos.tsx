import Navbar from "./NavBar";

const Infos = () => {
    return (
        <div className="flex flex-col">
            <div className="self-end mr-6 mt-4">
                <Navbar />
            </div>
            <div className="w-12 h-[200px] bg-slate-600"></div>
        </div>
    );
}

export default Infos;