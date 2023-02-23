import stylesDdlChild from "../DropDownChildTeste.module.css";

function DropDownChildTeste (props) {
    return(
        <div className={stylesDdlChild.selectDisplay} style={{width: props.boxSize}}>
            <div className={stylesDdlChild.container}>
            </div>
        </div>
    );
};

export default DropDownChildTeste;