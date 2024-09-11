// import { Description } from "../data";

const titleFormat = (name :string, desc :string | undefined) => {
    
    return (
        desc ? (
            <>
                <i><b><u>{name}</u></b></i>
                <p 
                    style={{fontSize:'12px'}}
                >{desc}</p>
            </>
        ) : name
    )
}

export default titleFormat;