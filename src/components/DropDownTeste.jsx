import React, { useState, useEffect, useRef} from "react";
import stylesDdl from "../DropDown.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

import DropDownChildTeste from "./DropDownChildTeste";



function DropDownTeste(props) {
    const [showContent, setShowContent] = useState(false);
    const divRef = useRef(null);
    const divPaiRef = useRef(null);
    
    const handleClick = () => {
        setShowContent(!showContent);
    };

    useEffect(() => {
        function clickOut(event) {
            if (divPaiRef.current && !divPaiRef.current.contains(event.target)){
                if(divRef.current && !divRef.current.contains(event.target)){
                    setShowContent(false)
                }
            }
        };

        window.addEventListener('click', clickOut);
        
        return () => {
            window.removeEventListener('click', clickOut);
        }
    }, [divRef]);

    const divDisplay = { display: showContent ? 'block' : 'none' };
    

    return (
        <div style={{width: props.lblSize}}>
            <div style={{width: "100%"}} >
                <label>{props.lblName}</label>
                <div ref={divPaiRef} onClick={handleClick} className={stylesDdl.ddlMultiSelect}>
                    <div className={stylesDdl.ddlSelectMain}>
                    <div id="lblMultSelect" className={stylesDdl.lblMultSelect}></div>
                    <div className={stylesDdl.iconDisplay}>
                        {showContent ? (<BsFillCaretUpFill/>) : (<BsFillCaretDownFill/>)}
                         {/* icone do dropdown */}
                    </div>
                    </div>
                </div>
                <div ref={divRef} style={divDisplay}>
                    <DropDownChildTeste boxSize={props.lblSize}/>
                </div>
                <div>teste 123123123 </div>
            </div>
        </div>
    );
};

export default DropDownTeste ;