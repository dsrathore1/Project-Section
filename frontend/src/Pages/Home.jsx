import React from 'react';
import axios from "axios";


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