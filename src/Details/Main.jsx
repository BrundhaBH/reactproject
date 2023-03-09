import React from "react";
import json from "./user data.json";
import Student from './Student';

const Main=()=>{
    return(
        <div>
            <Student payload={json}/>
        </div>
    )
}
export default Main;