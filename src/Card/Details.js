import React from "react";
import './Details.css';

const Details = (props) => {
    // console.log(props);
    const { name, image, selary, subject, Adress } = props.teacher;
    return (
        <div className="Teacher-style">

            <div><img src={image} alt="" />
                <h4>Name : {name}</h4>
                <h5>Subject : {subject}</h5>
                <h5>Salary : {selary} Taka</h5>
                <p>Address : {Adress}</p>
                <button onClick={() => props.handleAddToDetails(props.teacher)} className="btn">Add Me</button>
            </div>

        </div>
    )
}
export default Details;