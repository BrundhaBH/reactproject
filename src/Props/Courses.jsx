import React from 'react'

const Courses = (props) => {

    if(props.courseDetails.courseAvail==true)
    {
        return(
            <>
            <h1>{props.courseDetails.courseName}</h1>
            <h1>{props.courseDetails.courseDuration}</h1>
            <button style={{color:"green"}}> AVAILABLE </button>
            </>
        )
    }
    
    else{
        return(
            <>
            <h1>{props.courseDetails.courseName}</h1>
            <h1>{props.courseDetails.courseDuration}</h1>
            <button style={{color:"red"}}> NOT AVAILABLE </button>
            </>
        )
    }
}

export default Courses;