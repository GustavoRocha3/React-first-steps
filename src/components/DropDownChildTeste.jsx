import stylesDdlChild from "../DropDownChildTeste.module.css";

import React, { useState } from "react";
import DdlContent from "./DdlContent";

function DropDownChildTeste (props) {
    const [lblResume, setLblResume] = useState('');
    
    function updateLblState(resume) {
        setLblResume(resume);
    }

    return(
        <div className={stylesDdlChild.selectDisplay} style={{width: props.boxSize}}>
            <div className={stylesDdlChild.container}>
                <DdlContent lblResume={updateLblState}/>
            </div>
        </div>
    );
};

export default DropDownChildTeste;