import stylesDdlChild from "../DropDownChildTeste.module.css";
import DdlContent from "./DdlContent";

function DropDownChildTeste (props) {
    return(
        <div className={stylesDdlChild.selectDisplay} style={{width: props.boxSize}}>
            <div className={stylesDdlChild.container}>
                <DdlContent/>
            </div>
        </div>
    );
};

export default DropDownChildTeste;