import acccre from "./accountcreate.JPG"

function Accman(){
    const accoman={
        textAlign: 'center',
        marginTop: '10px' 
    };
    return(
        <div style = {accoman}>
            <img style={{ scale: '1.2'}}
            src={acccre}></img>
        </div>
    )
}

export default Accman;