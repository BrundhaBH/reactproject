import React from "react";

const Details=(props)=>{
    let data=props.data
    return(
        <div>
            <center>
            <table border="2px" style={{textAlign:"center", fontWeight:"bolder"}}>
                <tr>
                    <th>MovieName</th>
                    <th>Language</th>
                    <th>Hero</th>
                    <th>YOR</th>
                    <th>Photo</th>
                </tr>

                {data.map((x)=>{
                    return <tr>
                        <td>{x.MovieName}</td>
                        <td>{x.Language}</td>
                        <td>{x.Hero}</td>
                        <td>{x.YOR}</td>
                        <td><img src={x.Photo} alt="" style={{height:"50px", width:"50px"}}/></td>
                    </tr>
                })}                   
            </table>
            </center>
        </div>
    )
}

export default Details;