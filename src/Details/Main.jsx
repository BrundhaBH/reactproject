import React from "react";
import json from './Data.json';
import Student from './Student';
import "./global.css"

const Main=()=>{
    return(
        <div>
            <Student payload={json}/>
        </div>
    )
}
export default Main;