import stylesDdl from "../DropDown.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";
// import { BsFillCaretUpFill } from "react-icons/bs";
import { useState } from "react";

import DropDownChildTeste from "./DropDownChildTeste";

function DropDownTeste(props) {
    const [showContent, setShowContent] = useState(false)

    const ddlClick = () => {
        setShowContent(!showContent);
    };

    return (
        <div style={{width: props.lblSize}}>
            <div style={{width: "100%"}} >
                <label>{props.lblName}</label>
                <div className={stylesDdl.ddlMultiSelect} onClick={ddlClick}>
                    <div className={stylesDdl.ddlSelectMain}>
                    <div id="lblMultSelect" className={stylesDdl.lblMultSelect}></div>
                    <div className={stylesDdl.iconDisplay}>
                        <BsFillCaretDownFill/> {/* icone do dropdown */}
                    </div>
                    </div>
                </div>
                <DropDownChildTeste boxSize="100%"/>
            </div>
        </div>
    );
};

export default DropDownTeste;