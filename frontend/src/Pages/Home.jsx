import React from 'react';
import axios from "axios";

import { Link } from 'react-router-dom';

const Home = () => {

    const [project, setProject] = React.useState([]);

    const response = async () => {
        const { data } = await axios.get("http://localhost:4000/getData");
        console.log(data);
        setProject(data);
    }

    React.useEffect(() => {
        response();
    }, [])


    return (
        <>
            <center>
                <Link to="/auth" style={{ color: "coral", textDecoration: "none", fontSize: "1.1rem", textTransform: "uppercase" }}>Auth Page</Link>
            </center>

            {project.map((data) => {
                return (

                    <div key={data._id}>
                        <h1>{data.title}</h1>
                        <h2>Technologies Used : {data.tech}</h2>
                        <p>{data.desc}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Home