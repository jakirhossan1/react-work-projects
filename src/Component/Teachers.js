import React, { useEffect, useState } from "react";
import Details from "../Card/Details";

import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    const handleAddToDetails = (teacher) => {
        const newDetails = [...details, teacher];
        setDetails(newDetails)
    }
    const teacher = (props) => {
        const { teachers } = props;
        let total = 0;
        for (const teacher of teachers) {
            total = total + teacher.selary;
        }
    }
    return (

        <div className="teachers-container">

            <div className="Teacher-style">
                {
                    teachers.map(teacher => <Details teacher={teacher} handleAddToDetails={handleAddToDetails}></Details>)
                }

            </div>

            <div className='cart'>
                <h2>Details  Cart :</h2>
                <h5>Teacher Count : {details.length}</h5>

                <p>Teacher Name : </p>
                <p>Teacher Salary :{teacher.total} </p>

            </div>

        </div>




    );

};
export default Teachers


