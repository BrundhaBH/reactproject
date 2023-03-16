import React from "react";
import Courses from './Courses';

const Institute=()=>{
    return(
        <>
        <Courses courseDetails={{
            courseName: "Java Full Stack",
            courseAvail: true,
            courseDuration: "3 Months"}}/>
        </>
    )
}

export default Institute;
